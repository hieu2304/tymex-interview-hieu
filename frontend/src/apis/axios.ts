import axios from "axios";
import { getApiConfig } from "../config/api";
import { mockService, mockData } from "../services/mockData";

const config = getApiConfig();
const axiosInstance = axios.create({
  baseURL: config.baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});

// Function to handle API errors and fallback to mock data if needed
const handleApiError = async (error: any, mockFunction: () => Promise<any>) => {
  if (config.fallbackToMock) {
    console.warn("API call failed, falling back to mock data:", error.message);
    return mockFunction();
  }
  throw error;
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error("API Error:", error);

    // Get the original request configuration
    const { config: requestConfig } = error;
    if (!requestConfig) return Promise.reject(error);

    // Determine which mock function to use based on the request URL and method
    const url = requestConfig.url || "";
    const method = requestConfig.method || "get";

    try {
      if (method === "get") {
        if (url.includes("/products")) {
          if (url.includes("?authorId=")) {
            const authorId = parseInt(url.split("authorId=")[1]);
            return handleApiError(error, () =>
              mockService.getByAuthor(authorId)
            );
          }
          if (url.includes("?category=")) {
            const category = url.split("category=")[1];
            return handleApiError(error, () =>
              mockService.getByCategory(category)
            );
          }
          if (url.includes("?q=")) {
            const keyword = url.split("q=")[1];
            return handleApiError(error, () => mockService.search(keyword));
          }
          if (url.match(/\/products\/\d+/)) {
            const id = parseInt(url.split("/").pop() || "0");
            return handleApiError(error, () => mockService.getById(id));
          }
          return handleApiError(error, mockService.getAll);
        }
        if (url.includes("/authors")) {
          if (url.match(/\/authors\/\d+/)) {
            const id = parseInt(url.split("/").pop() || "0");
            return handleApiError(error, async () => ({
              data: mockData.authors.find((a) => a.id === id),
            }));
          }
          return handleApiError(error, async () => ({
            data: mockData.authors,
          }));
        }
      }
    } catch (mockError) {
      console.error("Mock data error:", mockError);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

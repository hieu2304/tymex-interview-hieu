export const API_CONFIG = {
  development: {
    baseURL: "http://localhost:3000",
    useMockData: true,
    mockDataPath: "/db.json",
    fallbackToMock: false,
  },
  production: {
    baseURL: process.env.REACT_APP_API_URL || "https://api.tyme.com",
    useMockData: false,
    fallbackToMock: true,
    mockDataPath: "/db.json",
  },
};

export const getApiConfig = () => {
  const isDevelopment = process.env.NODE_ENV === "development";
  return isDevelopment ? API_CONFIG.development : API_CONFIG.production;
};

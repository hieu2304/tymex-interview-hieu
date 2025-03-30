import axiosInstance from "./axios";
import { Product } from "./types";

export const productService = {
  getAll: (start: number, limit: number) =>
    axiosInstance.get<Product[]>(`/products?_start=${start}&_end=${limit}`),
  getById: (id: number) => axiosInstance.get<Product>(`/products/${id}`),
  getByAuthor: (authorId: number) =>
    axiosInstance.get<Product[]>(`/products?authorId=${authorId}`),
  getByCategory: (category: string) =>
    axiosInstance.get<Product[]>(`/products?category=${category}`),
  getByTheme: (theme: string) =>
    axiosInstance.get<Product[]>(`/products?theme=${theme}`),
  getByTier: (tier: string) =>
    axiosInstance.get<Product[]>(`/products?tier=${tier}`),
  search: (keyword: string) =>
    axiosInstance.get<Product[]>(`/products?q=${keyword}`),
  filter: (filter: {
    tier?: string;
    theme: string;
    priceOrder: "desc" | "asc";
    createdAtOrder: "desc" | "asc";
    price_gte: number;
    price_lte: number;
  }) => {
    const params = new URLSearchParams();
    if (filter?.tier && filter.tier !== "All") {
      params.append("tier", filter.tier);
    }
    params.append("theme", filter.theme);
    params.append("_sort", "price,createdAt");
    params.append("_order", `${filter.priceOrder},${filter.createdAtOrder}`);
    params.append("price_gte", filter.price_gte.toString());
    params.append("price_lte", filter.price_lte.toString());

    return axiosInstance.get<Product[]>(`/products?${params.toString()}`);
  },
};

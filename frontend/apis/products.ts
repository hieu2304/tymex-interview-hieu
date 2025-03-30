import axiosInstance from "./axios";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  isFavorite: boolean;
  createdAt: string;
  theme: string;
  tier: string;
  imageId: number;
  authorId: number;
}

export const productService = {
  getAll: () => axiosInstance.get<Product[]>("/products"),
  getById: (id: number) => axiosInstance.get<Product>(`/products/${id}`),
  getByAuthor: (authorId: number) =>
    axiosInstance.get<Product[]>(`/products?authorId=${authorId}`),
  getByCategory: (category: string) =>
    axiosInstance.get<Product[]>(`/products?category=${category}`),
  getByTheme: (theme: string) =>
    axiosInstance.get<Product[]>(`/products?theme=${theme}`),
  getByTier: (tier: string) =>
    axiosInstance.get<Product[]>(`/products?tier=${tier}`),
};

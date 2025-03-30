import axiosInstance from "./axios";

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: string;
}

export const authorService = {
  getAll: () => axiosInstance.get<Author[]>("/authors"),
  getById: (id: number) => axiosInstance.get<Author>(`/authors/${id}`),
};

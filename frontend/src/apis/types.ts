export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageId: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
  author?: Author;
  category: string;
  theme: string;
  tier: string;
}

export interface ProductWithAuthor extends Omit<Product, "authorId"> {
  authorId: number;
  author?: Author;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface Filter {
  tier: string;
  theme: string;
  priceOrder: "desc" | "asc";
  createdAtOrder: "desc" | "asc";
  price_lte: number;
  price_gte: number;
}

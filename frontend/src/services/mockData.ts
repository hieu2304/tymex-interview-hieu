import { Product, Author } from "../utils/types";

export const mockData = {
  products: [
    {
      id: 1,
      title: "Test Product 1",
      price: 10.5,
      description: "Test description 1",
      imageId: 1,
      authorId: 1,
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
      isFavorite: false,
      category: "Legendary",
      theme: "Fantasy",
      tier: "Epic",
      author: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        avatar: "/avatar1.png",
        email: "john@example.com",
        gender: "male",
        onlineStatus: "online",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
    },
    {
      id: 2,
      title: "Test Product 2",
      price: 15.75,
      description: "Test description 2",
      imageId: 2,
      authorId: 2,
      createdAt: "2024-01-02",
      updatedAt: "2024-01-02",
      isFavorite: true,
      category: "Rare",
      theme: "Sci-Fi",
      tier: "Rare",
      author: {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        avatar: "/avatar2.png",
        email: "jane@example.com",
        gender: "female",
        onlineStatus: "offline",
        createdAt: "2024-01-02",
        updatedAt: "2024-01-02",
      },
    },
  ] as Product[],
  authors: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      avatar: "/avatar1.png",
      email: "john@example.com",
      gender: "male",
      onlineStatus: "online",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      avatar: "/avatar2.png",
      email: "jane@example.com",
      gender: "female",
      onlineStatus: "offline",
      createdAt: "2024-01-02",
      updatedAt: "2024-01-02",
    },
  ] as Author[],
};

export const mockService = {
  getAll: async () => {
    return { data: mockData.products };
  },
  getById: async (id: number) => {
    const product = mockData.products.find((p) => p.id === id);
    return { data: product };
  },
  getByAuthor: async (authorId: number) => {
    const products = mockData.products.filter((p) => p.authorId === authorId);
    return { data: products };
  },
  getByCategory: async (category: string) => {
    const products = mockData.products.filter((p) => p.category === category);
    return { data: products };
  },
  getByTheme: async (theme: string) => {
    const products = mockData.products.filter((p) => p.theme === theme);
    return { data: products };
  },
  getByTier: async (tier: string) => {
    const products = mockData.products.filter((p) => p.tier === tier);
    return { data: products };
  },
  search: async (keyword: string) => {
    const products = mockData.products.filter(
      (p) =>
        p.title.toLowerCase().includes(keyword.toLowerCase()) ||
        p.description.toLowerCase().includes(keyword.toLowerCase())
    );
    return { data: products };
  },
  filter: async (filter: any) => {
    let products = [...mockData.products];

    if (filter.tier && filter.tier !== "All") {
      products = products.filter((p) => p.tier === filter.tier);
    }

    if (filter.theme) {
      products = products.filter((p) => p.theme === filter.theme);
    }

    if (filter.price_gte !== undefined) {
      products = products.filter((p) => p.price >= filter.price_gte);
    }

    if (filter.price_lte !== undefined) {
      products = products.filter((p) => p.price <= filter.price_lte);
    }

    // Sort by price
    if (filter.priceOrder) {
      products.sort((a, b) =>
        filter.priceOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    // Sort by creation date
    if (filter.createdAtOrder) {
      products.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return filter.createdAtOrder === "asc" ? dateA - dateB : dateB - dateA;
      });
    }

    return { data: products };
  },
};

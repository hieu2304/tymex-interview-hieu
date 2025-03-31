import dataMock from "./db.json";

export const mockService = {
  getAll: async ({ start = 0, limit = 20 } = {}) => {
    const paginatedProducts = dataMock.products.slice(start, start + limit);
    return {
      data: paginatedProducts,
      pagination: {
        total: dataMock.products.length,
        start,
        limit,
        hasMore: start + limit < dataMock.products.length,
      },
    };
  },
  getById: async (id: number) => {
    const product = dataMock.products.find((p) => p.id === id);
    return { data: product };
  },
  getByCategory: async (category: string) => {
    const products = dataMock.products.filter((p) => p.category === category);
    return { data: products };
  },
  getByTheme: async (theme: string) => {
    const products = dataMock.products.filter((p) => p.theme === theme);
    return { data: products };
  },
  getByTier: async (tier: string) => {
    const products = dataMock.products.filter((p) => p.tier === tier);
    return { data: products };
  },
  search: async (keyword: string) => {
    const products = dataMock.products.filter(
      (p) =>
        p.title.toLowerCase().includes(keyword.toLowerCase()) ||
        p.author.firstName.toLowerCase().includes(keyword.toLowerCase()) ||
        p.author.lastName.toLowerCase().includes(keyword.toLowerCase())
    );
    return { data: products };
  },
  filter: async (filter: any) => {
    let products = [...dataMock.products];

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

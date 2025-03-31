export type NavLinkType =
  | "home"
  | "about"
  | "teams"
  | "marketplace"
  | "roadmap"
  | "whitepaper";

export interface NavItem {
  id: NavLinkType;
  label: string;
  href: string;
}

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

export interface ProductWithImage extends Product {
  imgSrc: string;
}

export interface ProductCardProps {
  product: ProductWithImage;
}

export interface ImageWrapperProps {
  bgColor: string;
}

export interface ProductGridProps {
  products: ProductWithImage[];
  activeCategory: {
    value: string;
    label: string;
    index: number;
  };
  handleCategoryClick: (category: {
    value: string;
    label: string;
    index: number;
  }) => void;
  handlePaginate: () => void;
}

export interface Filter {
  tier: string;
  theme: string;
  priceOrder: "desc" | "asc";
  createdAtOrder: "desc" | "asc";
  price_lte: number;
  price_gte: number;
}

export interface FilterSidebarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
  onReset: () => void;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface Category {
  value: string;
  label: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

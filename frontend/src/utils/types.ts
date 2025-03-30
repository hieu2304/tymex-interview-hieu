import { Product } from "../apis/types";

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

export interface NavLinkProps {
  $isActive: boolean;
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

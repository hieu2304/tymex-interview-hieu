import { NavItem } from "../utils/types";

export const characters = [
  { name: "Neon Guy", src: "/neon-guy.png" },
  { name: "Mafia England", src: "/mafia.png" },
  { name: "Basketball Girl", src: "/basketball-girl.png" },
  { name: "Assassin", src: "/assassin.png" },
];

export const themes = [
  { value: "Light", label: "Light" },
  { value: "Dark", label: "Dark" },
  { value: "Halloween", label: "Halloween" },
  { value: "Colorful", label: "Colorful" },
];

export const tiers = [
  { value: "All", label: "All" },
  { value: "Basic", label: "Basic" },
  { value: "Deluxe", label: "Deluxe" },
  { value: "Premium", label: "Premium" },
];

export const priceOrder = [
  { value: "asc", label: "Low to high" },
  { value: "desc", label: "High to low" },
];

export const timeOrder = [
  { value: "asc", label: "Latest" },
  { value: "desc", label: "Oldest" },
];

export const categories = [
  { value: "1", label: "All" },
  { value: "2", label: "Legendary" },
  { value: "3", label: "Accessory" },
  { value: "4", label: "Hat" },
  { value: "5", label: "Rare" },
  { value: "6", label: "Mythic" },
  { value: "7", label: "Epic" },
  { value: "8", label: "Upper Body" },
  { value: "9", label: "Lower Body" },
  { value: "10", label: "Shoes" },
];

export const images = {
  assassin: "/assassin.png",
  mafia: "/mafia.png",
  neon: "/neon-guy.png",
  dj: "/the-dj.png",
  basketball: "/basketball-girl.png",
};

export const navLinks: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "teams", label: "Our Teams", href: "/teams" },
  { id: "marketplace", label: "Marketplace", href: "/marketplace" },
  { id: "roadmap", label: "Roadmap", href: "/roadmap" },
  { id: "whitepaper", label: "Whitepaper", href: "/whitepaper" },
];

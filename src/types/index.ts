// Product Types
export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: string;
  priceNumeric: number;
  image: string;
  isNew?: boolean;
  description?: string;
  rating?: number;
  reviews?: number;
}

// Filter Types
export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  materials: string[];
  sortBy: "featured" | "price-low" | "price-high" | "newest" | "name";
  currentPage: number;
  searchQuery: string;
  itemsPerPage: number;
}

// Cart Types
export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
}

// Category Types
export type ProductCategory = "Earrings" | "Bracelets" | "Rings" | "Necklaces" | "Watches";

// Sort Options
export type SortOption = "featured" | "price-low" | "price-high" | "newest" | "name";

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  submenuItems: string[];
  images: NavImage[];
}

export interface NavImage {
  src: string;
  alt: string;
  label: string;
}

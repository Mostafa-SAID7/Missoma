// Category constants
export const PRODUCT_CATEGORIES = ["Earrings", "Bracelets", "Rings", "Necklaces", "Watches"];

// Price range constants
export const PRICE_RANGES = [
  { label: "Under €1,000", min: 0, max: 1000 },
  { label: "€1,000 - €2,000", min: 1000, max: 2000 },
  { label: "€2,000 - €3,000", min: 2000, max: 3000 },
  { label: "Over €3,000", min: 3000, max: 5000 },
];

// Material constants
export const MATERIALS = ["Gold", "Silver", "Rose Gold", "Platinum"];

// Sort options
export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "name", label: "Name A-Z" },
];

// Pagination constants
export const DEFAULT_ITEMS_PER_PAGE = 12;
export const MAX_ITEMS_PER_PAGE = 50;

// Popular searches
export const POPULAR_SEARCHES = [
  "Gold Rings",
  "Silver Necklaces",
  "Pearl Earrings",
  "Designer Bracelets",
  "Wedding Rings",
  "Vintage Collection",
];

// API endpoints (for future use)
export const API_BASE_URL = process.env.VITE_API_URL || "http://localhost:3000/api";
export const API_ENDPOINTS = {
  PRODUCTS: "/products",
  CATEGORIES: "/categories",
  SEARCH: "/search",
  ORDERS: "/orders",
  USERS: "/users",
};

// App constants
export const APP_NAME = "Linea Jewelry";
export const APP_VERSION = "1.0.0";
export const CURRENCY = "EUR";
export const CURRENCY_SYMBOL = "€";

// Navigation constants
export const NAV_ITEMS = [
  {
    name: "Shop",
    href: "/category/shop",
    submenuItems: ["Rings", "Necklaces", "Earrings", "Bracelets", "Watches"],
  },
  {
    name: "New in",
    href: "/category/new-in",
    submenuItems: ["This Week's Arrivals", "Spring Collection", "Featured Designers", "Limited Edition", "Pre-Orders"],
  },
  {
    name: "About",
    href: "/about/our-story",
    submenuItems: ["Our Story", "Sustainability", "Size Guide", "Customer Care", "Store Locator"],
  },
];

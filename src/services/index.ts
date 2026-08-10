/**
 * Product Service - Handles product-related API calls and operations
 */

import { Product, CartItem } from "@/types";
import { products, searchProducts as searchProductsData } from "@/data/products";

class ProductService {
  /**
   * Fetch all products
   */
  async getAllProducts(): Promise<Product[]> {
    // For now, return mock data
    // In future, this will call: GET /api/products
    return Promise.resolve(products);
  }

  /**
   * Fetch product by ID
   */
  async getProductById(id: number): Promise<Product | undefined> {
    // For now, return from mock data
    // In future, this will call: GET /api/products/:id
    return Promise.resolve(products.find((p) => p.id === id));
  }

  /**
   * Search products
   */
  async searchProducts(query: string): Promise<Product[]> {
    // For now, use local search
    // In future, this will call: GET /api/search?q=query
    return Promise.resolve(searchProductsData(query));
  }

  /**
   * Get products by category
   */
  async getProductsByCategory(category: string): Promise<Product[]> {
    // For now, filter from mock data
    // In future, this will call: GET /api/products?category=category
    return Promise.resolve(products.filter((p) => p.category === category));
  }

  /**
   * Get featured products
   */
  async getFeaturedProducts(): Promise<Product[]> {
    // For now, return new products
    // In future, this will call: GET /api/products/featured
    return Promise.resolve(products.filter((p) => p.isNew));
  }
}

/**
 * Cart Service - Handles cart operations
 */
class CartService {
  private storageKey = "linea_cart";

  /**
   * Get cart from localStorage
   */
  getCart(): CartItem[] {
    const cart = localStorage.getItem(this.storageKey);
    return cart ? JSON.parse(cart) : [];
  }

  /**
   * Save cart to localStorage
   */
  saveCart(cart: CartItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  /**
   * Clear cart
   */
  clearCart(): void {
    localStorage.removeItem(this.storageKey);
  }

  /**
   * Get total items in cart
   */
  getTotalItems(): number {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Get cart total price
   */
  getTotalPrice(): number {
    const cart = this.getCart();
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
      return total + price * item.quantity;
    }, 0);
  }
}

/**
 * Local Storage Service - Handles localStorage operations
 */
class LocalStorageService {
  /**
   * Get item from localStorage
   */
  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  /**
   * Set item in localStorage
   */
  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Remove item from localStorage
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clear all localStorage
   */
  clear(): void {
    localStorage.clear();
  }
}

// Export service instances
export const productService = new ProductService();
export const cartService = new CartService();
export const storageService = new LocalStorageService();

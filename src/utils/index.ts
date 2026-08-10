/**
 * Convert text to URL-friendly slug
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]/g, "") // Remove special characters
    .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen
};

/**
 * Unslugify - convert slug back to readable text
 */
export const unslugify = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Parse price string to number
 */
export const parsePrice = (priceString: string): number => {
  return parseInt(priceString.replace(/[^0-9]/g, ""), 10);
};

/**
 * Truncate text to specific length
 */
export const truncateText = (text: string, maxLength: number = 50): string => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Debounce function
 */
export const debounce = <Args extends unknown[]>(
  func: (...args: Args) => void,
  delay: number
): ((...args: Args) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * Check if value is empty
 */
export const isEmpty = (value: unknown): boolean => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value as Record<string, unknown>).length === 0)
  );
};

/**
 * Deep clone object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

/**
 * Format date
 */
export const formatDate = (date: Date | string, format: string = "MM/DD/YYYY"): string => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return format.replace("DD", day).replace("MM", month).replace("YYYY", String(year));
};

/**
 * URL encode parameters
 */
export const encodeParams = (params: Record<string, unknown>): string => {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join("&");
};

/**
 * Validate email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-()+]{10,}$/;
  return phoneRegex.test(phone);
};

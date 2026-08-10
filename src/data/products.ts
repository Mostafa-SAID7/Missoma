import { Product } from "@/types";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";
import haloImage from "@/assets/halo.jpg";
import obliqueImage from "@/assets/oblique.jpg";
import lintelImage from "@/assets/lintel.jpg";
import shadowlineImage from "@/assets/shadowline.jpg";

export const products: Product[] = [
  { id: 1, name: "Pantheon", slug: "pantheon", category: "Earrings", price: "€2,850", priceNumeric: 2850, image: pantheonImage, isNew: true },
  { id: 2, name: "Eclipse", slug: "eclipse", category: "Bracelets", price: "€3,200", priceNumeric: 3200, image: eclipseImage },
  { id: 3, name: "Halo", slug: "halo", category: "Earrings", price: "€1,950", priceNumeric: 1950, image: haloImage, isNew: true },
  { id: 4, name: "Oblique", slug: "oblique", category: "Earrings", price: "€1,650", priceNumeric: 1650, image: obliqueImage },
  { id: 5, name: "Lintel", slug: "lintel", category: "Earrings", price: "€2,250", priceNumeric: 2250, image: lintelImage },
  { id: 6, name: "Shadowline", slug: "shadowline", category: "Bracelets", price: "€3,950", priceNumeric: 3950, image: shadowlineImage },
  { id: 7, name: "Meridian", slug: "meridian", category: "Earrings", price: "€2,450", priceNumeric: 2450, image: pantheonImage },
  { id: 8, name: "Vertex", slug: "vertex", category: "Bracelets", price: "€2,800", priceNumeric: 2800, image: eclipseImage },
  { id: 9, name: "Apex", slug: "apex", category: "Earrings", price: "€1,550", priceNumeric: 1550, image: haloImage },
  { id: 10, name: "Zenith", slug: "zenith", category: "Earrings", price: "€1,850", priceNumeric: 1850, image: obliqueImage },
  { id: 11, name: "Prism", slug: "prism", category: "Earrings", price: "€2,050", priceNumeric: 2050, image: lintelImage },
  { id: 12, name: "Radiant", slug: "radiant", category: "Bracelets", price: "€3,650", priceNumeric: 3650, image: shadowlineImage },
  { id: 13, name: "Stellar", slug: "stellar", category: "Earrings", price: "€2,150", priceNumeric: 2150, image: pantheonImage },
  { id: 14, name: "Cosmos", slug: "cosmos", category: "Bracelets", price: "€2,950", priceNumeric: 2950, image: eclipseImage },
  { id: 15, name: "Aurora", slug: "aurora", category: "Earrings", price: "€1,750", priceNumeric: 1750, image: haloImage },
  { id: 16, name: "Nebula", slug: "nebula", category: "Earrings", price: "€1,850", priceNumeric: 1850, image: obliqueImage },
  { id: 17, name: "Orbit", slug: "orbit", category: "Earrings", price: "€2,350", priceNumeric: 2350, image: lintelImage },
  { id: 18, name: "Galaxy", slug: "galaxy", category: "Bracelets", price: "€3,450", priceNumeric: 3450, image: shadowlineImage },
  { id: 19, name: "Lunar", slug: "lunar", category: "Earrings", price: "€2,050", priceNumeric: 2050, image: pantheonImage },
  { id: 20, name: "Solar", slug: "solar", category: "Bracelets", price: "€3,150", priceNumeric: 3150, image: eclipseImage },
  { id: 21, name: "Astral", slug: "astral", category: "Earrings", price: "€1,650", priceNumeric: 1650, image: haloImage },
  { id: 22, name: "Cosmic", slug: "cosmic", category: "Earrings", price: "€1,950", priceNumeric: 1950, image: obliqueImage },
  { id: 23, name: "Celestial", slug: "celestial", category: "Earrings", price: "€2,250", priceNumeric: 2250, image: lintelImage },
  { id: 24, name: "Ethereal", slug: "ethereal", category: "Bracelets", price: "€3,750", priceNumeric: 3750, image: shadowlineImage },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.slug.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
};

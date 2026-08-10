import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFilter } from "@/contexts/FilterContext";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Pagination from "./Pagination";
import { useMemo } from "react";
import { products } from "@/data/products";
import { Product } from "@/types";
import organicEarring from "@/assets/organic-earring.png";
import linkBracelet from "@/assets/link-bracelet.png";

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const { addToCart } = useCart();
  const { ref, isVisible } = useScrollFadeIn(0.1, (index % 4) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[700ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link to={`/product/${product.slug}`}>
        <Card className="border-none shadow-none bg-transparent group cursor-pointer transition-all duration-500 hover-lift">
          <CardContent className="p-0">
            <div className="aspect-[3/4] mb-4 overflow-hidden bg-card relative rounded-2xl shadow-[0_4px_20px_-6px_hsl(25_30%_15%/0.08)] group-hover:shadow-[0_8px_24px_-8px_hsl(25_30%_15%/0.12)] transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105" />
              <img src={product.category === "Earrings" ? organicEarring : linkBracelet} alt={`${product.name} lifestyle`} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105" />
              {product.isNew && (
                <div className="absolute top-3 left-3 px-3 py-1 text-[10px] font-medium tracking-widest uppercase text-foreground bg-background/80 backdrop-blur-sm rounded-full">
                  New
                </div>
              )}
              <button
                onClick={handleAddToCart}
                className="absolute bottom-3 right-3 p-2.5 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110 text-foreground shadow-sm"
                aria-label="Add to bag"
              >
                <ShoppingBag size={15} />
              </button>
            </div>
            <div className="space-y-1 px-1">
              <p className="text-xs font-light tracking-wider uppercase text-muted-foreground">{product.category}</p>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
                <p className="text-sm font-light text-muted-foreground">{product.price}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

const ProductGrid = () => {
  const { filters } = useFilter();
  const { categories, priceRange, sortBy, currentPage, itemsPerPage } = filters;

  // Filter and sort products
  const displayedProducts = useMemo(() => {
    let filtered = products;

    // Apply category filter
    if (categories.length > 0) {
      filtered = filtered.filter((p) =>
        categories.includes(p.category)
      );
    }

    // Apply price range filter
    filtered = filtered.filter(
      (p) => p.priceNumeric >= priceRange[0] && p.priceNumeric <= priceRange[1]
    );

    // Apply sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.priceNumeric - b.priceNumeric);
        break;
      case "price-high":
        sorted.sort((a, b) => b.priceNumeric - a.priceNumeric);
        break;
      case "newest":
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        // Keep original order
        break;
    }

    // Apply pagination
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    return sorted.slice(startIdx, endIdx);
  }, [categories, priceRange, sortBy, currentPage, itemsPerPage]);

  return (
    <section className="w-full mb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {displayedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <Pagination totalItems={products.length} />
      </div>
    </section>
  );
};

export default ProductGrid;

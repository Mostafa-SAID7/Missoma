import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Product } from "@/types";
import organicEarring from "@/assets/organic-earring.png";
import linkBracelet from "@/assets/link-bracelet.png";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
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

const Search = () => {
  const { query = "" } = useParams<{ query: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(query || "");

  const results = useMemo(() => {
    if (!query) return [];
    
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search bar */}
          <div className="mb-12">
            <form onSubmit={handleSearch} className="flex items-center gap-3 mb-8">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-card rounded-lg transition-colors"
                aria-label="Go back"
              >
                <ChevronLeft size={20} className="text-foreground" />
              </button>
              <div className="flex-1 flex items-center border-b border-border pb-2 focus-within:border-primary transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-foreground/60 mr-3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for jewelry..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-light"
              >
                Search
              </button>
            </form>

            {/* Results header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
                  Search Results
                </h1>
                {query && (
                  <p className="text-muted-foreground">
                    {results.length === 0
                      ? `No results found for "${query}"`
                      : `Found ${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* No results state */}
          {results.length === 0 && query ? (
            <div className="text-center py-20">
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-16 h-16 mx-auto text-muted-foreground/50"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-light text-foreground mb-3">No items found</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                We couldn't find any jewelry matching your search. Try different keywords or browse our collections.
              </p>
              <Link to="/category/all">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Browse All Products
                </Button>
              </Link>
            </div>
          ) : (
            /* Products grid */
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {results.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

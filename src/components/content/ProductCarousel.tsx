import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";
import haloImage from "@/assets/halo.jpg";
import obliqueImage from "@/assets/oblique.jpg";
import lintelImage from "@/assets/lintel.jpg";
import shadowlineImage from "@/assets/shadowline.jpg";
import organicEarring from "@/assets/organic-earring.png";
import linkBracelet from "@/assets/link-bracelet.png";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Pantheon", category: "Earrings", price: "€2,850", image: pantheonImage },
  { id: 2, name: "Eclipse", category: "Bracelets", price: "€3,200", image: eclipseImage },
  { id: 3, name: "Halo", category: "Earrings", price: "€1,950", image: haloImage },
  { id: 4, name: "Oblique", category: "Earrings", price: "€1,650", image: obliqueImage },
  { id: 5, name: "Lintel", category: "Earrings", price: "€2,250", image: lintelImage },
  { id: 6, name: "Shadowline", category: "Bracelets", price: "€3,950", image: shadowlineImage },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const { addToCart } = useCart();
  const { ref, isVisible } = useScrollFadeIn(0.1, index * 80);

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
      className={`transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <Link to={`/product/${product.id}`}>
        <Card className="border-none shadow-none bg-transparent group transition-all duration-200 hover:scale-[1.03] hover:shadow-lg">
          <CardContent className="p-0">
            <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0" />
              <img src={product.category === "Earrings" ? organicEarring : linkBracelet} alt={`${product.name} lifestyle`} className="absolute inset-0 w-full h-full object-cover transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-black/[0.03]"></div>
              {(product.id === 1 || product.id === 3) && (
                <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-black">NEW</div>
              )}
              <button
                onClick={handleAddToCart}
                className="absolute bottom-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-background text-foreground"
                aria-label="Add to bag"
              >
                <ShoppingBag size={16} />
              </button>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-light text-foreground">{product.category}</p>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
                <p className="text-sm font-light text-foreground">{product.price}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

const ProductCarousel = () => {
  return (
    <section className="w-full mb-16 px-6">
      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pr-2 md:pr-4">
              <ProductCard product={product} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProductCarousel;

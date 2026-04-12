import earringsCollection from "@/assets/earrings-collection.png";
import linkBracelet from "@/assets/link-bracelet.png";
import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const FiftyFiftySection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollFadeIn(0.15, 0);
  const { ref: rightRef, isVisible: rightVisible } = useScrollFadeIn(0.15, 150);

  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          ref={leftRef}
          className={`transition-all duration-[800ms] ease-out ${
            leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link to="/category/earrings" className="block group">
            <div className="w-full aspect-[4/5] mb-4 overflow-hidden rounded-2xl shadow-[0_4px_20px_-6px_hsl(25_30%_15%/0.08)]">
              <img
                src={earringsCollection}
                alt="Earrings collection"
                className="w-full h-full object-cover image-cinematic"
              />
            </div>
          </Link>
          <div className="px-1">
            <h3 className="text-sm font-medium tracking-widest uppercase text-foreground mb-1">
              Organic Forms
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Nature-inspired pieces with fluid, sculptural details
            </p>
          </div>
        </div>

        <div
          ref={rightRef}
          className={`transition-all duration-[800ms] ease-out ${
            rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link to="/category/bracelets" className="block group">
            <div className="w-full aspect-[4/5] mb-4 overflow-hidden rounded-2xl shadow-[0_4px_20px_-6px_hsl(25_30%_15%/0.08)]">
              <img
                src={linkBracelet}
                alt="Chain link bracelet"
                className="w-full h-full object-cover image-cinematic"
              />
            </div>
          </Link>
          <div className="px-1">
            <h3 className="text-sm font-medium tracking-widest uppercase text-foreground mb-1">
              Chain Collection
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Refined links and connections in precious metals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;

import heroImage from "@/assets/hero-image.png";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const LargeHero = () => {
  const { ref, isVisible } = useScrollFadeIn(0.15);

  return (
    <section className="w-full mb-16 px-6">
      <div
        ref={ref}
        className={`transition-all duration-[800ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-full aspect-[16/9] mb-4 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={heroImage}
            alt="Modern jewelry collection"
            className="w-full h-full object-cover image-cinematic"
          />
        </div>
        <div className="px-1">
          <h2 className="text-sm font-medium tracking-widest uppercase text-foreground mb-1">
            Modern Heritage
          </h2>
          <p className="text-sm font-light text-muted-foreground">
            Contemporary jewelry crafted with timeless elegance
          </p>
        </div>
      </div>
    </section>
  );
};

export default LargeHero;

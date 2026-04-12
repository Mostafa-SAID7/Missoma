import founders from "@/assets/founders.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const EditorialSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollFadeIn(0.15, 0);
  const { ref: imgRef, isVisible: imgVisible } = useScrollFadeIn(0.15, 200);

  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          ref={textRef}
          className={`space-y-5 max-w-[630px] transition-all duration-[800ms] ease-out ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-normal text-foreground leading-tight">
            Jewelry Drawn From Shadows and Lines
          </h2>
          <p className="text-sm font-light text-muted-foreground leading-relaxed">
            Linea was born from the meeting of two minds who saw beauty not just in ornament, but in structure. With backgrounds spanning architecture and fine arts, the founders believed that jewelry could be more than decoration — it could be an extension of space, light, and line.
          </p>
          <Link
            to="/about/our-story"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors duration-300 group"
          >
            <span>Read our full story</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          ref={imgRef}
          className={`order-first md:order-last transition-all duration-[800ms] ease-out ${
            imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-full aspect-square overflow-hidden rounded-2xl shadow-lg">
            <img
              src={founders}
              alt="Linea founders - two women in minimalist jewelry"
              className="w-full h-full object-cover image-cinematic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;

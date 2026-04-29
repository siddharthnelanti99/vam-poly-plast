import { Button } from "@/components/ui/button";
import { useInViewReveal } from "../hooks/useScrollReveal";

export function QualityBanner() {
  const ref = useInViewReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="reveal bg-gradient-to-r from-pu-red-mid via-pu-red to-pu-accent py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="text-white/80 text-sm font-medium tracking-widest uppercase mb-3 font-body">
          Our Promise
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4">
          Quality Products
        </h2>
        <p className="text-white/90 text-lg sm:text-xl font-body mb-6 sm:mb-8 italic">
          It's a Polyurethane promise
        </p>
        <Button
          asChild
          className="bg-white text-pu-red hover:bg-white/90 font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base rounded-sm transition-all duration-200 hover:scale-105 shadow-lg"
          data-ocid="quality_banner.primary_button"
        >
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </section>
  );
}

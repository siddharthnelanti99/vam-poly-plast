import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const heroWords = [
  { word: "Welcome", id: "w1" },
  { word: "to", id: "w2" },
  { word: "the", id: "w3" },
  { word: "World", id: "w4" },
  { word: "of", id: "w5" },
  { word: "POLYURETHANE", id: "w6" },
];

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const bg = heroRef.current.querySelector(".hero-bg") as HTMLElement;
      if (bg) {
        bg.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1600x600.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-800/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-6 sm:mb-8 font-body"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
          Manufacturing Excellence Since 1988
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 max-w-4xl">
          {heroWords.map(({ word, id }, i) => (
            <motion.span
              key={id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + i * 0.12,
                duration: 0.55,
                ease: "easeOut",
              }}
              className="inline-block mr-3 sm:mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white">
            VAM POLY PLAST
          </h2>
          <p className="text-white/80 font-body font-semibold text-base sm:text-lg tracking-widest uppercase mt-1">
            Architects of Polyurethane
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed font-body"
        >
          India's leading manufacturer of premium Cast Polyurethane Elastomers.
          Engineering superior quality PU products for mining, oil &amp; gas,
          industrial, and material handling applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
        >
          <Button
            asChild
            className="bg-pu-red hover:bg-pu-red-mid text-white font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base rounded-sm transition-all duration-200 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            data-ocid="hero.primary_button"
          >
            <a href="#products">Know Our Products!</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-white/50 text-white hover:bg-white/10 hover:border-white px-6 sm:px-8 py-3 text-sm sm:text-base rounded-sm backdrop-blur-sm w-full sm:w-auto"
            data-ocid="hero.secondary_button"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

import {
  Circle,
  Cog,
  Disc,
  Droplets,
  Grid3X3,
  Layers,
  Scissors,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Exact image URLs extracted from www.vampoly.com homepage HTML source
const products = [
  {
    icon: Grid3X3,
    title: "PU Flip Flow Screen Mats",
    desc: "High-performance screening for fine, wet, and sticky materials",
    image: "https://www.vampoly.com/images/vampoly/flipflow/8.webp",
    fallbackColor: "#8B1A1A",
  },
  {
    icon: Layers,
    title: "PU Dewatering Screen Panels",
    desc: "Precision-engineered for M-Sand and P-Sand industries",
    image:
      "https://www.vampoly.com/images/vampoly/Dewatering/Dewatering-Screen-Panel-400x300.webp",
    fallbackColor: "#A31515",
  },
  {
    icon: Circle,
    title: "Pipe Cleaning PIGs",
    desc: "Robust pipeline pigging tools for oil and gas sectors",
    image:
      "https://www.vampoly.com/images/vampoly/Polyurethane-Pigs/polyurethane-cleaning-pigs.webp",
    fallbackColor: "#7A1010",
  },
  {
    icon: Disc,
    title: "Polyurethane Rollers",
    desc: "PU-coated conveyor rollers for heavy-duty applications",
    image:
      "https://www.vampoly.com/images/vampoly/polyurethane-rollers/polyurethane-rollers.webp",
    fallbackColor: "#C0392B",
  },
  {
    icon: Wrench,
    title: "Polyurethane Relining",
    desc: "Durable relining solutions extending equipment life",
    image: "https://www.vampoly.com/images/vampoly/urethane-coatings/7.webp",
    fallbackColor: "#922B21",
  },
  {
    icon: Cog,
    title: "Polyurethane Wheels",
    desc: "Load-bearing PU wheels for material handling systems",
    image: "https://www.vampoly.com/images/vampoly/pu-wheels/pu-wheels.webp",
    fallbackColor: "#B03A2E",
  },
  {
    icon: Scissors,
    title: "Polyurethane Scrapers",
    desc: "Efficient conveyor belt scrapers for continuous operation",
    image:
      "https://www.vampoly.com/images/vampoly/polyurethane-scrapers/single-polyurethane-scraper.webp",
    fallbackColor: "#96281B",
  },
  {
    icon: Droplets,
    title: "PU Seals & HydroCyclones",
    desc: "Wear-resistant seals and classification equipment",
    image:
      "https://www.vampoly.com/images/vampoly/polyurethane/PU-Hydrocyclones.webp",
    fallbackColor: "#CB4335",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const Icon = product.icon;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true);
  };

  return (
    <div
      className="product-card reveal group relative overflow-hidden rounded-xl border border-border shadow-card cursor-pointer aspect-[4/3] bg-card"
      data-ocid={`products.item.${index + 1}`}
    >
      {/* Default state: icon + title + desc */}
      <div className="absolute inset-0 flex flex-col p-6 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
          <Icon size={22} className="text-pu-red" />
        </div>
        <h3 className="font-semibold text-pu-red mb-2 text-base leading-snug font-body">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed font-body">
          {product.desc}
        </p>
      </div>

      {/* Hover state: product image with name overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-105 group-hover:scale-100 bg-white">
        {!imgError ? (
          <>
            <img
              src={product.image}
              alt={product.title}
              className={`w-full h-full object-contain transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImgLoaded(true)}
              onError={handleError}
              loading="lazy"
            />
            {!imgLoaded && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: product.fallbackColor }}
              >
                <Icon size={40} className="text-white opacity-40" />
              </div>
            )}
          </>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: product.fallbackColor }}
          >
            <div className="text-center text-white px-4">
              <Icon size={40} className="opacity-60 mx-auto mb-3" />
              <span className="text-base font-semibold font-body leading-snug">
                {product.title}
              </span>
            </div>
          </div>
        )}
        {/* Overlay gradient + name */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
          <h3 className="text-white font-semibold text-base font-body leading-snug">
            {product.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export function ProductsGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cards = section.querySelectorAll(".product-card");
            let i = 0;
            for (const card of cards) {
              setTimeout(() => card.classList.add("visible"), i * 80);
              i++;
            }
            observer.unobserve(section);
          }
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-12 sm:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-pu-accent font-medium text-sm tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-pu-accent" />
            Our Range
            <div className="w-8 h-px bg-pu-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pu-red mb-4">
            Polyurethane Products
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-body">
            Our wide range of products for every Industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

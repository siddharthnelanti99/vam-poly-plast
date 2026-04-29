import {
  Building2,
  Car,
  Factory,
  Flame,
  LayoutGrid,
  Mountain,
  Package,
  ScrollText,
  Shirt,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Exact image URLs from www.vampoly.com homepage HTML (images/icon/ paths)
const industries = [
  {
    icon: Mountain,
    label: "Mining",
    image: "https://www.vampoly.com/images/icon/mining1.webp",
    fallbackColor: "#7A1010",
  },
  {
    icon: Zap,
    label: "Power",
    image: "https://www.vampoly.com/images/icon/power2.webp",
    fallbackColor: "#A31515",
  },
  {
    icon: Building2,
    label: "Steel",
    image: "https://www.vampoly.com/images/icon/steel2.webp",
    fallbackColor: "#8B1A1A",
  },
  {
    icon: Flame,
    label: "Oil & Gas",
    image: "https://www.vampoly.com/images/icon/oilgas1.webp",
    fallbackColor: "#C0392B",
  },
  {
    icon: Factory,
    label: "Cement",
    image: "https://www.vampoly.com/images/icon/cement.webp",
    fallbackColor: "#922B21",
  },
  {
    icon: Car,
    label: "Automobiles",
    image: "https://www.vampoly.com/images/icon/automobile1.webp",
    fallbackColor: "#B03A2E",
  },
  {
    icon: Package,
    label: "Material Handling",
    image: "https://www.vampoly.com/images/icon/Material-Handling.webp",
    fallbackColor: "#96281B",
  },
  {
    icon: ScrollText,
    label: "Paper",
    image: "https://www.vampoly.com/images/icon/paper1.webp",
    fallbackColor: "#CB4335",
  },
  {
    icon: Shirt,
    label: "Textiles",
    image: "https://www.vampoly.com/images/icon/Textiles1.webp",
    fallbackColor: "#A93226",
  },
  {
    icon: LayoutGrid,
    label: "Other Industries",
    image: "https://www.vampoly.com/images/icon/Other-Industries.webp",
    fallbackColor: "#7B241C",
  },
];

function IndustryTile({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) {
  const Icon = industry.icon;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="app-tile reveal group relative aspect-square rounded-xl border border-border shadow-xs overflow-hidden cursor-pointer bg-card"
      data-ocid={`applications.item.${index + 1}`}
    >
      {/* Default state: icon + label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 group-hover:opacity-0 transition-opacity duration-300 z-10">
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
          <Icon size={26} className="text-pu-red" />
        </div>
        <span className="text-pu-red font-medium text-sm text-center font-body leading-tight">
          {industry.label}
        </span>
      </div>

      {/* Hover state: image + overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110 group-hover:scale-100 bg-white">
        {!imgError ? (
          <>
            <img
              src={industry.image}
              alt={industry.label}
              className={`w-full h-full object-contain transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              loading="lazy"
            />
            {!imgLoaded && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: industry.fallbackColor }}
              >
                <Icon size={36} className="text-white opacity-40" />
              </div>
            )}
          </>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: industry.fallbackColor }}
          >
            <div className="text-center text-white px-2">
              <Icon size={32} className="opacity-60 mx-auto mb-2" />
              <span className="text-xs font-semibold font-body">
                {industry.label}
              </span>
            </div>
          </div>
        )}
        {/* Bottom overlay with label */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 pt-8">
          <span className="text-white font-semibold text-xs text-center font-body leading-tight block">
            {industry.label}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ApplicationsGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const tiles = section.querySelectorAll(".app-tile");
            let i = 0;
            for (const tile of tiles) {
              setTimeout(() => tile.classList.add("visible"), i * 60);
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
    <section ref={sectionRef} className="py-12 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-pu-accent font-medium text-sm tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-pu-accent" />
            Industries Served
            <div className="w-8 h-px bg-pu-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pu-red">
            Polyurethane Applications
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {industries.map((industry, index) => (
            <IndustryTile
              key={industry.label}
              industry={industry}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

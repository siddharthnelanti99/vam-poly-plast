import { FlaskConical, Pencil, Settings2, Timer } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: Pencil,
    title: "Design Assistance",
    desc: "Our engineering team works with you from concept to final design, optimizing every polyurethane component for your specific application requirements.",
  },
  {
    icon: Settings2,
    title: "Complete Mould Making Capabilities",
    desc: "Full in-house mould fabrication capabilities enabling rapid prototyping and production of custom geometries without external delays.",
  },
  {
    icon: FlaskConical,
    title: "Compounds for Demanding Applications",
    desc: "Specialty polyurethane compounds formulated to withstand extreme abrasion, temperature, chemical, and load conditions.",
  },
  {
    icon: Timer,
    title: "Fast Turnaround Service",
    desc: "Streamlined production workflows backed by adequate stock ensures we meet even the most urgent timelines without compromising quality.",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cards = section.querySelectorAll(".svc-card");
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
    <section ref={sectionRef} className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-pu-accent font-medium text-sm tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-pu-accent" />
            What We Offer
            <div className="w-8 h-px bg-pu-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pu-red">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="svc-card reveal group p-5 sm:p-6 rounded-xl border-2 border-border hover:border-pu-red hover:shadow-card-hover transition-all duration-300"
                data-ocid={`services.item.${index + 1}`}
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-muted/30 group-hover:bg-pu-red flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300">
                  <Icon
                    size={24}
                    className="text-pu-red group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-semibold text-pu-red mb-2 sm:mb-3 font-body text-base">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

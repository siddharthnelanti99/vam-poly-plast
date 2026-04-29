import { Check } from "lucide-react";
import { useInViewReveal } from "../hooks/useScrollReveal";

const advantages = [
  "Outstanding Abrasion Resistance",
  "Lightweight & Easy to Install",
  "High Tensile Strength",
  "Resistance to Oil, Chemicals & Lubricants",
  "High Load Bearing Capacity",
  "Ultra Tough Tear Strength",
  "Wide Resilience / High Elasticity",
  "Excellent Hydrolytic Stability",
  "Wide Hardness Range",
  "High Flex Capabilities",
  "Strong Bonding to Metals & Plastics",
  "Sound Absorbing Properties",
];

export function AdvantagesSection() {
  const ref = useInViewReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal py-12 sm:py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-pu-accent font-medium text-sm tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-pu-accent" />
            Why Polyurethane
            <div className="w-8 h-px bg-pu-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pu-red mb-4">
            Polyurethane Advantages
          </h2>
          <p className="text-muted-foreground text-base font-body">
            Key characteristics of Polyurethane that make it the material of
            choice for demanding industrial applications.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {advantages.map((adv, i) => (
            <div
              key={adv}
              className="flex items-center gap-3 bg-card rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 shadow-xs border border-border hover:border-pu-accent/30 hover:shadow-card transition-all duration-200"
              data-ocid={`advantages.item.${i + 1}`}
            >
              <div className="w-6 h-6 rounded-full bg-pu-accent/10 flex items-center justify-center shrink-0">
                <Check size={13} className="text-pu-accent" />
              </div>
              <span className="text-foreground text-sm font-medium font-body">
                {adv}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

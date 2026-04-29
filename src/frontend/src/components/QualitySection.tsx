import { Award, CheckCircle, ShieldCheck } from "lucide-react";
import { useInViewReveal } from "../hooks/useScrollReveal";

export function QualitySection() {
  const ref = useInViewReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-muted/20 py-12 sm:py-20 reveal">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 text-pu-accent font-medium text-sm tracking-widest uppercase mb-4">
          <div className="w-8 h-px bg-pu-accent" />
          ISO 9001:2015 Certified
          <div className="w-8 h-px bg-pu-accent" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pu-red mb-5 sm:mb-6">
          Obsessed with Quality
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-body mb-8 sm:mb-12">
          At Vam Poly Plast, quality is not an afterthought — it's the
          foundation of everything we manufacture. Our ISO 9001:2015
          certification reflects our commitment to delivering products that
          exceed international standards, consistently, every single time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: "ISO Certified",
              desc: "ISO 9001:2015 compliant manufacturing processes",
            },
            {
              icon: Award,
              title: "Award-Winning Quality",
              desc: "Recognized for excellence in industrial PU products",
            },
            {
              icon: CheckCircle,
              title: "Zero Compromise",
              desc: "Rigorous quality control at every production stage",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-xl p-5 sm:p-6 shadow-card border border-border text-left"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <Icon size={22} className="text-pu-red" />
              </div>
              <h3 className="font-semibold text-pu-red mb-2 font-body">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

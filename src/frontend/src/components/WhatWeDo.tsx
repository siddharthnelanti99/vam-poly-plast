import { FlaskConical, Lightbulb, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: Lightbulb,
    title: "Product Design",
    desc: "We design products as per customer needs, leveraging our deep engineering expertise to engineer the optimal polyurethane solution for every application.",
  },
  {
    icon: Zap,
    title: "Polyurethane Manufacturing",
    desc: "Our advanced dispensing machines enable us to deliver consistent, high-quality products at scale — meeting exact hardness, thickness, and dimensional tolerances.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "We are an ISO 9001:2015 compliant company. Every batch undergoes rigorous testing against international quality standards before dispatch.",
  },
  {
    icon: FlaskConical,
    title: "In-house R&D",
    desc: "Continual improvement of product range through our dedicated R&D team ensures we stay at the forefront of polyurethane technology.",
  },
];

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cards = section.querySelectorAll(".wwd-card");
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
            Capabilities
            <div className="w-8 h-px bg-pu-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pu-red">
            What We Do
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="wwd-card reveal text-center p-6 sm:p-8 rounded-xl bg-muted/20 border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                data-ocid={`wwd.item.${index + 1}`}
              >
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-pu-red mx-auto flex items-center justify-center mb-5 sm:mb-6">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-semibold text-pu-red text-base mb-3 font-body">
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

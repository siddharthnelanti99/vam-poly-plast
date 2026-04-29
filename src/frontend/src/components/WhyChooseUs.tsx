import { Clock, Cpu, Factory, Globe2, ThumbsUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: Globe2,
    title: "International Quality Standards",
    desc: "ISO certified processes meeting global benchmarks",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    desc: "Team of specialist PU engineers with decades of expertise",
  },
  {
    icon: Factory,
    title: "Large Production Capacity",
    desc: "Equipped to handle bulk and custom orders efficiently",
  },
  {
    icon: ThumbsUp,
    title: "100% Client Satisfaction",
    desc: "Our track record speaks louder than any promise",
  },
  {
    icon: Cpu,
    title: "Production by Dispensing Machines",
    desc: "Advanced automated machines ensure consistent quality",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Reliable timelines backed by efficient logistics",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cards = section.querySelectorAll(".why-card");
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
    <section ref={sectionRef} className="py-12 sm:py-20 bg-pu-red">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-white font-medium text-sm tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-white/60" />
            Our Strengths
            <div className="w-8 h-px bg-white/60" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white">
            Why Choose Us?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="why-card reveal group border border-white/20 rounded-xl p-5 sm:p-6 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                data-ocid={`why.item.${index + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 group-hover:bg-white/30 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-semibold text-white text-base mb-2 font-body">
                  {reason.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed font-body">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

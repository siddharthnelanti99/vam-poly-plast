import { CheckCircle2 } from "lucide-react";
import { useInViewReveal } from "../hooks/useScrollReveal";

const highlights = [
  "Founded in 1988 with a vision for excellence",
  "ISO 9001:2015 certified manufacturing",
  "Custom-engineered polyurethane solutions",
  "Expert team of PU engineering specialists",
  "State-of-the-art dispensing machines",
  "Pan-India and global export capability",
];

export function IntroSection() {
  const ref = useInViewReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 sm:py-20 bg-background reveal"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-pu-accent font-medium text-sm tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-pu-accent" />
              About Us
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pu-red mb-5 sm:mb-6 leading-tight">
              Leading Polyurethane Manufacturer Since 1988
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed font-body mb-5 sm:mb-6">
              Established in 1988, Vam Poly Plast Pvt Ltd is one of India's
              foremost manufacturers of superior quality Cast Polyurethane
              Elastomers. Based in Hyderabad, we combine decades of engineering
              expertise with cutting-edge dispensing technology to deliver
              products that stand up to the most demanding industrial
              environments.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed font-body mb-6 sm:mb-8">
              Our specialization lies in customised polyurethane solutions — we
              work closely with each client to understand their application
              requirements and engineer products that deliver maximum
              performance, durability, and value.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-foreground text-sm font-body"
                >
                  <CheckCircle2
                    size={17}
                    className="text-pu-accent mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mt-4 lg:mt-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-pu-red to-pu-red-mid flex items-center justify-center shadow-2xl">
                <div className="text-center text-white px-6 sm:px-8">
                  <div className="font-display text-6xl sm:text-8xl text-white mb-2">
                    35+
                  </div>
                  <div className="text-xl sm:text-2xl font-display mb-4">
                    Years of Excellence
                  </div>
                  <div className="w-16 h-px bg-white/40 mx-auto mb-4" />
                  <div className="text-white/90 text-xs sm:text-sm font-body leading-relaxed">
                    ISO 9001:2015 Certified
                    <br />
                    Polyurethane Manufacturer
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 rounded-xl bg-pu-accent opacity-20" />
              <div className="absolute -top-4 -left-4 w-14 sm:w-16 h-14 sm:h-16 rounded-full border-4 border-pu-red-mid opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

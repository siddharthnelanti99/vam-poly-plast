import { useInViewReveal } from "../hooks/useScrollReveal";

export function ApplicationsSection() {
  const ref = useInViewReveal<HTMLElement>();

  return (
    <section
      id="polyurethane"
      ref={ref}
      className="reveal py-12 sm:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-pu-accent font-medium text-sm tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-pu-accent" />
            Applications
            <div className="w-8 h-px bg-pu-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pu-red mb-6">
            Applications of PU Products
          </h2>
        </div>

        <div className="bg-muted/20 rounded-2xl p-5 sm:p-8 md:p-12">
          <p className="text-muted-foreground text-base leading-relaxed font-body mb-6">
            Polyurethane Elastomers are widely used across major industries
            worldwide. Vam Poly Plast provides tailored solutions for each
            unique application:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-pu-red shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-pu-red mb-1 font-body">
                    Mining Industries
                  </h4>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    PU Flip-flow screen mats, Trommel screens, and PU Solid
                    screens for processing raw materials efficiently even with
                    wet and sticky feeds.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-pu-red shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-pu-red mb-1 font-body">
                    P-Sand / M-Sand Manufacturing
                  </h4>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    PU Dewatering screen panels and PU Bucket panels optimised
                    for manufactured sand production facilities requiring high
                    throughput.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-pu-accent shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-pu-red mb-1 font-body">
                    Oil & Gas Industries
                  </h4>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    Pipeline Cleaning PIGs, Mandrel PIGs, and their accessories
                    for safe and effective pipeline maintenance in demanding
                    environments.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-pu-accent shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-pu-red mb-1 font-body">
                    Conveyor Systems
                  </h4>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    PU-coated Rollers and Wheels for heavy-payload conveyors,
                    plus precision Scraper Blades for continuous belt cleaning
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

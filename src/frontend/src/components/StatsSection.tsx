import { useCounter } from "../hooks/useCounter";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    target: 35,
    suffix: "+",
    label: "Years Experience",
    description: "Leading the industry since 1988",
  },
];

function StatCounter({ stat }: { stat: StatItem }) {
  const { count, ref } = useCounter(stat.target, 1600);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center px-6 py-8"
    >
      <div className="font-display text-6xl lg:text-7xl text-white mb-2">
        {count}
        <span>{stat.suffix}</span>
      </div>
      <div className="text-white font-semibold text-xl font-body mb-1">
        {stat.label}
      </div>
      <div className="text-white/80 text-sm font-body">{stat.description}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-pu-red py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-block">
            <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              PU{" "}
            </span>
            <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              MEANS
            </span>
            <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              {" "}
              VAM
            </span>
          </div>
          <p className="text-white/80 mt-3 sm:mt-4 text-base sm:text-lg font-body">
            Numbers that define our legacy of excellence
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-px bg-white/10 rounded-xl overflow-hidden max-w-sm w-full">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-pu-red-mid hover:bg-pu-red-light/50 transition-colors"
              >
                <StatCounter stat={stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

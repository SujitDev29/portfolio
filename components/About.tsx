import { summary, achievements } from "@/lib/data";
import { getRevealDelay } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          <div data-reveal data-reveal-delay="1">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              {summary}
            </p>
          </div>

          <div className="space-y-6">
            <div
              data-reveal
              data-reveal-delay="2"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-widest mb-4 font-display">
                Achievement
              </h3>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="mt-0.5 text-orange-500 dark:text-orange-400 flex-shrink-0" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4+", label: "Years Experience" },
                { value: "6+", label: "Projects Delivered" },
                { value: "3", label: "Companies" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  data-reveal
                  data-reveal-delay={getRevealDelay(i + 2)}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center"
                >
                  <AnimatedCounter value={stat.value} className="text-2xl font-bold text-orange-500 dark:text-orange-400 font-display" />
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ label }: { label: string }) {
  return (
    <div data-reveal>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight font-display">
        {label}
      </h2>
      <div className="mt-3 h-[3px] w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
    </div>
  );
}

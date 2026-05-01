import { summary } from "@/lib/data";
import { getRevealDelay } from "@/lib/utils";

const stats = [
  { value: "4+", label: "Years shipping" },
  { value: "6", label: "Apps in production" },
  { value: "−30%", label: "Floor task time" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
          <div data-reveal data-reveal-delay="1">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              {summary}
            </p>
          </div>

          <div className="space-y-6">
            <figure
              data-reveal
              data-reveal-delay="2"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="text-orange-500 dark:text-orange-400"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                Recognition
              </div>
              <blockquote className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                Awarded{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  &ldquo;Best Employee of the Year&rdquo;
                </span>{" "}
                at Stepron Technologies in 2023 for the audio-response system
                that cut floor task time by 30%.
              </blockquote>
              <figcaption className="mt-3 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display">
                Stepron Technologies · 2023
              </figcaption>
            </figure>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  data-reveal
                  data-reveal-delay={getRevealDelay(i + 2)}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center"
                >
                  <span className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                    {stat.value}
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                    {stat.label}
                  </p>
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

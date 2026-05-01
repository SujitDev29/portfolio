import { skills } from "@/lib/data";
import { summarizeUsage } from "@/lib/skill-usage";
import { getRevealDelay } from "@/lib/utils";
import { SectionHeading } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Skills" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const usageLine = group.items
              .map((it) => ({ skill: it.name, list: summarizeUsage(it.name, 2) }))
              .filter((u) => u.list.length > 0)
              .slice(0, 2)
              .map((u) => `${u.skill}: ${u.list}`)
              .join(" · ");
            return (
            <div
              key={group.category}
              data-reveal
              data-reveal-delay={getRevealDelay(i % 3)}
              className="skill-card bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-orange-200 dark:hover:border-orange-900 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5"
            >
              <h3 className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-4 font-display">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const filled =
                    item.level === "expert"
                      ? 3
                      : item.level === "proficient"
                        ? 2
                        : 1;
                  return (
                    <span
                      key={item.name}
                      title={`${item.level}${item.years ? ` · ${item.years}y` : ""}`}
                      className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      <span
                        aria-hidden="true"
                        className="flex items-center gap-0.5"
                      >
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < filled
                                ? "bg-orange-500 dark:bg-orange-400"
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                          />
                        ))}
                      </span>
                      <span>{item.name}</span>
                      {item.years ? (
                        <span className="text-[10px] text-gray-500 dark:text-gray-500">
                          {item.years}y
                        </span>
                      ) : null}
                      <span className="sr-only">— {item.level}</span>
                    </span>
                  );
                })}
              </div>
              {usageLine ? (
                <p className="mt-4 text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed truncate font-display">
                  <span className="uppercase tracking-widest text-gray-500 dark:text-gray-500">Used in — </span>
                  {usageLine}
                </p>
              ) : null}
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

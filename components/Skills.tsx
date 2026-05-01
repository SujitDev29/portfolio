import { skills } from "@/lib/data";
import { summarizeUsage } from "@/lib/skill-usage";
import { getRevealDelay } from "@/lib/utils";
import { SectionHeading } from "./About";

const levelLabel: Record<"expert" | "proficient" | "learning", string> = {
  expert: "Expert",
  proficient: "Proficient",
  learning: "Learning",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Skills" />

        <p
          className="mt-4 text-xs text-gray-500 dark:text-gray-500 font-display tracking-wide"
          data-reveal
          data-reveal-delay="1"
        >
          Years of hands-on use shown next to each skill. Levels:{" "}
          <span className="text-gray-700 dark:text-gray-300 font-semibold">
            Expert
          </span>{" "}
          (3y+ shipping in production) ·{" "}
          <span className="text-gray-700 dark:text-gray-300 font-semibold">
            Proficient
          </span>{" "}
          (used on real work) ·{" "}
          <span className="text-gray-700 dark:text-gray-300 font-semibold">
            Learning
          </span>
          .
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const usageItems = group.items
              .map((it) => ({ skill: it.name, list: summarizeUsage(it.name, 2) }))
              .filter((u) => u.list.length > 0)
              .slice(0, 2);
            return (
              <div
                key={group.category}
                data-reveal
                data-reveal-delay={getRevealDelay(i % 3)}
                className="skill-card bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5"
              >
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4 font-display">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      title={`${levelLabel[item.level]}${item.years ? ` · ${item.years} years` : ""}`}
                      className={`inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full border ${
                        item.level === "expert"
                          ? "bg-white dark:bg-gray-800 border-orange-200 dark:border-orange-900/60 text-gray-800 dark:text-gray-200"
                          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.years ? (
                        <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                          {item.years}y
                        </span>
                      ) : null}
                      <span className="sr-only">— {levelLabel[item.level]}</span>
                    </li>
                  ))}
                </ul>
                {usageItems.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-xs leading-relaxed font-display">
                    {usageItems.map((u) => (
                      <li
                        key={u.skill}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        <span className="uppercase tracking-widest text-gray-500 dark:text-gray-500">
                          {u.skill} —{" "}
                        </span>
                        {u.list}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

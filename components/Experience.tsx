import { experience } from "@/lib/data";
import { getRevealDelay } from "@/lib/utils";
import { SectionHeading } from "./About";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-50 dark:bg-gray-900 py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Experience" />

        <div className="mt-12 relative">
          {/* vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500 via-orange-200 to-transparent dark:via-orange-800 ml-[7px] hidden sm:block opacity-60" />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div
                key={idx}
                data-reveal
                data-reveal-delay={getRevealDelay(idx)}
                className="sm:pl-10 relative"
              >
                {/* timeline dot */}
                <div
                  aria-hidden="true"
                  className="timeline-pulse hidden sm:flex absolute left-0 top-2 w-4 h-4 rounded-full bg-orange-500 dark:bg-orange-400 border-2 border-white dark:border-gray-900 -translate-x-[1px] items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-orange-200 dark:hover:border-orange-800 transition-colors duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-display">
                        {job.title}
                      </h3>
                      <p className="text-sm text-orange-500 dark:text-orange-400 font-medium">
                        {job.company} &middot; {job.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {job.scope}
                  </p>

                  <div className="mt-4 space-y-3">
                    {job.projects.map((project) => (
                      <div
                        key={project.name}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="mt-1 text-orange-500 dark:text-orange-400 flex-shrink-0"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {project.name}:
                          </span>{" "}
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-900/60 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {job.keyAchievements && job.keyAchievements.length > 0 && (
                    <div
                      className={`mt-5 grid grid-cols-2 gap-3 ${
                        job.keyAchievements.length >= 3 ? "sm:grid-cols-3" : ""
                      }`}
                    >
                      {job.keyAchievements.map((a) => (
                        <div
                          key={a.metric}
                          className="bg-orange-50/40 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/40 rounded-lg px-3 py-2"
                        >
                          <div className="text-base font-bold text-orange-600 dark:text-orange-400 font-display leading-tight">
                            {a.value}
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-600 dark:text-gray-400 mt-0.5">
                            {a.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

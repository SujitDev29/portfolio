import Link from "next/link";
import { projects, experience, type Project } from "@/lib/data";
import { formatDuration } from "@/lib/duration";
import { getRevealDelay } from "@/lib/utils";
import { SectionHeading } from "./About";

const stripLegalSuffix = (name: string) =>
  name.replace(/\s+(?:Pvt\.?\s*Ltd\.?|Private Limited)\s*\.?$/i, "").trim();

type CompanyGroup = {
  name: string;
  role: string;
  location: string;
  period: string;
  duration: string;
  projects: Project[];
};

function buildGroups(): CompanyGroup[] {
  return experience
    .map((job) => {
      const name = stripLegalSuffix(job.company);
      return {
        name,
        role: job.title,
        location: job.location,
        period: job.period,
        duration: formatDuration(job.period),
        projects: projects.filter((p) => p.company === name),
      };
    })
    .filter((g) => g.projects.length > 0);
}

export default function Projects() {
  const groups = buildGroups();

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Projects" />

        <div className="mt-12 space-y-14">
          {groups.map((group, gi) => (
            <div key={group.name}>
              <header
                data-reveal
                data-reveal-delay={getRevealDelay(gi % 6)}
                className="flex flex-wrap items-end justify-between gap-3 pb-4 border-b border-gray-200 dark:border-gray-800"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight font-display">
                    {group.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {group.role}
                    <span className="mx-2 text-gray-400 dark:text-gray-600">
                      ·
                    </span>
                    {group.period}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/60 text-orange-700 dark:text-orange-300 text-xs font-semibold tracking-wide font-display">
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400"
                  />
                  {group.duration}
                  <span className="sr-only">at {group.name}</span>
                </span>
              </header>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.projects.map((project, i) => {
                  const cs = project.caseStudy;
                  const headlineMetrics = cs?.metrics?.slice(0, 2) ?? [];
                  const accessLabel =
                    project.access === "public"
                      ? "Public"
                      : project.access === "internal"
                        ? "Internal"
                        : "Closed source";
                  return (
                  <article
                    key={project.name}
                    data-reveal
                    data-reveal-delay={getRevealDelay(i % 3)}
                    className="group relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col hover:border-orange-300 dark:hover:border-orange-800 hover:shadow-[0_4px_20px_rgba(249,115,22,0.08)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5"
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`${project.name} case study`}
                      className="absolute inset-0 z-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 dark:focus-visible:ring-orange-500"
                    />
                    <div className="relative z-10 flex items-start justify-between gap-2 mb-3 pointer-events-none">
                      <div className="min-w-0">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors font-display">
                          {project.name}
                        </h4>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display whitespace-nowrap">
                          {project.type}
                        </span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-500 font-display whitespace-nowrap">
                          {accessLabel}
                        </span>
                      </div>
                    </div>

                    <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 pointer-events-none">
                      {project.description}
                    </p>

                    {headlineMetrics.length > 0 && (
                      <div className="relative z-10 mt-4 grid grid-cols-2 gap-2 pointer-events-none">
                        {headlineMetrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-lg bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 px-2.5 py-1.5"
                          >
                            <div className="text-sm font-semibold text-orange-500 dark:text-orange-400 font-display leading-tight">
                              {m.value}
                            </div>
                            <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="relative z-10 mt-4 flex items-center justify-between gap-2 pointer-events-none">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {(project.github || project.demo) && (
                        <div className="flex items-center gap-1 shrink-0 pointer-events-auto">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.name} source on GitHub`}
                              className="p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.name} live demo`}
                              className="p-1.5 text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors rounded"
                            >
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
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors font-display pointer-events-none"
                    >
                      Read case study
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

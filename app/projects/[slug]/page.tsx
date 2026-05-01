import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { getRevealDelay } from "@/lib/utils";
import { siteUrl } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.name} — Case Study`;
  const description = project.caseStudy?.summary ?? project.description;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `${siteUrl}/projects/${project.slug}`,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <article className="pt-28 sm:pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to projects
          </Link>

          <header className="mt-8" data-reveal>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest font-display">
              <span className="text-orange-500 dark:text-orange-400">
                {project.company}
              </span>
              <span className="text-gray-400 dark:text-gray-600">·</span>
              <span className="text-gray-600 dark:text-gray-400">
                {project.type}
              </span>
              {project.accessNote && (
                <>
                  <span className="text-gray-400 dark:text-gray-600">·</span>
                  <span className="text-gray-500 dark:text-gray-500 normal-case tracking-normal font-medium">
                    {project.accessNote}
                  </span>
                </>
              )}
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white font-display leading-[1.05]">
              {project.name}
            </h1>

            {cs?.role || cs?.period || cs?.teamSize ? (
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                {cs?.role}
                {cs?.role && cs?.period ? " · " : ""}
                {cs?.period}
                {/* {cs?.teamSize ? (
                  <>
                    <span className="text-gray-400 dark:text-gray-600"> · </span>
                    Team of {cs.teamSize}
                  </>
                ) : null} */}
              </p>
            ) : null}

            {cs?.yourScope ? (
              <p className="mt-3 max-w-3xl text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                <span className="text-orange-500 dark:text-orange-400 font-semibold font-display">
                  My scope ·{" "}
                </span>
                {cs.yourScope}
              </p>
            ) : null}

            {(project.github || project.demo) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors font-display"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-orange-400 hover:text-orange-500 text-sm font-semibold rounded-lg transition-colors font-display"
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
                    Source
                  </a>
                )}
              </div>
            )}
          </header>

          {!cs ? (
            <section className="mt-16 prose-section" data-reveal>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          ) : (
            <>
              <section className="mt-16" data-reveal>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  {cs.summary}
                </p>
              </section>

              {cs.metrics && cs.metrics.length > 0 && (
                <section className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {cs.metrics.map((m, i) => (
                    <div
                      key={m.label}
                      data-reveal
                      data-reveal-delay={getRevealDelay(i)}
                      className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-orange-500 dark:text-orange-400 font-display">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 font-display">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </section>
              )}

              {cs.beforeAfter && cs.beforeAfter.length > 0 && (
                <CaseSection title="Before / After">
                  <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-900">
                        <tr className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display">
                          <th className="py-3 px-4 font-semibold">Metric</th>
                          <th className="py-3 px-4 font-semibold">Before</th>
                          <th className="py-3 px-4 font-semibold">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cs.beforeAfter.map((row, i) => (
                          <tr
                            key={row.metric}
                            data-reveal
                            data-reveal-delay={getRevealDelay(i % 6)}
                            className="border-t border-gray-200 dark:border-gray-800"
                          >
                            <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">
                              {row.metric}
                            </td>
                            <td className="py-3 px-4 text-gray-500 dark:text-gray-500 line-through decoration-gray-300 dark:decoration-gray-700">
                              {row.before}
                            </td>
                            <td className="py-3 px-4 text-orange-600 dark:text-orange-400 font-semibold">
                              {row.after}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CaseSection>
              )}

              <CaseSection title="The problem">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {cs.problem}
                </p>
              </CaseSection>

              <CaseSection title="My role">
                <ul className="space-y-3">
                  {cs.responsibilities.map((r, i) => (
                    <li
                      key={i}
                      data-reveal
                      data-reveal-delay={getRevealDelay(i % 6)}
                      className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 flex-shrink-0"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection title="What was built">
                <div className="grid sm:grid-cols-2 gap-4">
                  {cs.features.map((f, i) => (
                    <div
                      key={f.title}
                      data-reveal
                      data-reveal-delay={getRevealDelay(i % 6)}
                      className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
                    >
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white font-display">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CaseSection>

              {cs.timeline && cs.timeline.length > 0 && (
                <CaseSection title="Timeline">
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500 via-orange-200 to-transparent dark:via-orange-800 ml-[7px] hidden sm:block opacity-60"
                    />
                    <div className="space-y-6">
                      {cs.timeline.map((phase, i) => (
                        <div
                          key={`${phase.phase}-${i}`}
                          data-reveal
                          data-reveal-delay={getRevealDelay(i % 6)}
                          className="sm:pl-10 relative"
                        >
                          <div
                            aria-hidden="true"
                            className="hidden sm:flex absolute left-0 top-2 w-4 h-4 rounded-full bg-orange-500 dark:bg-orange-400 border-2 border-white dark:border-gray-950 -translate-x-[1px] items-center justify-center"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <h3 className="text-base font-semibold text-gray-900 dark:text-white font-display">
                                {phase.phase}
                              </h3>
                              <span className="text-xs text-orange-500 dark:text-orange-400 font-medium font-display">
                                {phase.period}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                              {phase.summary}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CaseSection>
              )}

              <CaseSection title="Tech stack">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1.5 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/60 text-orange-700 dark:text-orange-300 rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CaseSection>

              {cs.architectureDiagram && (
                <CaseSection title="Architecture">
                  <figure
                    data-reveal
                    className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cs.architectureDiagram.src}
                      alt={cs.architectureDiagram.alt}
                      width={cs.architectureDiagram.width}
                      height={cs.architectureDiagram.height}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                    {cs.architectureDiagram.caption && (
                      <figcaption className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400 italic border-t border-gray-200 dark:border-gray-800">
                        {cs.architectureDiagram.caption}
                      </figcaption>
                    )}
                  </figure>
                </CaseSection>
              )}

              {cs.technicalChallenge && (
                <CaseSection title="Technical challenge">
                  <div className="space-y-5">
                    <div data-reveal>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display">
                        Problem
                      </h3>
                      <p className="mt-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {cs.technicalChallenge.problem}
                      </p>
                    </div>
                    <div data-reveal data-reveal-delay={getRevealDelay(1)}>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display">
                        Solution
                      </h3>
                      <p className="mt-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {cs.technicalChallenge.solution}
                      </p>
                    </div>
                    {cs.technicalChallenge.codeSnippet && (
                      <div
                        data-reveal
                        data-reveal-delay={getRevealDelay(2)}
                        className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-950 dark:bg-black overflow-hidden"
                      >
                        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 text-xs uppercase tracking-widest font-display text-gray-400">
                          <span>
                            {cs.technicalChallenge.codeSnippet.language}
                          </span>
                        </div>
                        <pre className="overflow-x-auto px-4 py-4 text-xs sm:text-sm leading-relaxed text-gray-100">
                          <code className="font-mono">
                            {cs.technicalChallenge.codeSnippet.code}
                          </code>
                        </pre>
                      </div>
                    )}
                  </div>
                </CaseSection>
              )}

              <CaseSection title="Outcome">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {cs.outcome}
                </p>
              </CaseSection>

              {cs.relatedContent && cs.relatedContent.length > 0 && (
                <CaseSection title="Related content">
                  <ul className="flex flex-wrap gap-2">
                    {cs.relatedContent.map((r, i) => (
                      <li
                        key={r.url + r.title}
                        data-reveal
                        data-reveal-delay={getRevealDelay(i % 6)}
                      >
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 hover:text-orange-500 dark:hover:text-orange-400 text-sm text-gray-700 dark:text-gray-300 transition-colors"
                        >
                          <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display">
                            {r.type}
                          </span>
                          <span>{r.title}</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CaseSection>
              )}

              {cs.takeaways.length > 0 && (
                <CaseSection title="What I'd take with me">
                  <ul className="space-y-3">
                    {cs.takeaways.map((t, i) => (
                      <li
                        key={i}
                        data-reveal
                        data-reveal-delay={getRevealDelay(i % 6)}
                        className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400 flex-shrink-0"
                        />
                        {t}
                      </li>
                    ))}
                  </ul>
                </CaseSection>
              )}
            </>
          )}

          <nav
            aria-label="Other case studies"
            className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 grid sm:grid-cols-2 gap-4"
          >
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex flex-col gap-1 p-5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
              >
                <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display">
                  Previous
                </span>
                <span className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors font-display">
                  ← {prev.name}
                </span>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-1 p-5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-orange-300 dark:hover:border-orange-700 transition-colors text-right"
              >
                <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display">
                  Next
                </span>
                <span className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors font-display">
                  {next.name} →
                </span>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
          </nav>
        </div>
      </article>
    </main>
  );
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <div data-reveal>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
          {title}
        </h2>
        <div className="mt-3 h-[3px] w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

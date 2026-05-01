import { education } from "@/lib/data";
import { getRevealDelay } from "@/lib/utils";
import { SectionHeading } from "./About";

export default function Education() {
  return (
    <section id="education" className="bg-gray-50 dark:bg-gray-900 py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Education" />

        <div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-3xl">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              data-reveal
              data-reveal-delay={getRevealDelay(i)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-orange-200 dark:hover:border-orange-800 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center mb-4" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 dark:text-orange-400">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug font-display">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {edu.institution}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.year}
                </span>
                <span className="text-sm font-semibold text-orange-500 dark:text-orange-400">
                  CGPA: {edu.cgpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 pt-16 transition-colors duration-300">
      <div className="hero-content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <p
            className="hero-item text-orange-500 dark:text-orange-400 text-xs font-semibold tracking-[0.22em] uppercase mb-4 font-display"
            style={{ animationDelay: "0.05s" }}
          >
            Hello, I&apos;m
          </p>
          <h1
            className="hero-item text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-[1.04] tracking-tight font-display"
            style={{ animationDelay: "0.2s" }}
          >
            {personalInfo.name}
          </h1>
          <h2
            className="hero-item text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-6"
            style={{ animationDelay: "0.35s" }}
          >
            {personalInfo.title}
          </h2>
          <p
            className="hero-item text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-6"
            style={{ animationDelay: "0.5s" }}
          >
            Building cross-platform mobile and web experiences with 4+ years of
            hands-on experience in React Native, Redux, Firebase, and REST APIs.
          </p>

          <div
            className="hero-item flex flex-wrap gap-2 mb-10"
            style={{ animationDelay: "0.62s" }}
          >
            {personalInfo.specializations.map((spec) => (
              <span
                key={spec}
                className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-900/60 font-display"
              >
                {spec}
              </span>
            ))}
          </div>

          <div
            className="hero-item flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4"
            style={{ animationDelay: "0.78s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_28px_rgba(249,115,22,0.38)] dark:hover:shadow-[0_0_36px_rgba(249,115,22,0.55)] font-display"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-orange-400 dark:hover:border-orange-500 hover:text-orange-500 dark:hover:text-orange-400 text-sm font-semibold rounded-lg transition-all duration-200 font-display"
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm font-semibold rounded-lg transition-colors duration-200 font-display"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>

          <div
            className="hero-item flex items-center gap-2 mt-10 text-sm text-gray-600 dark:text-gray-400"
            style={{ animationDelay: "0.92s" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="sr-only">Location: </span>
            {personalInfo.location}
          </div>
        </div>
      </div>
    </section>
  );
}

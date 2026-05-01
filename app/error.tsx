"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-orange-500 dark:text-orange-400 font-display">
          Something broke
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight font-display">
          An unexpected error occurred
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          The page hit a snag while loading. You can try again or head back home.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors font-display"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-orange-400 hover:text-orange-500 text-sm font-semibold rounded-lg transition-colors font-display"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}

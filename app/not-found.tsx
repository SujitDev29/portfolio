import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-orange-500 dark:text-orange-400 font-display">
          404
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight font-display">
          This page is missing
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          The link may be broken or the page might have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors font-display"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

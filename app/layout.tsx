import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import { personalInfo } from "@/lib/data";
import { siteUrl, withBasePath } from "@/lib/site";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const title = `${personalInfo.title} — ${personalInfo.name}`;
const description =
  "React Native developer with 4+ years shipping cross-platform mobile and web apps — focused on offline-first sync, real-time UX, and the unglamorous middle layer that holds a product together across iOS, Android, and web.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${personalInfo.name}`,
  },
  description,
  applicationName: `${personalInfo.name} Portfolio`,
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  keywords: [
    "Sujit Gaikwad",
    "React Native Developer",
    "Mobile Developer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Firebase",
    "React.js",
    "Pune",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: `${personalInfo.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: withBasePath("/icon"), type: "image/png", sizes: "32x32" },
    ],
    apple: [
      {
        url: withBasePath("/apple-icon"),
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  colorScheme: "light dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  url: siteUrl,
  email: `mailto:${personalInfo.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [personalInfo.linkedin, personalInfo.github],
  knowsAbout: [
    "React Native",
    "React.js",
    "Next.js",
    "TypeScript",
    "Firebase",
    "Redux Toolkit",
    "Mobile Development",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var t=s==='light'?'light':'dark';if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <ScrollObserver />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}

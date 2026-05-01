"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projects, personalInfo } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

type CommandItem = {
  id: string;
  label: string;
  hint?: string;
  group: "Navigate" | "Case studies" | "Actions";
  keywords?: string;
  perform: () => void;
};

const COMMAND_PALETTE_EVENT = "open-command-palette";

export function openCommandPalette() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(COMMAND_PALETTE_EVENT));
}

const sectionLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function CommandPalette() {
  const router = useRouter();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  const items: CommandItem[] = useMemo(() => {
    const navigate: CommandItem[] = sectionLinks.map((s) => ({
      id: `nav-${s.id}`,
      label: `Go to ${s.label}`,
      hint: `#${s.id}`,
      group: "Navigate",
      keywords: s.label.toLowerCase(),
      perform: () => {
        if (typeof window === "undefined") return;
        if (window.location.pathname === "/") {
          const el = document.getElementById(s.id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          router.push(`/#${s.id}`);
        }
      },
    }));

    const cases: CommandItem[] = projects.map((p) => ({
      id: `proj-${p.slug}`,
      label: p.name,
      hint: `${p.company} · ${p.type}`,
      group: "Case studies",
      keywords: `${p.name} ${p.company} ${p.tech.join(" ")}`.toLowerCase(),
      perform: () => router.push(`/projects/${p.slug}`),
    }));

    const actions: CommandItem[] = [
      {
        id: "action-resume",
        label: "Download resume (PDF)",
        hint: "/resume.pdf",
        group: "Actions",
        keywords: "resume cv pdf download",
        perform: () => {
          const a = document.createElement("a");
          a.href = "/resume.pdf";
          a.download = "Sujit_Gaikwad_Resume.pdf";
          a.click();
        },
      },
      {
        id: "action-theme",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        hint: "Theme",
        group: "Actions",
        keywords: "theme dark light mode toggle",
        perform: () => toggle(),
      },
      {
        id: "action-email",
        label: "Email Sujit",
        hint: personalInfo.email,
        group: "Actions",
        keywords: `email mail contact ${personalInfo.email}`,
        perform: () => {
          window.location.href = `mailto:${personalInfo.email}`;
        },
      },
      {
        id: "action-linkedin",
        label: "Open LinkedIn",
        hint: "linkedin.com/in/sujit-gaikwad",
        group: "Actions",
        keywords: "linkedin social profile",
        perform: () => window.open(personalInfo.linkedin, "_blank", "noopener,noreferrer"),
      },
      {
        id: "action-github",
        label: "Open GitHub",
        hint: "github.com/SujitDev29",
        group: "Actions",
        keywords: "github source code repos",
        perform: () => window.open(personalInfo.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "action-home",
        label: "Go to home",
        hint: "/",
        group: "Actions",
        keywords: "home top hero",
        perform: () => router.push("/"),
      },
    ];

    return [...navigate, ...cases, ...actions];
  }, [router, theme, toggle]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (it) =>
        it.label.toLowerCase().includes(q) ||
        (it.keywords && it.keywords.includes(q)) ||
        it.group.toLowerCase().includes(q)
    );
  }, [items, query]);

  const grouped = useMemo(() => {
    const map = new Map<CommandItem["group"], CommandItem[]>();
    for (const it of filtered) {
      if (!map.has(it.group)) map.set(it.group, []);
      map.get(it.group)!.push(it);
    }
    return Array.from(map.entries());
  }, [filtered]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const isMod = isMac ? e.metaKey : e.ctrlKey;
      if (isMod && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onCustom = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(COMMAND_PALETTE_EVENT, onCustom);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(COMMAND_PALETTE_EVENT, onCustom);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(
      `[data-cmd-index="${activeIndex}"]`
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  if (!open) return null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[activeIndex];
      if (item) {
        item.perform();
        close();
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] sm:pt-[18vh] px-4"
    >
      <button
        aria-label="Close command palette"
        onClick={close}
        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
      />

      <div
        onKeyDown={onKeyDown}
        className="relative w-full max-w-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-3 px-4 border-b border-gray-200 dark:border-gray-800">
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
            className="text-gray-400 flex-shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            placeholder="Search sections, projects, actions..."
            className="flex-1 py-4 bg-transparent text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
            aria-label="Search command palette"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded text-gray-500 dark:text-gray-400 font-display">
            ESC
          </kbd>
        </div>

        <div
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto py-2"
          role="listbox"
        >
          {filtered.length === 0 ? (
            <p className="px-4 py-8 text-sm text-center text-gray-500 dark:text-gray-400">
              No matches for &ldquo;{query}&rdquo;
            </p>
          ) : (
            grouped.map(([group, list]) => (
              <div key={group} className="mb-2 last:mb-0">
                <div className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500 font-display">
                  {group}
                </div>
                {list.map((item) => {
                  const itemIndex = filtered.indexOf(item);
                  const isActive = itemIndex === activeIndex;
                  return (
                    <button
                      key={item.id}
                      data-cmd-index={itemIndex}
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setActiveIndex(itemIndex)}
                      onClick={() => {
                        item.perform();
                        close();
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                        isActive
                          ? "bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300"
                          : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      }`}
                    >
                      <span className="font-medium truncate">{item.label}</span>
                      {item.hint && (
                        <span
                          className={`text-xs truncate ml-3 ${
                            isActive
                              ? "text-orange-500 dark:text-orange-400"
                              : "text-gray-500 dark:text-gray-500"
                          }`}
                        >
                          {item.hint}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="flex items-center justify-between gap-3 px-4 py-2 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-500 font-display">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">↓</kbd>
              navigate
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">↵</kbd>
              select
            </span>
          </div>
          <span>{filtered.length} result{filtered.length === 1 ? "" : "s"}</span>
        </div>
      </div>
    </div>
  );
}

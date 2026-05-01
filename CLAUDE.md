# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Next.js 16.2.4 + React 19 single-page portfolio for Sujit Gaikwad. Uses App Router, TypeScript, and Tailwind CSS v4.

> **Note:** This project runs Next.js 16 which has breaking changes from older versions. Check `node_modules/next/dist/docs/` for current API docs before making assumptions from training data.

## Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint
```

No test suite is configured.

## Architecture

Single-page app — all sections render from `app/page.tsx` in order: Hero → About → Skills → Experience → Projects → Education → Contact → Footer. There are no sub-routes.

Key files:

- `app/layout.tsx` — root layout; mounts `ThemeProvider` and injects a FOUC-prevention script in `<head>` that reads `localStorage` before hydration
- `app/globals.css` — minimal; only `@import "tailwindcss"` and the Tailwind v4 dark variant declaration
- `lib/data.ts` — single source of truth for all portfolio content; update here, never in components
- `components/About.tsx` — exports `SectionHeading` used by every other section component

## Key conventions

- Path alias `@/` maps to the project root (configured in `tsconfig.json`).
- Tailwind CSS v4: dark mode uses `@variant dark (&:where(.dark, .dark *))` in `globals.css`, **not** a `darkMode: 'class'` config entry. The `.dark` class is toggled on `<html>` by `ThemeProvider`.
- `ThemeProvider` (`components/ThemeProvider.tsx`) manages dark/light state via `localStorage` + `document.documentElement.classList`. Exposes `useTheme()` hook — import from `"./ThemeProvider"` or `"@/components/ThemeProvider"`.
- Server Components by default; add `"use client"` only where interactivity or browser APIs are needed. Currently only `Navbar` and `ThemeProvider` are client components.
- All portfolio data (projects, skills, experience, social links) lives in `lib/data.ts` — content updates don't require touching component files.
- No API routes exist yet. The contact section is static (links only, no form submission).
- Use `next/image` for all images.
- No `.js` source files — TypeScript throughout.

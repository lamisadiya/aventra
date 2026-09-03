# Aventra — Fine Dining Website

A Next.js (App Router) + TypeScript + Tailwind CSS v4 reimplementation of a
fine-dining restaurant website.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (CSS-based theme config in `src/app/globals.css`)
- Self-hosted variable fonts (Cormorant Garamond + Inter) via `next/font/local`
  — no external font requests at build or runtime

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
  app/
    layout.tsx          Root layout, font loading, metadata
    page.tsx             Home page — assembles all sections
    globals.css           Design tokens (colors, type) + base styles
    fonts/                Self-hosted .ttf font files
    impressum/            Legal notice page
    datenschutz/          Privacy policy page
  components/
    Header.tsx            Sticky nav with logo, language switch, reserve CTA
    Hero.tsx               Full-viewport hero + awards strip
    ChefSection.tsx         Chef intro + asymmetric editorial photo grid
    MenuSection.tsx         Tasting menu callout
    TablesSection.tsx       "Five tables" intimacy section
    PhilosophySections.tsx  Room concept + sustainability/circularity text
    DiningSection.tsx       Chef's table dining section + photo grid
    ReserveSection.tsx      Address, opening hours, reserve CTA
    Footer.tsx              Footer with contact + legal links
    PlaceholderImage.tsx    Stand-in for real photography (gradient + label)
    Reveal.tsx              Scroll-triggered fade-in (IntersectionObserver)
  lib/
    content.ts             All site copy as typed data 
```

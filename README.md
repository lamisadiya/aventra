# Stube Lindenhof — Fine Dining Website

A Next.js (App Router) + TypeScript + Tailwind CSS v4 reimplementation of a
fine-dining restaurant website, inspired by the structure and visual language
of restaurantzimmerl.at. All copy, the restaurant name, and photography are
original/placeholder content created for this build — no text or images were
copied from the source site.

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
    content.ts             All site copy as typed data (easy to swap in real content)
```

## Swapping in real content

1. Replace the values in `src/lib/content.ts` with your restaurant's actual
   copy, address, and hours.
2. Replace `PlaceholderImage` usages with real `next/image` components once
   you have photography — the surrounding grid layouts (aspect ratios, spans)
   are already tuned and can stay as-is.
3. Update `reserveUrl` in `content.ts` to point to your real booking system.
4. Update metadata in `layout.tsx` and the legal pages.

## Notes

- Color palette, typography, and copy are original creative work — not
  copied from any existing restaurant's site.
- Reduced-motion preferences are respected (animations are disabled via
  `prefers-reduced-motion`).
- All interactive elements have visible focus states for keyboard navigation.

"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { tablesSection, roomConcept } from "@/lib/content";
import StackedGallery from "./StackedGallery";

export default function TablesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-ink px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-start gap-3">
            <span className="font-display text-7xl font-light leading-none text-brass sm:text-8xl md:text-9xl">
              {tablesSection.number}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-6 flex gap-4 md:gap-6">
            <div
              className="hidden w-px shrink-0 self-stretch bg-[repeating-linear-gradient(to_bottom,var(--color-brass-dim)_0,var(--color-brass-dim)_4px,transparent_4px,transparent_14px)] sm:block"
              aria-hidden="true"
            />

            <div className="hidden shrink-0 flex-col items-center justify-center gap-3 sm:flex">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-brass scale-125"
                      : "bg-ivory-dim/30"
                  }`}
                />
              ))}
            </div>

            <StackedGallery
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-10 max-w-md">
          <p className="eyebrow mb-3">{roomConcept.eyebrow}</p>

          <h2 className="font-display text-2xl font-light leading-snug text-ivory md:text-3xl">
            {roomConcept.headline}
          </h2>

          <div className="mt-6 space-y-4">
            {roomConcept.body.split("\n\n").map((p) => (
              <p
                key={p}
                className="font-sans text-sm leading-relaxed text-ivory-dim"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
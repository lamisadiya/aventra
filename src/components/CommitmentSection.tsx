"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { commitmentSection } from "@/lib/content";
import StackedGallery from "./StackedGallery";

export default function CommitmentSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-ink px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-3">{commitmentSection.eyebrow}</p>
          <h2 className="font-display text-5xl font-light leading-none text-brass sm:text-6xl md:text-7xl">
            {commitmentSection.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex gap-4 md:gap-6">
            <div
              className="hidden w-px shrink-0 self-stretch bg-[repeating-linear-gradient(to_bottom,var(--color-brass-dim)_0,var(--color-brass-dim)_4px,transparent_4px,transparent_14px)] sm:block"
              aria-hidden="true"
            />

            <div className="hidden shrink-0 flex-col items-center justify-center gap-3 sm:flex">
              {[0, 1, 2, 3].map((i) => (
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

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {commitmentSection.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 120}>
              <div className="rule mb-5" />
              <h3 className="font-display text-2xl font-light text-ivory md:text-3xl">
                {pillar.title}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-ivory-dim">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

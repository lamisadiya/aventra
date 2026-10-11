"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { menuCategories, type MenuCategory } from "@/lib/content";

function CategorySection({
  category,
  index,
}: {
  category: MenuCategory;
  index: number;
}) {
  const [activeId, setActiveId] = useState(category.items[0].id);

  const active =
    category.items.find((item) => item.id === activeId) ??
    category.items[0];

  return (
    <section
      id={category.id}
      className="scroll-mt-40 border-t border-white/5 px-6 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Category Heading */}
        <Reveal className="flex items-end gap-5">
          <span className="font-display text-7xl font-light leading-none text-brass sm:text-8xl md:text-9xl">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="pb-2 md:pb-4">
            <h2 className="font-display text-3xl font-light text-ivory md:text-5xl">
              {category.label}
            </h2>

            <p className="mt-2 font-sans text-sm text-ivory-dim">
              {category.tagline}
            </p>
          </div>
        </Reveal>

        {category.note && (
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.18em] text-brass-dim">
            {category.note}
          </p>
        )}

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Preview */}
          <div className="lg:order-2">
            <div className="lg:sticky lg:top-36">
              <div className="relative h-[260px] w-full overflow-hidden rounded-sm bg-panel shadow-2xl sm:h-[320px] lg:h-[min(60vh,420px)]">
                {category.items.map((item) => {
                  const isActive = item.id === active.id;

                  return (
                    <Image
                      key={item.id}
                      src={item.image}
                      alt={item.name}
                      aria-hidden={!isActive}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className={`object-contain transition-opacity duration-700 ease-out ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  );
                })}

                {/* Bottom Gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Image Title */}
                <p className="pointer-events-none absolute bottom-4 left-5 right-5 font-display text-xl font-light text-ivory md:text-2xl">
                  {active.name}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Item List */}
          <ul className="lg:order-1">
            {category.items.map((item, i) => {
              const isActive = item.id === active.id;

              return (
                <li
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  className="border-b border-white/10 first:border-t"
                >
                  <button
                    type="button"
                    onFocus={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={isActive}
                    className="block w-full py-5 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={`font-sans text-xs tracking-[0.2em] transition-colors duration-500 ${
                          isActive
                            ? "text-brass"
                            : "text-brass-dim/60"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`block font-display text-2xl font-light transition-all duration-500 md:text-3xl ${
                          isActive
                            ? "translate-x-2 text-ivory"
                            : "text-ivory-dim/70"
                        }`}
                      >
                        {item.name}
                      </span>

                      <span className="hidden min-w-6 flex-1 self-end border-b border-dotted border-white/20 pb-1.5 sm:block" />

                      <span className="ml-auto whitespace-nowrap font-sans text-sm tracking-wide text-brass sm:ml-0">
                        Tk {item.price}
                      </span>
                    </span>

                    <span
                      className={`mt-2 block pl-9 font-sans text-sm leading-relaxed transition-colors duration-500 ${
                        isActive
                          ? "text-ivory-dim"
                          : "text-ivory-dim/50"
                      }`}
                    >
                      {item.description}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function MenuExplorer() {
  const [current, setCurrent] = useState(menuCategories[0].id);

  useEffect(() => {
    const sections = menuCategories
      .map((category) => document.getElementById(category.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrent(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sticky Category Navigation */}
      <nav
        aria-label="Menu categories"
        className="sticky top-20 z-40 border-y border-white/5 bg-ink/90 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-6xl gap-8 overflow-x-auto px-6 py-4 md:justify-center md:px-10">
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              aria-current={
                current === category.id ? "true" : undefined
              }
              className={`whitespace-nowrap border-b pb-1 font-sans text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
                current === category.id
                  ? "border-brass text-brass"
                  : "border-transparent text-ivory-dim hover:text-ivory"
              }`}
            >
              {category.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu Categories */}
      {menuCategories.map((category, index) => (
        <CategorySection
          key={category.id}
          category={category}
          index={index}
        />
      ))}
    </>
  );
}
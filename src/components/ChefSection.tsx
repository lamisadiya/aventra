"use client";

import Image from "next/image";
import TypeIt from "typeit-react";
import Reveal from "./Reveal";
import { chefBio, introSection } from "@/lib/content";

export default function ChefSection() {
  return (
    <section className="bg-panel px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <TypeIt
          options={{
            strings: [introSection.body],
            speed: 55,
            lifeLike: true,
            cursor: true,
            waitUntilVisible: true,
          }}
          className="font-display text-xl font-light italic leading-relaxed text-ivory-dim sm:text-2xl"
        />
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-16 max-w-4xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[200px_1fr] sm:gap-10">
          <Image
            src="/images/chef.jpg"
            alt="Schwarz-weiß Porträt des Küchenchefs"
            width={1000}
            height={900}
              className="aspect-4/5 w-full max-w-50 animate-float sm:max-w-none"
          />

          <div>
            <p className="font-sans text-sm font-semibold uppercase leading-relaxed tracking-[0.03em] text-brass">
              {chefBio.heading}
            </p>

            {chefBio.body.split("\n\n").map((p) => (
              <p
                key={p}
                className="mt-4 font-sans text-sm leading-relaxed text-ivory-dim last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
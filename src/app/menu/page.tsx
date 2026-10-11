import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuExplorer from "@/components/MenuExplorer";
import Reveal from "@/components/Reveal";
import { commitmentSection, hero, restaurant } from "@/lib/content";

export const metadata: Metadata = {
  title: `${restaurant.name}`,
  description: `${restaurant.tagline} Appetizers, main courses, desserts and fresh beverages.`,
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="bg-ink pt-36">
        <section className="px-6 pb-16 text-center md:px-10">
          <p className="eyebrow">Our Menu</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-light leading-tight text-ivory md:text-6xl">
            {restaurant.tagline}
          </h1>
          <div className="mx-auto my-8 rule" />
          <p className="mx-auto max-w-xl font-sans text-sm leading-relaxed text-ivory-dim">
            {commitmentSection.pillars[0].body}
          </p>
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.18em] text-brass-dim">
            Hover over (or tap) a dish to see it
          </p>
        </section>

        <MenuExplorer />

        <section className="border-t border-white/5 px-6 py-24 text-center md:px-10">
          <Reveal className="mx-auto max-w-xl">
            <p className="font-display text-3xl font-light italic text-ivory-dim md:text-4xl">
              {hero.subline}
            </p>
            <a
              href={restaurant.reserveUrl}
              className="btn-reserve mt-10 inline-flex px-6! py-3! text-[0.7rem]"
            >
              reservation
              <span aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

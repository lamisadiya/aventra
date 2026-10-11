import Image from "next/image";
import { galleryAlt, philosophy } from "@/lib/content";
import Reveal from "./Reveal";

export default function PhilosophySections() {
  return (
    <section className="bg-ink px-6 py-20 md:px-10 md:py-28">
      <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
        <Image
          src="/images/3.jpeg"
          alt={galleryAlt.philosophy}
          width={1000}
          height={667}
          className="aspect-4/3 w-full object-cover"
        />
        <div>
          <p className="eyebrow mb-3">{philosophy.eyebrow}</p>
          <h2 className="font-display text-2xl font-light leading-snug text-ivory md:text-3xl">
            {philosophy.headline}
          </h2>
          <div className="mt-6 space-y-4">
            {philosophy.body.split("\n\n").map((p) => (
              <p key={p} className="font-sans text-sm leading-relaxed text-ivory-dim">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-20 max-w-2xl text-center">
        <div className="mx-auto mb-8 rule" />
        <p className="font-display text-xl font-light text-ivory-dim">
          {philosophy.closing[0]}
        </p>
        <p className="mt-4 font-display text-2xl font-light italic leading-relaxed text-ivory md:text-3xl">
          {philosophy.closing[1]}
        </p>
        <p className="mt-6 font-sans text-sm leading-relaxed text-ivory-dim">
          {philosophy.closing[2]}
        </p>
      </Reveal>
    </section>
  );
}

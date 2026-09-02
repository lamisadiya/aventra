import PlaceholderImage from "./PlaceholderImage";
import { circleSection, galleryAlt } from "@/lib/content";
import Reveal from "./Reveal";

export default function PhilosophySections() {
  return (
    <>
      {/* Circularity — image left, text right */}
      <section className="bg-ink px-6 pb-20 md:px-10 md:pb-28">
        <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <PlaceholderImage
            alt={galleryAlt.circle[0]}
            tone="warm"
            className="aspect-4/3 w-full"
          />
          <div>
            <p className="eyebrow mb-3">{circleSection.eyebrow.toUpperCase()}</p>
            <h2 className="font-display text-2xl font-light leading-snug text-ivory md:text-3xl">
              {circleSection.headline}
            </h2>
            <div className="mt-6 space-y-4">
              {circleSection.body.split("\n\n").map((p) => (
                <p key={p} className="font-sans text-sm leading-relaxed text-ivory-dim">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

import Image from "next/image";
import { awards } from "@/lib/content";
import Reveal from "./Reveal";

export default function AwardsStrip() {
  return (
    <section className="bg-panel px-6 py-16 md:px-10 md:py-20">
      <Reveal className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {awards.map((award) => (
          <Image
            key={award.id}
            src={award.image}
            alt={award.name}
            width={140}
            height={100}
            className="h-35 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
          />
        ))}
      </Reveal>
    </section>
  );
}
"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { diningSection } from "@/lib/content";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  { src: "/images/m1.jpg", width: 180 },
  { src: "/images/m2.jpg", width: 470 },
  { src: "/images/m3.jpg", width: 340 },
  { src: "/images/m4.jpg", width: 220 },
  { src: "/images/m1.jpg", width: 400 },
  { src: "/images/m2.jpg", width: 190 },
  { src: "/images/m3.jpg", width: 350 },
  { src: "/images/m4.jpg", width: 240 },
];

export default function DiningSection() {
  return (
    <section className="bg-panel py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="mx-auto mb-16 max-w-xl text-center px-6">
            <h2 className="font-display text-4xl text-ivory">
              {diningSection.eyebrow}
            </h2>

            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ivory/70">
              {diningSection.headline}
            </p>

            <p className="mt-5 text-sm leading-7 text-ivory-dim">
              {diningSection.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative">

            <button className="gallery-prev absolute left-8 top-1/2 z-30 -translate-y-1/2 w-14 h-14 rounded-full bg-[#C78C57] text-white flex items-center justify-center shadow-xl hover:scale-110 duration-300">
              <ChevronLeft />
            </button>

            <button className="gallery-next absolute right-8 top-1/2 z-30 -translate-y-1/2 w-14 h-14 rounded-full bg-[#C78C57] text-white flex items-center justify-center shadow-xl hover:scale-110 duration-300">
              <ChevronRight />
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".gallery-prev",
                nextEl: ".gallery-next",
              }}
              loop={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={10}
              speed={850}
              grabCursor={true}
              watchSlidesProgress={true}
              className="zimmerl-slider"
            >
              {images.map((img, i) => (
                <SwiperSlide
                  key={i}
                  className="w-auto!"
                >
                  {({ isActive }) => (
                    <div
                      className="duration-700 ease-out"
                      style={{
                        width: `${img.width}px`,
                        height: "420px",
                        transform: isActive
                          ? "scale(1.08)"
                          : "scale(.88)",
                        opacity: isActive ? 1 : .65,
                      }}
                    >
                      <div className="relative w-full h-full overflow-hidden">

                        <Image
                          src={img.src}
                          alt=""
                          fill
                          className="object-cover grayscale transition-all duration-700 hover:scale-105"
                        />

                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </Reveal>

      </div>

      <style jsx global>{`
        .zimmerl-slider {
          overflow: visible;
        }

        .zimmerl-slider .swiper-wrapper {
          align-items: center;
        }

        .zimmerl-slider .swiper-slide {
          transition: all .8s ease;
        }

        .zimmerl-slider .swiper-slide-prev,
        .zimmerl-slider .swiper-slide-next {
          opacity: .85;
        }
      `}</style>
    </section>
  );
}
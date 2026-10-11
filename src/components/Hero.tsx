"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Reveal from "./Reveal";
import { restaurant } from "@/lib/content";

const heroImages = [
  "/images/14.jpeg",
  "/images/11.jpeg",
  "/images/9.jpeg",
  "/images/7.jpeg",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="w-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Hero ${index + 1}`}
              width={1600}
              height={900}
              priority={index === 0}
              className="aspect-16/10 w-full object-cover md:aspect-16/7"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
     <Reveal className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6">
  <div className="text-center">
    <h1
      className="font-display text-5xl font-medium tracking-[0.08em] text-white
      drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
      sm:text-6xl md:text-7xl lg:text-8xl"
    >
      {restaurant.name}
    </h1>

    <p
      className="mt-5 font-display text-lg font-medium italic text-white
      drop-shadow-[0_3px_8px_rgba(0,0,0,1)]
      md:text-2xl"
    >
      {restaurant.tagline}
    </p>
  </div>
</Reveal>

      {/* Previous Arrow */}
      <button
        className="hero-prev absolute left-6 md:left-12 top-1/2 z-20 -translate-y-1/2 text-[#C99A63] transition duration-300 hover:scale-110 hover:text-[#E7B67B]"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 12H5m0 0l6-6m-6 6l6 6"
          />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        className="hero-next absolute right-6 md:right-12 top-1/2 z-20 -translate-y-1/2 text-[#C99A63] transition duration-300 hover:scale-110 hover:text-[#E7B67B]"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14m0 0l-6-6m6 6l-6 6"
          />
        </svg>
      </button>
    </section>
  );
}
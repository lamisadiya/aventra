"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Reveal from "./Reveal";
import { restaurant } from "@/lib/content";

const heroImages = [
  "/images/hero.webp",
  "/images/hero.jpg",
  "/images/hero.webp",
  "/images/hero.jpg",
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
        <h1 className="text-center font-display text-5xl font-light tracking-[0.12em] text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
          {restaurant.name}
        </h1>
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
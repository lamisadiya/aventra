"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { menuSection, galleryAlt } from "@/lib/content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export default function MenuSection() {
  const images = galleryAlt.menu;

  return (
    <section className="relative overflow-hidden bg-ink px-6 pt-20 pb-16 md:px-10 md:pt-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal className="flex items-start gap-3">
          <span className="font-display text-7xl font-light leading-none text-brass sm:text-8xl md:text-9xl">
            {menuSection.number}
          </span>
        </Reveal>

        {/* Slider */}
        <div className="relative mt-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={false}
            loop
            speed={900}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".menu-prev",
              nextEl: ".menu-next",
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center gap-6">
                  {/* Large Image */}
                  <div className="w-[72%] overflow-hidden rounded-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={800}
                      className="aspect-3/2 w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Small Preview */}
                  <div className="-mt-14 w-[28%] overflow-hidden rounded-xl">
                    <Image
                      src={
                        images[(index + 1) % images.length].src
                      }
                      alt={
                        images[(index + 1) % images.length].alt
                      }
                      width={700}
                      height={1000}
                      className="aspect-2/3 w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <button className="menu-prev absolute left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black">
            <ChevronLeft size={30} />
          </button>

          <button className="menu-next absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black">
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Text */}
        <Reveal delay={180} className="mt-12 max-w-md">
          <p className="font-sans text-sm leading-relaxed text-ivory-dim">
            {menuSection.body}
          </p>

          <a
            href="#"
            className="btn-reserve mt-8 inline-flex px-6! py-3! text-[0.7rem]"
          >
            {menuSection.ctaLabel}
            <span>&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { corporateDining, restaurant } from "@/lib/content";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  { src: "/images/1.jpeg" },
  { src: "/images/2.jpeg" },
  { src: "/images/3.jpeg" },
  { src: "/images/4.jpeg" },
  { src: "/images/1.jpeg" },
  { src: "/images/2.jpeg" },
  { src: "/images/3.jpeg" },
  { src: "/images/4.jpeg" },
];

export default function DiningSection() {
  return (
    <section
      id="corporate-dining"
      className="bg-panel py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Dining Content */}
        <Reveal>
          <div className="mx-auto mb-16 max-w-xl px-6 text-center">
            <h2 className="font-display text-4xl text-ivory">
              {corporateDining.eyebrow}
            </h2>

            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ivory/70">
              {corporateDining.headline}
            </p>

            <p className="mt-5 text-sm leading-7 text-ivory-dim">
              {corporateDining.body}
            </p>

            <p className="eyebrow mt-10">
              {corporateDining.privilegesLabel}
            </p>

            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-sans text-sm text-ivory-dim">
              {corporateDining.privileges.map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="text-brass" aria-hidden="true">
                      &bull;
                    </span>
                  )}

                  {item}
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${restaurant.email}?subject=Corporate%20Dining%20Enquiry`}
              className="btn-reserve mt-9 inline-flex px-6! py-3! text-[0.7rem]"
            >
              {corporateDining.ctaLabel}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </Reveal>

        {/* Image Carousel */}
        <Reveal delay={200}>
          <div className="relative">
            {/* Previous Button */}
            <button
              type="button"
              aria-label="Previous image"
              className="gallery-prev absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#C78C57] text-white shadow-xl transition-transform duration-300 hover:scale-110 md:left-8 md:h-14 md:w-14"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              aria-label="Next image"
              className="gallery-next absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#C78C57] text-white shadow-xl transition-transform duration-300 hover:scale-110 md:right-8 md:h-14 md:w-14"
            >
              <ChevronRight size={26} />
            </button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".gallery-prev",
                nextEl: ".gallery-next",
              }}
              loop={true}
              centeredSlides={true}
              slidesPerView="auto"
              spaceBetween={10}
              speed={850}
              grabCursor={true}
              watchSlidesProgress={true}
              className="zimmerl-slider"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i} className="w-auto!">
                  {({ isActive }) => (
                    <div
                      className={`gallery-image ${
                        isActive
                          ? "gallery-image-active"
                          : "gallery-image-inactive"
                      }`}
                    >
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={`Corporate dining image ${i + 1}`}
                          fill
                          sizes="(max-width: 480px) 220px, (max-width: 768px) 250px, 320px"
                          className="gallery-image-photo object-cover"
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

      {/* Carousel Styles */}
      <style jsx global>{`
        .zimmerl-slider {
          overflow: visible;
        }

        .zimmerl-slider .swiper-wrapper {
          align-items: center;
        }

        .zimmerl-slider .swiper-slide {
          transition: opacity 0.8s ease;
        }

        .gallery-image {
          width: 320px;
          height: 420px;
          overflow: hidden;
          transform-origin: center;
          transition:
            transform 0.7s ease,
            opacity 0.7s ease;
        }

        .gallery-image-active {
          transform: scale(1.08);
          opacity: 1;
        }

        .gallery-image-inactive {
          transform: scale(0.88);
          opacity: 0.65;
        }

        .gallery-image-photo {
          filter: grayscale(100%);
          transition:
            filter 0.7s ease,
            transform 0.7s ease;
        }

        .gallery-image-active .gallery-image-photo {
          filter: grayscale(0%);
        }

        .gallery-image-inactive .gallery-image-photo {
          filter: grayscale(100%);
        }

        .gallery-image:hover .gallery-image-photo {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .gallery-image {
            width: 250px;
            height: 340px;
          }
        }

        @media (max-width: 480px) {
          .gallery-image {
            width: 220px;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/hero.webp",
  "/images/hero.jpg",
  "/images/f3.webp",
  "/images/f4.webp",
];

type StackedGalleryProps = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function StackedGallery({
  activeIndex,
  setActiveIndex,
}: StackedGalleryProps) {
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative mx-auto h-105 w-full cursor-pointer"
      onClick={next}
    >
      {images.map((src, i) => {
        const depth = (i - activeIndex + images.length) % images.length;

        return (
          <motion.div
            key={src}
            className="absolute inset-0 mx-auto overflow-hidden rounded-sm shadow-2xl"
            animate={{
              scale: 1 - depth * 0.04,
              y: depth * 12,
              x: depth * 10,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
            style={{
              width: "90%",
              height: "100%",
              zIndex: images.length - depth,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={depth === 0}
              className="object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
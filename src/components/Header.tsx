"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { restaurant } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
<Link
  href="/"
  aria-label={`${restaurant.name} — Startseite`}
  
>
  <Image
    src="/images/Aventra_On_Black.png" 
    alt={restaurant.name}
    width={40}
    height={40}
    className="h-full w-full object-cover"
    priority
  />
</Link>

        <div className="flex items-center gap-5 md:gap-8">
          

          <a href={restaurant.reserveUrl} className="btn-reserve">
            reservation
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { restaurant } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 py-12 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
        <div>
          <span className="font-display text-2xl tracking-[0.08em] text-ivory">
            {restaurant.name}
          </span>
          <p className="mt-2 font-sans text-xs text-ivory-dim/70">
            &copy;{year} {restaurant.partner}
          </p>
        </div>

        <div className="font-sans text-sm text-ivory-dim sm:text-center">
          <a href={`mailto:${restaurant.email}`} className="transition-colors hover:text-brass">
            {restaurant.email}
          </a>
          <address className="mt-2 not-italic leading-relaxed">
            {restaurant.address.street}
            <br />
            {restaurant.address.city}
          </address>
        </div>

        <nav className="flex flex-col gap-2 text-xs uppercase tracking-widest text-ivory-dim/80 sm:items-end">
          <Link href="/impressum" className="transition-colors hover:text-ivory">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-ivory">
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}

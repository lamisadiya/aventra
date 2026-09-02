import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { restaurant } from "@/lib/content";

export const metadata: Metadata = {
  title: `Impressum | ${restaurant.name}`,
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p>
        {restaurant.name}
        <br />
        {restaurant.address.street}
        <br />
        {restaurant.address.city}, {restaurant.address.country}
      </p>
      <p>
        E-Mail:{" "}
        <a href={`mailto:${restaurant.email}`} className="text-brass hover:underline">
          {restaurant.email}
        </a>
      </p>
      <p>
        Diese Seite ist eine nicht-kommerzielle Demonstration für ein
        Webdesign-Projekt. Alle Inhalte sind frei erfunden und dienen
        ausschließlich Illustrationszwecken.
      </p>
    </LegalLayout>
  );
}

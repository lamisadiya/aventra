import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { restaurant } from "@/lib/content";

export const metadata: Metadata = {
  title: `Aventra | ${restaurant.name}`,
   icons: {
    icon: "icon.ico", 
    shortcut: "/icon.png",
    
  },
};

export default function AventraPage() {
  return (
    <LegalLayout title="Aventra">
      <p>
        Diese Beispielseite verarbeitet keine personenbezogenen Daten. Es
        werden weder Cookies gesetzt noch Analyse- oder Tracking-Dienste
        eingebunden.
      </p>
      <p>
        Bei Fragen zu dieser Demo wenden Sie sich an{" "}
        <a href={`mailto:${restaurant.email}`} className="text-brass hover:underline">
          {restaurant.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}

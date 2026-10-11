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
        Beyond taste, freshness matters in every choice. We eat every day, so why not make it a better choice? Food is an essential part of our everyday lives, but every meal is also a decision. From the ingredients we select to the way we prepare each dish and the care we put into serving the people who matter most, every choice contributes to the true value of food.
      </p>
     
        <a href={`mailto:${restaurant.email}`} className="text-brass hover:underline">
          {restaurant.email}
        </a>
        .
      
    </LegalLayout>
  );
}

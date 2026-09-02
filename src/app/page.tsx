import AwardsStrip from "@/components/AwardsStrip";
import ChefSection from "@/components/ChefSection";
import DiningSection from "@/components/DiningSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import PhilosophySections from "@/components/PhilosophySections";
import ReserveSection from "@/components/ReserveSection";
import TablesSection from "@/components/TablesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AwardsStrip />
        <ChefSection />
        <MenuSection />
        <TablesSection />
        <PhilosophySections />
        <DiningSection />
        <ReserveSection />
      </main>
      <Footer />
    </>
  );
}

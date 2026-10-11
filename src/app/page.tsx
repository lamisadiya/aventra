import CommitmentSection from "@/components/CommitmentSection";
import DiningSection from "@/components/DiningSection";
import DreamSection from "@/components/DreamSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import PhilosophySections from "@/components/PhilosophySections";
import ReserveSection from "@/components/ReserveSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DreamSection />
        <MenuSection />
        <CommitmentSection />
        <DiningSection />
        <PhilosophySections />
        <ReserveSection />
      </main>
      <Footer />
    </>
  );
}

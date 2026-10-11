import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ink px-6 pt-36 pb-24 md:px-10">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-3xl font-light text-ivory md:text-4xl">
            {title}
          </h1>
          <div className="mx-auto mt-6 mb-10 h-px w-10 bg-brass-dim" />
          <div className="space-y-4 font-sans text-sm leading-relaxed text-ivory-dim">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@src/components/Navbar";
import Hero from "@src/components/Hero";
import Features from "@src/components/Features";
import Services from "@src/components/Services";
import CTA from "@src/components/CTA";
import FAQ from "@src/components/FAQ";
import AppStore from "@src/components/AppStore";
import Footer from "@src/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section
        className={`flex z-0  flex-col px-5 md:px-16 lg:px-20 lg:mt-16 mt-12 ${poppins.className} space-y-16`}
      >
        <Hero />
        <Features />
        <Services />
        <CTA />
        <FAQ />
        <AppStore />
      </section>
      <Footer />
    </main>
  );
}

"use client";

import AINexusCurtain from "@/components/AINexusCurtain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Explore from "@/components/Explore";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F4F4F7] overflow-x-hidden selection:bg-[#7B61FF]/30 selection:text-white">
      {/* Signature Cinematic Curtain Intro (Plays on each page load, handles ESC / reduced-motion) */}
      <AINexusCurtain />

      {/* Primary Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10 flex flex-col w-full">
        <Hero />
        <About />
        <Explore />
        <Community />
      </main>

      {/* Technical Footer */}
      <Footer />
    </div>
  );
}

"use client";

import AINexusCurtain from "@/components/AINexusCurtain";
import HomeHub from "@/components/HomeHub";
import SiteFrame from "@/components/SiteFrame";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F4F4F7] overflow-x-hidden selection:bg-[#7B61FF]/30 selection:text-white">
      {/* Signature Cinematic Curtain Intro (Plays on each page load, handles ESC / reduced-motion) */}
      <AINexusCurtain />

      <SiteFrame>
        <HomeHub />
      </SiteFrame>
    </div>
  );
}

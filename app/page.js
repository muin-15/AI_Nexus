"use client";

import HomeHub from "@/components/HomeHub";
import SiteFrame from "@/components/SiteFrame";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#F4F4F7] selection:bg-[#7B61FF]/30 selection:text-white">
      <SiteFrame>
        <HomeHub />
      </SiteFrame>
    </div>
  );
}

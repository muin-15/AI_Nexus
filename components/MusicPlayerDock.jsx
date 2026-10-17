"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MusicPlayer } from "@/components/ui/music-player";

const audioSrc = "https://youtu.be/mHtK-gNNpls";

export default function MusicPlayerDock() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className={`fixed right-0 top-1/2 z-50 flex -translate-y-1/2 items-center transition-transform duration-300 md:right-4 md:top-19 md:translate-y-0 ${
        mobileOpen
          ? "translate-x-0"
          : "translate-x-[calc(100%-2.75rem)] md:translate-x-0"
      }`}
    >
      <button
        type="button"
        className="grid size-11 shrink-0 place-items-center rounded-l-xl border border-r-0 border-white/10 bg-[#0a0b11]/95 text-[#c4b5fd] shadow-[-8px_0_24px_rgba(0,0,0,0.25)] backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5fd] md:hidden"
        onClick={() => setMobileOpen((open) => !open)}
        aria-label={mobileOpen ? "Hide music player" : "Show music player"}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
      <aside
        className="flex w-[min(15rem,calc(100vw-2.75rem))] items-center gap-3 rounded-l-2xl border border-r-0 border-white/10 bg-[#0a0b11]/95 p-2.5 shadow-[-16px_0_50px_rgba(0,0,0,0.4)] backdrop-blur-xl md:w-60 md:rounded-2xl md:border-r md:shadow-[0_16px_50px_rgba(0,0,0,0.45)]"
        aria-label="Nexus music player"
      >
        <div className="relative size-18 shrink-0">
          <MusicPlayer
            src={audioSrc}
            coverArt="/music-cover.svg"
            autoPlay={Boolean(audioSrc)}
            className="absolute left-2 top-2 origin-top-left scale-[0.28] md:scale-[0.22]"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
            Nexus Radio
          </p>
          <p className="mt-1 truncate font-mono text-[8px] uppercase tracking-[0.12em] text-[#b7aaff]">
            Trumpet theme
          </p>
          <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-text-secondary">
            {audioSrc ? "Autoplay requested · looping" : "Track coming soon"}
          </p>
        </div>
      </aside>
    </div>
  );
}

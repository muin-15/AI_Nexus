"use client";

import { CLUB_CONFIG } from "./clubConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050608] text-[#8E90A6] overflow-hidden">
      {/* Subtle bottom grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center tracking-tight font-black text-2xl text-[#F4F4F7]">
              <span>AI</span>
              <span className="ml-1.5 font-outline tracking-tight text-transparent">
                NEXUS
              </span>
            </div>

            <p className="font-mono text-xs tracking-[0.2em] text-[#7B61FF] uppercase font-semibold">
              {CLUB_CONFIG.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#8E90A6] max-w-sm leading-relaxed">
              An independent collegiate technology guild advancing student research, hands-on artificial intelligence, and open engineering.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs tracking-wider uppercase">
            <div className="text-[#F4F4F7] font-semibold tracking-widest text-[11px] mb-4">
              NAVIGATION
            </div>
            <div>
              <a href="#about" className="hover:text-[#F4F4F7] transition-colors">
                01 // About the Club
              </a>
            </div>
            <div>
              <a href="#explore" className="hover:text-[#F4F4F7] transition-colors">
                02 // Focus Areas
              </a>
            </div>
            <div>
              <a href="#community" className="hover:text-[#F4F4F7] transition-colors">
                03 // Join Community
              </a>
            </div>
          </div>

          {/* Connect / Configurable Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs tracking-wider uppercase">
            <div className="text-[#F4F4F7] font-semibold tracking-widest text-[11px] mb-4">
              CONNECT & PROTOCOLS
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={CLUB_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7B61FF] transition-colors flex items-center justify-between group"
                >
                  <span>Discord Guild [Invite]</span>
                  <span className="text-[#8E90A6]/40 group-hover:text-[#7B61FF]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={CLUB_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7B61FF] transition-colors flex items-center justify-between group"
                >
                  <span>GitHub Organization</span>
                  <span className="text-[#8E90A6]/40 group-hover:text-[#7B61FF]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLUB_CONFIG.contactEmail}`}
                  className="hover:text-[#7B61FF] transition-colors flex items-center justify-between group"
                >
                  <span>Club Contact Dispatch</span>
                  <span className="text-[#8E90A6]/40 group-hover:text-[#7B61FF]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Row: Copyright, Status, and Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8E90A6]/60">
          <div className="flex items-center gap-2">
            <span>© {currentYear} AI NEXUS.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-2 text-[#8E90A6]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>SYS.STATUS: ALL CIRCUITS NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

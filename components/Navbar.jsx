"use client";

import { useState, useEffect } from "react";
import { CLUB_CONFIG } from "./clubConfig";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090D]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo on Left */}
        <a
          href="#"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7B61FF] rounded px-1.5 py-1"
          aria-label="AI NEXUS Home"
        >
          <div className="flex items-center tracking-tight font-black text-xl sm:text-2xl">
            <span className="text-[#F4F4F7] group-hover:text-white transition-colors">AI</span>
            <span className="ml-1.5 font-outline tracking-tight text-transparent group-hover:drop-shadow-[0_0_12px_rgba(123,97,255,0.6)] transition-all">
              NEXUS
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#8E90A6]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider uppercase">ONLINE</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-[#8E90A6]"
          aria-label="Main Navigation"
        >
          <a
            href="#about"
            className="hover:text-[#F4F4F7] transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7B61FF] rounded"
          >
            01 // About
          </a>
          <a
            href="#explore"
            className="hover:text-[#F4F4F7] transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7B61FF] rounded"
          >
            02 // Explore
          </a>
          <a
            href="#community"
            className="hover:text-[#F4F4F7] transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7B61FF] rounded"
          >
            03 // Community
          </a>
        </nav>

        {/* Primary Desktop Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#community"
            className="relative group inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase text-[#F4F4F7] bg-[#7B61FF]/10 hover:bg-[#7B61FF]/20 border border-[#7B61FF]/40 hover:border-[#7B61FF] rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B61FF]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join the community
              <svg
                className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="md:hidden p-2 text-[#8E90A6] hover:text-[#F4F4F7] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7B61FF] rounded"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-transform duration-300 origin-left ${
                mobileMenuOpen ? "rotate-45 translate-y-[2px]" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-transform duration-300 origin-left ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[2px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/[0.08] bg-[#08090D]/95 backdrop-blur-xl ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4 font-mono text-sm tracking-wider uppercase">
          <a
            href="#about"
            onClick={closeMenu}
            className="block py-2 text-[#8E90A6] hover:text-[#F4F4F7] border-b border-white/[0.05]"
          >
            01 // About
          </a>
          <a
            href="#explore"
            onClick={closeMenu}
            className="block py-2 text-[#8E90A6] hover:text-[#F4F4F7] border-b border-white/[0.05]"
          >
            02 // Explore
          </a>
          <a
            href="#community"
            onClick={closeMenu}
            className="block py-2 text-[#8E90A6] hover:text-[#F4F4F7] border-b border-white/[0.05]"
          >
            03 // Community
          </a>
          <div className="pt-2">
            <a
              href="#community"
              onClick={closeMenu}
              className="w-full text-center flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono tracking-wider uppercase text-[#F4F4F7] bg-[#7B61FF]/15 border border-[#7B61FF]/50 rounded"
            >
              Join the community
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

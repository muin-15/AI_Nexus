"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { DitheredLogo } from "@/components/ui/dithered-logo";
import { WheelCarousel } from "@/components/ui/wheel-carousel";

const sections = [
  {
    href: "/about",
    title: "About",
    caption: "The people behind the curiosity",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1000&q=85",
    alt: "Immersive blue and violet digital light installation",
  },
  {
    href: "/explore",
    title: "Explore",
    caption: "Ideas worth getting lost in",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
    alt: "Intricate computer circuitry",
  },
  {
    href: "/community",
    title: "Community",
    caption: "Build something together",
    image: "/community-card.webp",
    alt: "Discord and other community platform logos",
  },
  {
    title: "Team",
    caption: "Positions are being decided",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85",
    alt: "Team members collaborating around a table",
    disabled: true,
  },
];

const carouselItems = sections.map((section) => ({
  label: section.disabled ? `${section.title} · TBD` : section.title,
  image: section.image,
  imageAlt: section.alt,
}));

export default function HomeHub() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeSection = sections[activeIndex];

  const moveSection = (direction) => {
    setActiveIndex((index) => (index + direction + sections.length) % sections.length);
  };

  return (
    <main
      id="main-content"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 py-6 sm:px-8 sm:py-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-bg-dark" aria-hidden="true" />
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 opacity-90"
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { backgroundPosition: ["0% 0%", "100% 35%", "0% 0%"] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 24, repeat: Infinity, ease: "easeInOut" }
        }
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 18% 18%, rgba(100,76,215,.34), transparent 36%), radial-gradient(ellipse at 82% 24%, rgba(43,96,160,.3), transparent 38%), radial-gradient(ellipse at 50% 95%, rgba(120,58,163,.26), transparent 44%), radial-gradient(1px 1px at 14% 30%, rgba(221,214,255,.55), transparent 2px), radial-gradient(1px 1px at 77% 17%, rgba(221,214,255,.55), transparent 2px), radial-gradient(1px 1px at 91% 63%, rgba(221,214,255,.4), transparent 2px), radial-gradient(1px 1px at 35% 76%, rgba(221,214,255,.4), transparent 2px)",
          backgroundSize:
            "150% 150%, 150% 150%, 150% 150%, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-tech-grid opacity-[0.18]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 size-80 rounded-full bg-[#6d4fff]/15 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-[#3574bd]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl">
        <header className="text-center">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#c4b5fd] sm:text-xs">
            A student-led AI collective
          </p>
          <h1 className="sr-only">AI NEXUS</h1>
          <div className="mx-auto flex justify-center" role="img" aria-label="AI NEXUS logo">
            <DitheredLogo
              imageSrc="/ainexus-wordmark.svg"
              className="h-32 w-full max-w-160 sm:h-44"
              scale={2.2}
              invert={false}
              particleColor="#c4b5fd"
            />
          </div>
          <p className="mx-auto mt-1 max-w-lg text-sm leading-6 text-[#d0cce0] sm:text-base">
            Follow your curiosity. See where it takes you.
          </p>
        </header>

        <section className="mx-auto mt-3 max-w-5xl sm:mt-5" aria-label="Explore AI NEXUS">
          <WheelCarousel
            items={carouselItems}
            mode="custom"
            activeIndex={activeIndex}
            onActiveChange={(_, index) => setActiveIndex(index)}
            photoSide="left"
            photoWidth={43}
            photoAspect="3/4"
            photoRadius={20}
            contentWidth={1080}
            radius={210}
            spacing={20}
            visibleItems={3}
            apexInset={15}
            markerColor="#a99aff"
            markerSize={10}
            markerGap={14}
            textColor="rgba(207, 202, 229, 0.36)"
            selectedColor="#f4f4f7"
            background="transparent"
            panelColor="#11121d"
            edgeFadeSize={12}
            className="h-105 min-h-105 bg-transparent sm:h-112.5 sm:min-h-112.5"
            photoClassName="shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            itemClassName="font-semibold uppercase tracking-[0.08em]"
          />
        </section>

        <section
          className="mx-auto flex max-w-3xl items-center justify-between gap-4 border-t border-white/10 pt-4 sm:pt-5"
          aria-live="polite"
        >
          <button
            type="button"
            onClick={() => moveSection(-1)}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-[#c4b5fd] transition hover:border-[#c4b5fd]/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5fd]"
            aria-label="Previous section"
          >
            <ArrowLeft size={16} aria-hidden="true" />
          </button>

          <div className="min-w-0 flex-1 text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#a99aff] sm:text-[10px]">
              {String(activeIndex + 1).padStart(2, "0")} / 04
              {activeSection.disabled ? " · COMING SOON" : ""}
            </p>
            <p className="mt-1 truncate text-sm text-[#bab8cc] sm:text-base">
              {activeSection.caption}
            </p>
          </div>

          {activeSection.disabled ? (
            <span
              className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 font-mono text-[9px] uppercase tracking-wider text-text-secondary sm:text-[10px]"
              aria-disabled="true"
            >
              Positions TBD
            </span>
          ) : (
            <Link
              href={activeSection.href}
              className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-[#a99aff]/40 bg-accent-periwinkle/15 px-4 font-mono text-[9px] uppercase tracking-wider text-white transition hover:border-[#c4b5fd] hover:bg-accent-periwinkle/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5fd] sm:text-[10px]"
            >
              <span className="hidden sm:inline">Discover</span>
              {activeSection.title}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          )}

          <button
            type="button"
            onClick={() => moveSection(1)}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-[#c4b5fd] transition hover:border-[#c4b5fd]/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5fd]"
            aria-label="Next section"
          >
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </section>
      </div>
    </main>
  );
}

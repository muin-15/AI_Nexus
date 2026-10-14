"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Compass, Users } from "lucide-react";

const destinations = [
  {
    href: "/about",
    number: "01",
    title: "About",
    caption: "The people behind the curiosity",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=85",
    alt: "Immersive blue and violet digital light installation",
    position: "left",
  },
  {
    href: "/explore",
    number: "02",
    title: "Explore",
    caption: "Ideas worth getting lost in",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    alt: "Intricate computer circuitry",
    position: "center",
  },
  {
    href: "/community",
    number: "03",
    title: "Community",
    caption: "Build something together",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    alt: "A team collaborating around a table",
    position: "right",
  },
];

const swings = [
  { from: -2.3, to: 2.3, duration: 4.6, delay: 0.1 },
  { from: 1.8, to: -1.8, duration: 5.2, delay: 0.45 },
  { from: -1.6, to: 1.6, duration: 4.9, delay: 0.8 },
];

export default function HomeHub() {
  const reduceMotion = useReducedMotion();

  return (
    <main
      id="main-content"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-5 py-10 sm:px-8 sm:py-14"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-bg-dark"
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 opacity-90"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { backgroundPosition: ["0% 0%", "100% 35%", "0% 0%"] }}
        transition={reduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 18% 18%, rgba(100,76,215,.34), transparent 36%), radial-gradient(ellipse at 82% 24%, rgba(43,96,160,.3), transparent 38%), radial-gradient(ellipse at 50% 95%, rgba(120,58,163,.26), transparent 44%), radial-gradient(1px 1px at 14% 30%, rgba(221,214,255,.55), transparent 2px), radial-gradient(1px 1px at 77% 17%, rgba(221,214,255,.55), transparent 2px), radial-gradient(1px 1px at 91% 63%, rgba(221,214,255,.4), transparent 2px), radial-gradient(1px 1px at 35% 76%, rgba(221,214,255,.4), transparent 2px)",
          backgroundSize: "150% 150%, 150% 150%, 150% 150%, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
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
      <div
        className="pointer-events-none absolute left-1/2 top-[52%] -z-10 h-64 w-[min(92vw,68rem)] -translate-x-1/2 rotate-[-8deg] rounded-[50%] border border-[#a99aff]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[52%] -z-10 h-80 w-[min(78vw,54rem)] -translate-x-1/2 rotate-[7deg] rounded-[50%] border border-[#7cb2e8]/6"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-3 text-center sm:mb-0">
          <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.28em] text-[#b4a6ff] sm:text-[10px]">
            A student-led AI collective
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.075em] text-white sm:text-6xl">
            AI <span className="font-outline">NEXUS</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#bab8cc]">
            Follow your curiosity. See where it takes you.
          </p>
        </div>

        <div className="relative mx-auto mt-5 h-80 max-w-5xl sm:mt-0 sm:h-96">
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 h-28 w-full overflow-visible drop-shadow-[0_0_10px_rgba(146,123,255,0.6)]"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="nexus-string" x1="0" x2="1">
                <stop offset="0" stopColor="#7768bd" stopOpacity=".5" />
                <stop offset=".5" stopColor="#c4b5fd" />
                <stop offset="1" stopColor="#7768bd" stopOpacity=".5" />
              </linearGradient>
            </defs>
            <path
              d="M 20 12 Q 500 152 980 12"
              fill="none"
              stroke="url(#nexus-string)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="absolute inset-x-0 top-0 grid grid-cols-3 justify-items-center">
            {destinations.map((destination, index) => {
              const Icon = destination.icon;
              const swing = swings[index];

              return (
                <motion.div
                  key={destination.href}
                  className={`relative w-[min(28vw,11.5rem)] min-w-[6.1rem] ${
                    index === 1 ? "mt-20" : "mt-14"
                  }`}
                  style={{ transformOrigin: "50% 0%" }}
                  animate={
                    reduceMotion
                      ? { rotate: 0 }
                      : { rotate: [swing.from, swing.to, swing.from] }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: swing.duration,
                          delay: swing.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  whileHover={reduceMotion ? undefined : { rotate: 0, scale: 1.04 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <span
                    className={`absolute left-1/2 -top-3 h-3 w-px -translate-x-1/2 bg-linear-to-b from-[#c4b5fd]/80 to-[#8b79df]/60 ${
                      index === 1 ? "-top-4 h-4" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`absolute left-1/2 z-10 size-2 -translate-x-1/2 rounded-full border border-[#e0d9ff] bg-[#9d87ff] shadow-[0_0_13px_rgba(157,135,255,0.95)] ${
                      index === 1 ? "-top-5" : "-top-4"
                    }`}
                    aria-hidden="true"
                  />
                  <Link
                    href={destination.href}
                    className="group block overflow-hidden rounded-[1.15rem] border border-white/15 bg-[#11121d]/95 p-1.5 shadow-[0_20px_55px_rgba(0,0,0,0.5)] backdrop-blur-md transition hover:border-[#c0b3ff]/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c0b3ff] sm:rounded-3xl sm:p-2.5"
                    aria-label={`${destination.title}: ${destination.caption}`}
                  >
                    <span
                      className="relative block aspect-square overflow-hidden rounded-[0.85rem] bg-[#17182a] sm:rounded-[1.1rem]"
                      aria-hidden="true"
                    >
                      <span
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url("${destination.image}")`,
                          backgroundPosition: destination.position,
                        }}
                      />
                      <span className="absolute inset-0 bg-linear-to-t from-bg-dark/90 via-bg-dark/10 to-[#11121d]/15" />
                      <span className="absolute left-2 top-2 rounded-full border border-white/15 bg-black/35 px-2 py-1 font-mono text-[8px] tracking-[0.12em] text-white/85 backdrop-blur sm:left-3 sm:top-3 sm:text-[9px]">
                        {destination.number} / NEXUS
                      </span>
                      <span className="absolute bottom-2 left-2 grid size-7 place-items-center rounded-lg border border-white/20 bg-[#17152a]/70 text-[#d1c8ff] backdrop-blur sm:bottom-3 sm:left-3 sm:size-9">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                    </span>
                    <span className="block px-1.5 pb-2 pt-2.5 sm:px-2.5 sm:pb-3 sm:pt-3.5">
                      <span className="flex items-center justify-between gap-1">
                        <span className="truncate text-[11px] font-semibold tracking-tight text-white sm:text-base">
                          {destination.title}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="shrink-0 text-[#a99aff] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-4"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-1 block truncate font-mono text-[7px] uppercase tracking-widest text-[#a6a3bb] sm:text-[9px] sm:tracking-[0.13em]">
                        {destination.caption}
                      </span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="-mt-1 text-center font-mono text-[8px] uppercase tracking-[0.2em] text-[#9290a8] sm:mt-0 sm:text-[9px]">
          Choose a thread to follow
        </p>
      </div>
    </main>
  );
}

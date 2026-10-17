import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { DitheredLogo } from "@/components/ui/dithered-logo";
import { LayeredStack } from "@/components/ui/layered-stack";
import { useSectionTransition } from "@/components/SectionTransition";

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

export default function HomeHub() {
  const reduceMotion = useReducedMotion();
  const navigateWithTransition = useSectionTransition();

  return (
    <main
      id="main-content"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 py-6 sm:px-8 sm:py-8"
    >
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
              className="h-40 w-full max-w-192 sm:h-56 md:h-64"
              scale={2.2}
              invert={false}
              particleColor="#c4b5fd"
            />
          </div>
          <p className="mx-auto mt-1 max-w-lg text-sm leading-6 text-[#d0cce0] sm:text-base">
            Follow your curiosity. See where it takes you.
          </p>
        </header>

        <section
          className="mx-auto mt-5 max-w-4xl sm:mt-7"
          aria-label="Explore AI NEXUS sections"
        >
          <LayeredStack className="grid h-[21rem] w-full grid-cols-2 gap-3 sm:h-[26rem] sm:gap-5">
            {sections.map((section, index) => {
              const cardClassName =
                "group relative isolate min-h-0 overflow-hidden rounded-xl border border-white/15 bg-[#0b0c14] shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-300 hover:border-[#a99aff]/70 hover:shadow-[0_22px_65px_rgba(70,52,150,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5fd]";
              const cardContents = (
                <>
                  <div
                    className="absolute inset-0 -z-10 bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8, 9, 13, 0.08) 15%, rgba(8, 9, 13, 0.88) 100%), url("${section.image}")`,
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-[#08090d]/25 via-transparent to-[#654ad6]/20"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5">
                    <p className="mb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-[#c4b5fd] sm:text-[10px]">
                      {String(index + 1).padStart(2, "0")}
                      {section.disabled ? " / COMING SOON" : " / EXPLORE"}
                    </p>
                    <h2 className="text-sm font-bold uppercase tracking-[0.04em] text-white sm:text-xl">
                      {section.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-[9px] leading-relaxed text-white/75 sm:text-xs">
                      {section.caption}
                    </p>
                  </div>
                  {!section.disabled && (
                    <ArrowUpRight
                      className="absolute right-3 top-3 text-white/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:right-5 sm:top-5"
                      size={18}
                      aria-hidden="true"
                    />
                  )}
                  {section.disabled && (
                    <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/35 px-2 py-1 font-mono text-[7px] uppercase tracking-wider text-white/70 sm:right-5 sm:top-5 sm:text-[9px]">
                      Positions TBD
                    </span>
                  )}
                </>
              );

              return section.disabled ? (
                <div
                  key={section.title}
                  className={`${cardClassName} cursor-not-allowed opacity-70`}
                  aria-label={`${section.title}: ${section.caption}`}
                  aria-disabled="true"
                >
                  {cardContents}
                </div>
              ) : (
                <Link
                  key={section.title}
                  href={section.href}
                  className={cardClassName}
                  aria-label={`${section.title}: ${section.caption}`}
                  onClick={(event) => {
                    if (
                      event.defaultPrevented ||
                      event.button !== 0 ||
                      event.metaKey ||
                      event.ctrlKey ||
                      event.shiftKey ||
                      event.altKey
                    ) {
                      return;
                    }

                    event.preventDefault();
                    navigateWithTransition(section.href, section.title);
                  }}
                >
                  {cardContents}
                </Link>
              );
            })}
          </LayeredStack>
          <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 sm:text-[10px]">
            Hover to unfold · Select a card to explore
          </p>
        </section>
      </div>
    </main>
  );
}

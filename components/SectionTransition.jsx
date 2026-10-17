"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { BrandOrbs } from "@/src/shaders/brand-orbs/BrandOrbs";

const SectionTransitionContext = createContext(null);
const NAVIGATION_DELAY = 850;
const TRANSITION_EXIT_DURATION = 240;

export function SectionTransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [destination, setDestination] = useState(null);
  const navigationTimerRef = useRef(null);
  const dismissalTimerRef = useRef(null);

  const navigateWithTransition = useCallback(
    (href, label) => {
      if (navigationTimerRef.current) {
        window.clearTimeout(navigationTimerRef.current);
      }
      if (dismissalTimerRef.current) {
        window.clearTimeout(dismissalTimerRef.current);
      }

      setDestination({ href, label });
      navigationTimerRef.current = window.setTimeout(() => {
        router.push(href);
      }, NAVIGATION_DELAY);
    },
    [router],
  );

  useEffect(() => {
    if (!destination || pathname !== destination.href) return;

    if (navigationTimerRef.current) {
      window.clearTimeout(navigationTimerRef.current);
      navigationTimerRef.current = null;
    }
    dismissalTimerRef.current = window.setTimeout(() => {
      setDestination(null);
      dismissalTimerRef.current = null;
    }, TRANSITION_EXIT_DURATION);
  }, [destination, pathname]);

  useEffect(
    () => () => {
      if (navigationTimerRef.current) {
        window.clearTimeout(navigationTimerRef.current);
      }
      if (dismissalTimerRef.current) {
        window.clearTimeout(dismissalTimerRef.current);
      }
    },
    [],
  );

  return (
    <SectionTransitionContext.Provider value={navigateWithTransition}>
      {children}
      {destination && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 overflow-hidden bg-[#050608]/95 px-6 backdrop-blur-md"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          role="status"
          aria-live="polite"
          aria-label={`Loading ${destination.label}`}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 46%, rgba(103, 78, 206, 0.16), transparent 24rem)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 size-28 sm:size-32">
            <BrandOrbs
              variant="aura"
              size="medium"
              mode="dark"
              speed={1.0}
              paused={Boolean(reduceMotion)}
              aria-label="NEXUS loading animation"
              className="size-full"
            />
          </div>
          <div className="relative z-10 text-center">
            <p className="text-3xl font-semibold tracking-[0.28em] text-white sm:text-5xl">
              NEXUS
            </p>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b9adff]/75 sm:text-[10px]">
              Entering {destination.label}
            </p>
          </div>
          <div
            className="relative z-10 h-px w-36 overflow-hidden bg-white/10 sm:w-44"
            aria-hidden="true"
          >
            <motion.span
              className="block h-full w-1/2 bg-gradient-to-r from-transparent via-[#a99aff] to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </SectionTransitionContext.Provider>
  );
}

export function useSectionTransition() {
  const navigateWithTransition = useContext(SectionTransitionContext);
  if (!navigateWithTransition) {
    throw new Error(
      "useSectionTransition must be used within SectionTransitionProvider.",
    );
  }
  return navigateWithTransition;
}

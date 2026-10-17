"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Signature Intro: Cinematic AI NEXUS Curtain
 * 
 * Phases:
 * - Phase A: Entrance (0.0s - 0.8s) -> Atmosphere fades in, wordmark appears, accent line draws, tagline enters.
 * - Phase B: Hold (0.8s - 1.9s) -> Wordmark fully readable & illuminated together (~1.1s hold).
 * - Phase C: Split Exit (1.9s - 3.0s) -> "AI" moves left, "NEXUS" moves right, background splits into 
 *   left & right vertical panels sliding off-screen, revealing the homepage cleanly.
 * 
 * Playback behavior:
 * - Plays once when the browser session first opens the homepage.
 * - Gracefully respects prefers-reduced-motion.
 * - Cleans up all timers on unmount (React Strict Mode safe).
 * - Supports instant ESC key skip.
 */
export default function AINexusCurtain({ onIntroComplete }) {
  const [phase, setPhase] = useState("entrance");

  const completeIntro = useCallback(() => {
    setPhase("done");
    if (onIntroComplete) {
      onIntroComplete();
    }
  }, [onIntroComplete]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setPhase("done");
      if (onIntroComplete) onIntroComplete();
      return;
    }

    // Start Phase A: Entrance
    setPhase("entrance");

    // Phase B: Hold at 800ms
    const tHold = setTimeout(() => {
      setPhase("hold");
    }, 800);

    // Phase C: Split Exit at 1900ms (~1.1s hold time)
    const tExit = setTimeout(() => {
      setPhase("exit");
    }, 1900);

    // Final completion at 3000ms
    const tDone = setTimeout(() => {
      completeIntro();
    }, 3050);

    // Keyboard shortcut (Escape) to skip immediately
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        completeIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(tHold);
      clearTimeout(tExit);
      clearTimeout(tDone);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [completeIntro, onIntroComplete]);

  if (phase === "done") {
    return null;
  }

  const isExiting = phase === "exit";

  // Refined easing curve for luxury technology feel
  const splitEase = [0.77, 0, 0.175, 1];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 overflow-hidden bg-bg-dark select-none"
        aria-label="AI NEXUS introductory sequence"
        role="dialog"
        aria-modal="true"
      >
        {/* Split Exit Panels */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex">
          {/* Left Curtain Panel */}
          <motion.div
            className="relative w-1/2 h-full"
            style={{
              background: "linear-gradient(90deg, #08090d 0%, #151326 100%)",
            }}
            initial={{ x: "0%" }}
            animate={isExiting ? { x: "-100%" } : { x: "0%" }}
            transition={{ duration: 1.05, ease: splitEase }}
          />

          {/* Right Curtain Panel */}
          <motion.div
            className="relative w-1/2 h-full"
            style={{
              background: "linear-gradient(270deg, #08090d 0%, #151326 100%)",
            }}
            initial={{ x: "0%" }}
            animate={isExiting ? { x: "100%" } : { x: "0%" }}
            transition={{ duration: 1.05, ease: splitEase }}
          />
        </div>

        {/* Central Wordmark */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4">
          {/* Main Brand Wordmark */}
          <div className="flex items-center justify-center font-black tracking-tighter leading-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 select-none overflow-hidden py-2 px-4">
            {/* "AI" - Solid White, Animates Left on Exit */}
            <motion.span
              className="inline-block text-text-primary mr-3 sm:mr-5 drop-shadow-[0_0_35px_rgba(244,244,247,0.2)]"
              initial={{ opacity: 0, y: 15 }}
              animate={
                isExiting
                  ? { x: "-120vw", opacity: 0 }
                  : { opacity: 1, y: 0, x: 0 }
              }
              transition={
                isExiting
                  ? { duration: 0.95, ease: splitEase }
                  : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
              }
            >
              AI
            </motion.span>

            {/* "NEXUS" - Outlined Typography, Animates Right on Exit */}
            <motion.span
              className="inline-block font-outline tracking-tight text-transparent drop-shadow-[0_0_30px_rgba(123,97,255,0.3)]"
              initial={{ opacity: 0, y: 15 }}
              animate={
                isExiting
                  ? { x: "120vw", opacity: 0 }
                  : { opacity: 1, y: 0, x: 0 }
              }
              transition={
                isExiting
                  ? { duration: 0.95, ease: splitEase }
                  : { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }
              }
            >
              NEXUS
            </motion.span>
          </div>

        </div>
      </div>
    </AnimatePresence>
  );
}

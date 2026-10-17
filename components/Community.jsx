"use client";

import { useState } from "react";
import { CLUB_CONFIG } from "./clubConfig";

/**
 * Community Section
 * 
 * NOTE: Contact and social URLs are centrally managed in `components/clubConfig.js`.
 * Update the placeholders (Discord, GitHub, Email, Form) in `clubConfig.js` with your
 * college's real endpoints before deploying to production.
 */
export default function Community() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(CLUB_CONFIG.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tracks = [
    {
      num: "01",
      name: "Build something",
      audience: "For people who like making things",
      focus: "Web apps, small tools, APIs, and experiments that turn an idea into something real.",
    },
    {
      num: "02",
      name: "Figure it out",
      audience: "For readers, testers, and curious minds",
      focus: "Read papers, compare ideas, run experiments, and write down what actually happened.",
    },
    {
      num: "03",
      name: "Start here",
      audience: "For beginners and enthusiastic helpers",
      focus: "Learn the basics, ask plenty of questions, and find a first project to work on with someone else.",
    },
  ];

  return (
    <section id="community" className="editorial-page relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-32">

      <div className="editorial-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 grid gap-10 sm:mb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
          <div className="editorial-kicker mb-5">03 / COME HANG OUT</div>

          <h2 className="editorial-title">
            Bring your curiosity.{" "}
            <em>Stay for the people.</em>
          </h2>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#8E90A6] leading-relaxed">
            AI NEXUS is a place to meet people, learn in public, and make progress on something you care about. You do not need a perfect idea or a long résumé to join us.
          </p>
          </div>
          <div
            className="editorial-photo"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(18,19,18,.02), rgba(18,19,18,.64)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85')",
            }}
            role="img"
            aria-label="A team collaborating around a table"
          />
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tracks.map((track) => (
            <div
              key={track.num}
              className="editorial-panel p-6 transition-colors"
            >
              <div className="font-mono text-xs text-[#53b8ff] mb-2">{track.num} // PATHWAY</div>
              <h3 className="text-lg font-bold text-[#F4F4F7] mb-1">{track.name}</h3>
              <div className="font-mono text-xs text-[#8E90A6]/70 mb-3">{track.audience}</div>
              <p className="text-xs sm:text-sm text-[#8E90A6] leading-relaxed">{track.focus}</p>
            </div>
          ))}
        </div>

        {/* Join CTA Panel */}
        <div className="editorial-panel relative overflow-hidden border-[#53b8ff]/30 p-8 shadow-2xl sm:p-12">
          {/* Subtle Accent Glow inside Card */}
          <div className="absolute right-0 top-0 h-80 w-80 bg-[#53b8ff]/[0.08] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#53b8ff]/10 border border-[#53b8ff]/30 font-mono text-xs text-[#53b8ff] uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#53b8ff] animate-pulse" />
              COHORT INTAKE OPEN
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-[#F4F4F7] tracking-tight mb-4">
              Join the AI NEXUS Community
            </h3>

            <p className="text-sm sm:text-base text-[#8E90A6] leading-relaxed mb-8">
              No prior AI experience is required. Come to a session, meet the group, bring a question, or help with a project that is already underway.
            </p>

            {/* Configurable Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Discord / Chat Invite Link */}
              <a
                href={"https://chat.whatsapp.com/IqBDg0IMddjKPI5Dyo0OjQ?s=cl&p=a&mlu=4&ilr=4&iam=0"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded bg-[#53b8ff] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#061019] transition-all duration-200 hover:bg-[#82ccff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-sm"
              >
                <span>Join Our Community</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href={"https://www.instagram.com/ai_nexus_pccoer?dlrf=Mjl0ZWgyaHh3dnB2"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join us on Instagram"
                title="Join us on Instagram"
                className="inline-flex size-12 items-center justify-center rounded bg-[#53b8ff] text-[#061019] transition-all duration-200 hover:bg-[#82ccff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <rect width="16" height="16" x="4" y="4" rx="4" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="3.5" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href={"https://www.linkedin.com/in/ai-nexus-club-1646b2438?utm_source=share_via&utm_content=profile&utm_medium=member_android"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join us on LinkedIn"
                title="Join us on LinkedIn"
                className="inline-flex size-12 items-center justify-center rounded bg-[#53b8ff] text-[#061019] transition-all duration-200 hover:bg-[#82ccff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.2 8.2A1.7 1.7 0 1 0 5.2 4.8a1.7 1.7 0 0 0 0 3.4ZM3.7 9.5h3v9.8h-3V9.5Zm4.8 0h2.9v1.3h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.6v5.6h-3v-5c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6v5.1h-3V9.5Z" />
                </svg>
              </a>

              {/* Application Form */}
              <a
                href={CLUB_CONFIG.applicationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.06] text-[#F4F4F7] border border-white/[0.12] hover:border-white/[0.25] font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7B61FF]"
              >
                <span>Interest Form</span>
              </a>

              {/* Copy Contact Email */}
              <button
                type="button"
                onClick={copyEmail}
                disabled
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded border border-dashed border-white/[0.1] bg-transparent px-4 py-3.5 font-mono text-xs uppercase tracking-wider text-[#8E90A6]/50 opacity-60"
                title="Copy contact email is temporarily unavailable"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Configuration Disclaimer notice for developers & club leads */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] font-mono text-[11px] text-[#8E90A6]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                RHYTHM: <span className="text-[#8E90A6]">{CLUB_CONFIG.meetingSchedule}</span>
              </div>
              <div>
                BASE: <span className="text-[#8E90A6]">{CLUB_CONFIG.labLocation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

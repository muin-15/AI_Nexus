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
      name: "The Builder Track",
      audience: "Software developers & engineers",
      focus: "Full-stack apps, vector search engines, LLM agent pipelines, and deployment infrastructure.",
    },
    {
      num: "02",
      name: "The Research Track",
      audience: "Math, CS & data science students",
      focus: "Reading papers, auditing model architectures, hyperparameter sweeps, and ablation write-ups.",
    },
    {
      num: "03",
      name: "The Explorer Track",
      audience: "Curious beginners & enthusiasts",
      focus: "Foundational Python, prompt engineering, introductory neural networks, and weekly tutorials.",
    },
  ];

  return (
    <section id="community" className="relative py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#7B61FF]/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-[#7B61FF] tracking-[0.2em] uppercase mb-4">
            <span className="w-2 h-[1px] bg-[#7B61FF]" />
            <span>03 / FIND YOUR PEOPLE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F7] max-w-4xl leading-[1.1]">
            The future isn't a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F7] via-[#F4F4F7] to-[#7B61FF]">
              spectator sport.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#8E90A6] leading-relaxed">
            AI NEXUS is where driven students break through the noise of AI hype. Exchange ideas, dissect state-of-the-art architectures, collaborate across skills, and build projects that actually ship.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tracks.map((track) => (
            <div
              key={track.num}
              className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] transition-colors"
            >
              <div className="font-mono text-xs text-[#7B61FF] mb-2">{track.num} // PATHWAY</div>
              <h3 className="text-lg font-bold text-[#F4F4F7] mb-1">{track.name}</h3>
              <div className="font-mono text-xs text-[#8E90A6]/70 mb-3">{track.audience}</div>
              <p className="text-xs sm:text-sm text-[#8E90A6] leading-relaxed">{track.focus}</p>
            </div>
          ))}
        </div>

        {/* Join CTA Panel */}
        <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.12] p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle Accent Glow inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7B61FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#7B61FF]/10 border border-[#7B61FF]/30 font-mono text-xs text-[#7B61FF] uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF] animate-pulse" />
              COHORT INTAKE OPEN
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-[#F4F4F7] tracking-tight mb-4">
              Join the AI NEXUS Community
            </h3>

            <p className="text-sm sm:text-base text-[#8E90A6] leading-relaxed mb-8">
              No prior AI expertise required—only intense curiosity, dedication, and a willingness to learn. Connect with us on Discord, inspect our open-source repositories, or reach out to the student leads.
            </p>

            {/* Configurable Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Discord / Chat Invite Link */}
              <a
                href={CLUB_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#7B61FF] hover:bg-[#6A4FE8] text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase rounded transition-all duration-200 shadow-[0_0_25px_rgba(123,97,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Join Discord Community</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

              {/* GitHub Repositories */}
              <a
                href={CLUB_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.06] text-[#8E90A6] hover:text-[#F4F4F7] border border-white/[0.08] hover:border-white/[0.2] font-mono text-xs sm:text-sm tracking-wider uppercase rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7B61FF]"
              >
                <span>GitHub Repos</span>
              </a>

              {/* Copy Contact Email */}
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-transparent hover:bg-white/[0.04] text-[#8E90A6] hover:text-[#F4F4F7] border border-dashed border-white/[0.15] font-mono text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                title="Copy contact email"
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

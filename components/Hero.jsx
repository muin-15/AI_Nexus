"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="absolute inset-0 radial-glow-hero pointer-events-none" />
      
      {/* Corner Technical Framing Crosshairs */}
      <div className="absolute top-24 left-6 hidden lg:block font-mono text-[10px] text-[#8E90A6]/40 select-none">
        + 00.284 // LAT
      </div>
      <div className="absolute top-24 right-6 hidden lg:block font-mono text-[10px] text-[#8E90A6]/40 select-none">
        + 11.902 // LNG
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
          <span className="font-mono text-[11px] sm:text-xs text-[#8E90A6] tracking-[0.2em] uppercase">
            ARTIFICIAL INTELLIGENCE · RESEARCH · INNOVATION
          </span>
        </div>

        {/* Headline: THINK BEYOND. */}
        <h1 className="font-black tracking-tighter leading-[0.9] text-[clamp(3.2rem,11vw,8.5rem)] uppercase select-none mb-6 sm:mb-8">
          <span className="block text-[#F4F4F7] drop-shadow-[0_4px_24px_rgba(255,255,255,0.08)]">
            THINK
          </span>
          <span className="block font-outline tracking-tight text-transparent drop-shadow-[0_4px_30px_rgba(123,97,255,0.25)]">
            BEYOND.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#8E90A6] font-normal leading-relaxed mb-10 sm:mb-12">
          A community of curious minds building what's next. We explore artificial intelligence, experiment with emerging technology, and turn ambitious ideas into real projects.
        </p>

        {/* Buttons / Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          <a
            href="#explore"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#7B61FF] hover:bg-[#6A4FE8] text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase rounded transition-all duration-200 shadow-[0_0_30px_rgba(123,97,255,0.35)] hover:shadow-[0_0_40px_rgba(123,97,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Explore AI NEXUS</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/[0.04] text-[#F4F4F7] border border-white/[0.12] hover:border-white/[0.25] font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7B61FF]"
          >
            <span>Discover our vision</span>
          </a>
        </div>
      </div>

      {/* Supporting Metadata Near Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-[#8E90A6]">
          <div className="flex items-center gap-3">
            <span className="text-[#7B61FF] font-bold">01 //</span>
            <div>
              <div className="text-[#F4F4F7] uppercase tracking-wider text-[11px]">DISCIPLINE</div>
              <div className="text-[#8E90A6]/70 text-[10px]">Deep Learning & Intelligent Systems</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#7B61FF] font-bold">02 //</span>
            <div>
              <div className="text-[#F4F4F7] uppercase tracking-wider text-[11px]">DIRECTIVE</div>
              <div className="text-[#8E90A6]/70 text-[10px]">Student-Led Open Research & Labs</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#7B61FF] font-bold">03 //</span>
            <div>
              <div className="text-[#F4F4F7] uppercase tracking-wider text-[11px]">ARCHITECTURE</div>
              <div className="text-[#8E90A6]/70 text-[10px]">Production-Grade Software Artifacts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

export default function Explore() {
  const [activeArea, setActiveArea] = useState(0);

  const areas = [
    {
      id: "01",
      code: "AI_AND_MODELS",
      title: "AI and machine learning",
      tagline: "Understand what models are doing, then try building one.",
      description:
        "We work through the basics, look inside current models, and run small experiments that make the ideas click. The goal is curiosity first, impressive terminology second.",
      technologies: ["Python", "PyTorch", "Hugging Face", "Computer Vision", "Model Testing"],
      deliverable: "Small models, clear notes, and experiments you can explain to someone else.",
    },
    {
      id: "02",
      code: "APPS_AND_SYSTEMS",
      title: "Apps and useful systems",
      tagline: "Turn an interesting idea into something people can actually use.",
      description:
        "We make websites, APIs, tools, and small services around the ideas we care about. You can join at the design stage, write code, or help make the final thing feel good to use.",
      technologies: ["React", "Next.js", "Python", "APIs", "Databases"],
      deliverable: "Working demos, readable code, and projects people can pick up after us.",
    },
    {
      id: "03",
      code: "READ_AND_TEST",
      title: "Research and experiments",
      tagline: "Read something interesting. Try it. See what happens.",
      description:
        "Reading groups turn papers into conversations and experiments. We compare results, notice where things fail, and write down what we learn so the next person can start faster.",
      technologies: ["Paper Reading", "Small Tests", "Data Notes", "Visualizations", "Write-ups"],
      deliverable: "Experiments, honest results, and notes worth sharing.",
    },
    {
      id: "04",
      code: "BUILD_UNDER_PRESSURE",
      title: "Hackathons and challenges",
      tagline: "A team, a deadline, and an idea that might work.",
      description:
        "Hackathons are a good excuse to learn quickly with other people. We split the work, make decisions with limited time, and leave with something we can demo, even when it is a little rough.",
      technologies: ["Team Planning", "Rapid Prototypes", "APIs", "Demos"],
      deliverable: "A working prototype, a story to tell, and a team that knows more than it did before.",
    },
    {
      id: "05",
      code: "LEARN_WITH_OTHERS",
      title: "Workshops and peer learning",
      tagline: "Bring a question. Leave with a few more useful answers.",
      description:
        "Members teach the things they recently figured out, from setting up a project to working with Git. Sessions are practical, informal, and friendly to people who are starting from zero.",
      technologies: ["Hands-On Sessions", "Pairing", "Git", "Shared Guides"],
      deliverable: "A clearer next step, a useful example, and people you can ask for help.",
    },
  ];

  return (
    <section id="explore" className="editorial-page relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-32">

      <div className="editorial-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 grid gap-10 sm:mb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
          <div className="editorial-kicker mb-5">02 / WAYS TO TAKE PART</div>

          <h2 className="editorial-title">
            Five ways to get involved.{" "}
            <em>Pick a direction.</em>
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#8E90A6]">
            There is no single way to take part. Pick a track that sounds fun, move between them, or bring a project that does not fit neatly anywhere.
          </p>
          </div>
          <div
            className="editorial-photo"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(18,19,18,.02), rgba(18,19,18,.64)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85')",
            }}
            role="img"
            aria-label="Close-up of a computer circuit board"
          />
        </div>

        {/* Interactive Editorial Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Navigation list of 5 areas */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {areas.map((area, index) => {
              const isSelected = activeArea === index;
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(index)}
                  type="button"
                  className={`group flex w-full cursor-pointer items-center justify-between border-b border-white/[0.14] p-5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#53b8ff] ${
                    isSelected
                      ? "bg-[#53b8ff]/[0.09] border-[#53b8ff]/70"
                      : "bg-transparent hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isSelected ? "text-[#53b8ff]" : "text-[#8E90A6] group-hover:text-[#F4F4F7]"
                      }`}
                    >
                      {area.id}
                    </span>
                    <div>
                      <h3
                        className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                          isSelected ? "text-[#F4F4F7]" : "text-[#8E90A6] group-hover:text-[#F4F4F7]"
                        }`}
                      >
                        {area.title}
                      </h3>
                      <div className="font-mono text-[10px] text-[#8E90A6]/60 mt-0.5">
                        {area.code}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-2 h-2 rounded-full transition-all ${
                      isSelected
                        ? "bg-[#53b8ff] shadow-[0_0_8px_#53b8ff]"
                        : "bg-transparent group-hover:bg-black/20"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Inspector Panel */}
          <div className="lg:col-span-7">
            <div className="editorial-panel relative flex min-h-[440px] flex-col justify-between p-7 backdrop-blur-sm sm:p-10">
              {/* Corner Metadata */}
              <div className="flex justify-between items-start font-mono text-xs text-[#8E90A6]/60 border-b border-white/[0.08] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#53b8ff] animate-pulse" />
                  <span className="text-[#F4F4F7] uppercase tracking-wider">
                    {areas[activeArea].code}
                  </span>
                </div>
                <span>STATUS // ACTIVE DISCIPLINE</span>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-[#F4F4F7] tracking-tight mb-2">
                  {areas[activeArea].title}
                </h4>
                
                <p className="text-sm sm:text-base text-[#53b8ff] font-mono mb-6">
                  {areas[activeArea].tagline}
                </p>

                <p className="text-sm sm:text-base text-[#8E90A6] leading-relaxed mb-8">
                  {areas[activeArea].description}
                </p>
              </div>

              {/* Technologies and Deliverables */}
              <div className="space-y-4 pt-6 border-t border-white/[0.08]">
                <div>
                  <div className="font-mono text-[11px] text-[#8E90A6]/80 uppercase tracking-wider mb-2">
                    CORE TOOLCHAIN & PROTOCOLS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {areas[activeArea].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-[#53b8ff]/10 px-2.5 py-1 font-mono text-xs text-[#F4F4F7] border border-[#53b8ff]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/[0.04]">
                  <div className="font-mono text-[11px] text-[#8E90A6]/80 uppercase tracking-wider mb-1">
                    PRIMARY DELIVERABLE
                  </div>
                  <p className="text-xs sm:text-sm text-[#8E90A6]">
                    {areas[activeArea].deliverable}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

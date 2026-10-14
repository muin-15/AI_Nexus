"use client";

import { useState } from "react";

export default function Explore() {
  const [activeArea, setActiveArea] = useState(0);

  const areas = [
    {
      id: "01",
      code: "AREA_AI_ML",
      title: "Artificial Intelligence & Machine Learning",
      tagline: "Neural architectures, foundation models, and autonomous reasoning systems.",
      description:
        "We dissect how modern intelligent systems learn, generalize, and perform inference. From understanding transformer attention mechanisms and diffusion dynamics to fine-tuning open weights with LoRA and optimizing token throughput.",
      technologies: ["PyTorch", "Hugging Face", "CUDA / Triton", "Model Quantization", "Computer Vision"],
      deliverable: "Custom inference runtimes, fine-tuned domain models, and benchmark evaluation suites.",
    },
    {
      id: "02",
      code: "AREA_SOFTWARE_PROD",
      title: "Software & Product Development",
      tagline: "Engineering resilient backends, low-latency APIs, and interactive interfaces.",
      description:
        "An AI model is only as useful as the software architecture enclosing it. We design scalable web applications, implement vector indexing pipelines, and construct responsive interfaces that make artificial intelligence intuitive.",
      technologies: ["Next.js & React", "FastAPI & Python", "Vector DBs (Qdrant/Milvus)", "Docker & CI/CD", "gRPC"],
      deliverable: "End-to-end full-stack applications with production-grade monitoring and deployment pipelines.",
    },
    {
      id: "03",
      code: "AREA_RESEARCH_EXP",
      title: "Research & Experimentation",
      tagline: "Deconstructing seminal papers, verifying empirical claims, and novel exploration.",
      description:
        "Through our weekly reading circles, we audit recent arXiv publications across deep learning, agentic reasoning, and algorithmic alignment. We reproduce benchmark results, identify failure modes, and publish reproducible experiment code.",
      technologies: ["ArXiv Literature", "Ablation Studies", "Weights & Biases", "Loss Visualization", "Empirical Benchmarking"],
      deliverable: "Reproducible code repositories, benchmark comparisons, and student technical write-ups.",
    },
    {
      id: "04",
      code: "AREA_HACK_CHALLENGE",
      title: "Hackathons & Technical Challenges",
      tagline: "High-velocity prototyping, collegiate sprint teams, and algorithmic contests.",
      description:
        "We field collaborative teams for regional, national, and virtual hackathons. Under tight constraints, our squads architect full-stack AI solutions, from multi-agent workflow automations to specialized tooling.",
      technologies: ["Agent Orchestration", "Rapid System Design", "Function Calling", "Distributed Datastores"],
      deliverable: "Award-winning functional prototypes, demo presentations, and battle-tested codebases.",
    },
    {
      id: "05",
      code: "AREA_WORKSHOPS_PEER",
      title: "Workshops & Peer Learning",
      tagline: "Structured masterclasses, live architecture teardowns, and mentorship.",
      description:
        "Knowledge grows when openly shared. Senior members host hands-on workshops covering practical skills rarely taught in classrooms: setting up GPU developer environments, training custom tokenizers, and mastering Git collaboration.",
      technologies: ["Hands-On Labs", "Architecture Teardowns", "Pair Programming", "Open Courseware"],
      deliverable: "Curated learning paths, public code templates, and continuous peer support.",
    },
  ];

  return (
    <section id="explore" className="relative py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#7B61FF]/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-[#7B61FF] tracking-[0.2em] uppercase mb-4">
            <span className="w-2 h-[1px] bg-[#7B61FF]" />
            <span>02 / WHAT DRIVES US</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F7] max-w-4xl leading-[1.1]">
            Explore the unknown.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F4F7] via-[#F4F4F7] to-[#7B61FF]">
              Make something real.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#8E90A6]">
            Our initiatives are structured around five core engineering vectors, giving members the freedom to delve deep into specialized domains or collaborate across disciplines.
          </p>
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
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7B61FF] ${
                    isSelected
                      ? "bg-[#7B61FF]/10 border-[#7B61FF]/60 shadow-[0_0_25px_rgba(123,97,255,0.15)]"
                      : "bg-white/[0.02] hover:bg-white/[0.04] border-white/[0.08] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isSelected ? "text-[#7B61FF]" : "text-[#8E90A6] group-hover:text-[#F4F4F7]"
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
                        ? "bg-[#7B61FF] shadow-[0_0_8px_#7B61FF]"
                        : "bg-transparent group-hover:bg-white/20"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Inspector Panel */}
          <div className="lg:col-span-7">
            <div className="relative p-7 sm:p-10 rounded-xl bg-white/[0.02] border border-white/[0.1] backdrop-blur-sm min-h-[440px] flex flex-col justify-between">
              {/* Corner Metadata */}
              <div className="flex justify-between items-start font-mono text-xs text-[#8E90A6]/60 border-b border-white/[0.08] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF] animate-pulse" />
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
                
                <p className="text-sm sm:text-base text-[#7B61FF] font-mono mb-6">
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
                        className="px-2.5 py-1 rounded bg-[#7B61FF]/10 border border-[#7B61FF]/30 font-mono text-xs text-[#F4F4F7]"
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

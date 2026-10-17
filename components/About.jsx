"use client";

export default function About() {
  const pillars = [
    {
      index: "01",
      tag: "EMPIRICAL_DEV",
      title: "Hands-On Experimentation",
      description:
        "We move beyond passive tutorials and static slides. Members build from scratch—training neural networks, testing inference pipelines on local silicon, fine-tuning open weights, and turning research ideas into functional systems.",
      details: ["Model Fine-Tuning", "Low-Latency Inference", "Hardware Acceleration"],
    },
    {
      index: "02",
      tag: "COLLECTIVE_RND",
      title: "Collaborative Research",
      description:
        "Complex breakthroughs don't happen in silos. We foster an interdisciplinary environment where software engineers, data scientists, mathematicians, and product designers dissect landmark papers and co-author technical whitepapers.",
      details: ["Paper Deconstructions", "Reproducibility Benchmarks", "Peer Review"],
    },
    {
      index: "03",
      tag: "PROD_SHIPPING",
      title: "Production Engineering",
      description:
        "Theory only matters when it runs reliably. We emphasize real-world engineering standards: modular architectures, automated testing, containerized deployments, modern web frontends, and open-source releases.",
      details: ["Modern Stacks & APIs", "Vector Database Design", "Open Repositories"],
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/8 overflow-hidden">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-accent-periwinkle/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-accent-periwinkle tracking-[0.2em] uppercase mb-4">
            <span className="w-2 h-px bg-accent-periwinkle" />
            <span>01 / WHO WE ARE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary max-w-4xl leading-[1.1]">
            Not just learning technology.{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-text-primary via-text-primary to-accent-periwinkle">
              Building with it.
            </span>
          </h2>

          <div className="mt-8 max-w-3xl text-base sm:text-lg text-text-secondary leading-relaxed space-y-4">
            <p>
              AI NEXUS is an independent collegiate community founded by passionate student developers, researchers, and engineers. We demystify artificial intelligence, machine learning, and emerging computing paradigms through active, uncompromised experimentation.
            </p>
            <p className="text-sm sm:text-base text-text-secondary/80">
              Whether optimizing agent architectures, deploying production APIs, or evaluating the latest open foundation models, our members collaborate on real challenges and ship working software.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="group relative p-6 sm:p-8 rounded-lg bg-white/2 hover:bg-white/4 border border-white/8 hover:border-accent-periwinkle/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner crosshairs indicator */}
              <div className="absolute top-3 right-3 font-mono text-[10px] text-text-secondary/40 group-hover:text-accent-periwinkle transition-colors">
                [+{pillar.index}]
              </div>

              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-accent-periwinkle tracking-wider uppercase mb-3">
                  <span>{pillar.index} //</span>
                  <span className="text-text-secondary">{pillar.tag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-4 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Technical Capability Tags */}
              <div className="pt-4 border-t border-white/6 flex flex-wrap gap-2">
                {pillar.details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 rounded bg-white/3 border border-white/6 font-mono text-[11px] text-text-secondary group-hover:text-text-primary transition-colors"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

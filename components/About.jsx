
"use client";

export default function About() {
  const pillars = [
    {
      index: "01",
      tag: "BUILD BY DOING",
      title: "Make things with your hands",
      description:
        "Most of our learning starts with a blank file. We train small models, try out tools, break things, and keep going until an idea becomes something we can run and show.",
      details: ["Small Models", "Fast Experiments", "Real Hardware"],
    },
    {
      index: "02",
      tag: "LEARN TOGETHER",
      title: "Read, test, discuss",
      description:
        "We read interesting papers together, argue about what they got right, and try to reproduce the parts that matter. No one needs to arrive as an expert.",
      details: ["Paper Circles", "Shared Notes", "Friendly Review"],
    },
    {
      index: "03",
      tag: "SHIP IT",
      title: "Build for the real world",
      description:
        "A project feels different when someone else can use it. We care about clear code, useful interfaces, reliable APIs, and putting our work where people can try it.",
      details: ["Useful Interfaces", "Reliable APIs", "Open Projects"],
    },
  ];

  return (
    <section
      id="about"
      className="editorial-page relative overflow-hidden border-t border-white/8 py-24 sm:py-32"
    >
      {/* Subtle technical grid */}
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-20" />

      {/* Ambient violet glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent-periwinkle/10 blur-3xl" />

      <div className="editorial-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 grid gap-10 sm:mb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <div className="editorial-kicker mb-5">
              01 / ABOUT THE CLUB
            </div>

            <h2 className="editorial-title">
              Curious people.{" "}
              <em>Real projects.</em>
            </h2>

            <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              <p>
                AI NEXUS is a student club for people who like asking how
                things work. We learn about AI, software, and new technology
                by making things together instead of only talking about them.
              </p>

              <p className="text-sm text-text-secondary/90 sm:text-base">
                Some members are here to build their first project. Others
                are tuning models, writing research notes, or helping a team
                get an idea over the finish line. There is room for all of
                that.
              </p>
            </div>
          </div>

          {/* Collaborative student environment */}
          <div
            className="editorial-photo relative min-h-72 overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(8, 10, 16, 0.02), rgba(8, 10, 16, 0.65)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85')",
            }}
            role="img"
            aria-label="Students collaborating around a table"
          >
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <span className="font-mono text-xs tracking-[0.2em] text-white/70">
                LEARN TOGETHER. BUILD TOGETHER.
              </span>
            </div>
          </div>
        </div>

        {/* Three learning pillars */}
        <div className="grid grid-cols-1 gap-px border-y border-white/[0.14] bg-white/[0.14] md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="editorial-panel group relative flex flex-col justify-between p-6 transition-all duration-300 sm:p-8"
            >
              {/* Corner indicator */}
              <div className="absolute right-3 top-3 font-mono text-[10px] text-text-secondary/50 transition-colors group-hover:text-[#53b8ff]">
                [+{pillar.index}]
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#53b8ff]">
                  <span>{pillar.index} //</span>
                  <span className="text-[#a7a29a]">{pillar.tag}</span>
                </div>

                <h3 className="mb-4 text-xl font-bold tracking-tight text-text-primary transition-colors group-hover:text-white sm:text-2xl">
                  {pillar.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </div>

              {/* Capability tags */}
              <div className="flex flex-wrap gap-x-3 gap-y-2 border-t border-white/12 pt-4">
                {pillar.details.map((detail) => (
                  <span
                    key={detail}
                    className="inline-block border-b border-white/16 px-0.5 py-1 font-mono text-[11px] text-[#a7a29a] transition-colors group-hover:text-[#f2eee7]"
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

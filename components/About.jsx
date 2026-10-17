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
    <section id="about" className="editorial-page relative overflow-hidden border-t border-white/[0.08] py-24 sm:py-32">

      <div className="editorial-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 grid gap-10 sm:mb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
          <div className="editorial-kicker mb-5">01 / ABOUT THE CLUB</div>

          <h2 className="editorial-title">
            Curious people.{" "}
            <em>Real projects.</em>
          </h2>

          <div className="mt-8 max-w-3xl text-base sm:text-lg text-[#8E90A6] leading-relaxed space-y-4">
            <p>
              AI NEXUS is a student club for people who like asking how things work. We learn about AI, software, and new technology by making things together instead of only talking about them.
            </p>
            <p className="text-sm sm:text-base text-[#8E90A6]/80">
              Some members are here to build their first project. Others are tuning models, writing research notes, or helping a team get an idea over the finish line. There is room for all of that.
            </p>
          </div>
          </div>
          <div
            className="editorial-photo"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(18,19,18,.05), rgba(18,19,18,.64)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85')",
            }}
            role="img"
            aria-label="Students collaborating around a table"
          />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-px border-y border-white/[0.14] bg-white/[0.14] md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="editorial-panel group relative flex flex-col justify-between p-6 transition-all duration-300 sm:p-8"
            >
              {/* Corner crosshairs indicator */}
              <div className="absolute top-3 right-3 font-mono text-[10px] text-[#8E90A6]/40 group-hover:text-[#53b8ff] transition-colors">
                [+{pillar.index}]
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#53b8ff]">
                  <span>{pillar.index} //</span>
                    <span className="text-[#a7a29a]">{pillar.tag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F7] tracking-tight mb-4 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#8E90A6] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Technical Capability Tags */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {pillar.details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="inline-block border-b border-white/[0.16] px-0.5 py-1 font-mono text-[11px] text-[#a7a29a] transition-colors group-hover:text-[#f2eee7]"
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

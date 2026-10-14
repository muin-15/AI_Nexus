import Link from "next/link";

const sections = [
  { href: "/about", label: "About" },
  { href: "/explore", label: "Explore" },
  { href: "/community", label: "Community" },
];

export default function SiteFrame({ children, current }) {
  return (
    <div className="min-h-screen bg-[#08090D] text-[#F4F4F7]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.07] bg-[#08090D]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center text-lg font-black tracking-[-0.08em] text-white" aria-label="AI NEXUS home">
            AI<span className="ml-1.5 font-outline tracking-[-0.06em]">NEXUS</span>
          </Link>

          <nav className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.12em] text-[#aaa8bc] sm:gap-7 sm:text-[10px]" aria-label="Main navigation">
            {sections.map((section, index) => (
              <Link
                key={section.href}
                href={section.href}
                aria-current={current === section.href.slice(1) ? "page" : undefined}
                className={`transition hover:text-white ${
                  current === section.href.slice(1) ? "text-[#b7aaff]" : ""
                }`}
              >
                <span className="hidden sm:inline">0{index + 1} / </span>
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="pt-16">{children}</div>

      <footer className="border-t border-white/[0.07] bg-[#07080c]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#77758b] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} AI NEXUS</span>
          <Link href="/" className="transition hover:text-white">Intelligence, connected.</Link>
        </div>
      </footer>
    </div>
  );
}

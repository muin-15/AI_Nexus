import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SiteFrame({ children, showHomeButton = false }) {
  return (
    <div className="min-h-screen text-text-primary">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.07] bg-bg-dark/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center text-lg font-black tracking-[-0.08em] text-white" aria-label="AI NEXUS home">
            AI<span className="ml-1.5 font-outline tracking-[-0.06em]">NEXUS</span>
          </Link>
          {showHomeButton && (
            <Link
              href="/"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#a99aff]/35 bg-accent-periwinkle/10 px-4 font-mono text-[9px] uppercase tracking-[0.12em] text-[#d8d0ff] transition hover:border-[#c4b5fd]/70 hover:bg-accent-periwinkle/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4b5fd] sm:text-[10px]"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Home
            </Link>
          )}
        </div>
      </header>

      <div className="pt-16">{children}</div>

      <footer className="border-t border-white/[0.07] bg-[#07080c]/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#77758b] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} AI NEXUS</span>
          <Link href="/" className="transition hover:text-white">Intelligence, connected.</Link>
        </div>
      </footer>
    </div>
  );
}

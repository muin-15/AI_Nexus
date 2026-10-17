
import "./globals.css";
import { Orbitron } from "next/font/google";
import { MatrixRain } from "@/components/ui/matrix-rain";
import HomeIntroGate from "@/components/HomeIntroGate";
import MusicPlayerDock from "@/components/MusicPlayerDock";
import { SectionTransitionProvider } from "@/components/SectionTransition";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "AI NEXUS — Intelligence. Connected.",
  description:
    "A collegiate community of curious minds exploring artificial intelligence, machine learning, software engineering, and emerging technology.",
};

export const viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${orbitron.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-bg-dark text-text-primary antialiased min-h-screen selection:bg-accent-periwinkle/30 selection:text-white">
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.09]"
          aria-hidden="true"
        >
          <MatrixRain
            variant="cyan"
            fixedColor="#584b8a"
            fontSize={24}
            speed={90}
            transparent
          />
        </div>
        <SectionTransitionProvider>
          <div className="relative z-10">{children}</div>
          <HomeIntroGate />
        </SectionTransitionProvider>
        <MusicPlayerDock />
      </body>
    </html>
  );
}

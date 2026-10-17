import "./globals.css";
import { Orbitron } from "next/font/google";
import MusicPlayerDock from "@/components/MusicPlayerDock";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "AI NEXUS — Intelligence. Connected.",
  description: "A collegiate community of curious minds exploring artificial intelligence, machine learning, software engineering, and emerging technology.",
};

export const viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${orbitron.variable} bg-bg-dark text-text-primary antialiased min-h-screen selection:bg-accent-periwinkle/30 selection:text-white`}>
        {children}
        <MusicPlayerDock />
      </body>
    </html>
  );
}

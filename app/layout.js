import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
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
    <html lang="en" className={`dark scroll-smooth ${manrope.variable}`} data-scroll-behavior="smooth">
      <body className="bg-bg-dark text-text-primary antialiased min-h-screen selection:bg-accent-periwinkle/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

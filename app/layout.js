import "./globals.css";

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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#08090D] text-[#F4F4F7] antialiased min-h-screen selection:bg-[#7B61FF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

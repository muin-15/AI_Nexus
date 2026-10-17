"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import AINexusCurtain from "@/components/AINexusCurtain";

export default function HomeIntroGate() {
  const pathname = usePathname();
  const shouldPlayIntro = useRef(pathname === "/");

  if (!shouldPlayIntro.current) return null;

  return <AINexusCurtain />;
}

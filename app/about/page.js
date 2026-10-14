import About from "@/components/About";
import SiteFrame from "@/components/SiteFrame";

export default function AboutPage() {
  return (
    <SiteFrame current="about">
      <main id="main-content">
        <About />
      </main>
    </SiteFrame>
  );
}

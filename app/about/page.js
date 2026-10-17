import About from "@/components/About";
import SiteFrame from "@/components/SiteFrame";

export default function AboutPage() {
  return (
    <SiteFrame showHomeButton>
      <main id="main-content">
        <About />
      </main>
    </SiteFrame>
  );
}

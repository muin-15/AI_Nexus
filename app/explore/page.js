import Explore from "@/components/Explore";
import SiteFrame from "@/components/SiteFrame";

export default function ExplorePage() {
  return (
    <SiteFrame showHomeButton>
      <main id="main-content">
        <Explore />
      </main>
    </SiteFrame>
  );
}

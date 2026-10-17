import Community from "@/components/Community";
import SiteFrame from "@/components/SiteFrame";

export default function CommunityPage() {
  return (
    <SiteFrame showHomeButton>
      <main id="main-content">
        <Community />
      </main>
    </SiteFrame>
  );
}

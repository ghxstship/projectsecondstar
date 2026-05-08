import GuestNav from "@/components/guest/GuestNav";
import MembershipHero from "@/components/guest/MembershipHero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/guest/Manifesto";
import Pillars3 from "@/components/guest/Pillars3";
import EpisodeTeaserGrid from "@/components/guest/EpisodeTeaserGrid";
import NetworkMomentsGrid from "@/components/guest/NetworkMomentsGrid";
import ArchiveTeaserGrid from "@/components/guest/ArchiveTeaserGrid";
import CrewCompositionPreview from "@/components/guest/CrewCompositionPreview";
import LogPreviewGrid from "@/components/guest/LogPreviewGrid";
import MembershipCTA from "@/components/guest/MembershipCTA";
import GuestFooter from "@/components/guest/GuestFooter";

export default function Home() {
  return (
    <main>
      <GuestNav />
      <MembershipHero />
      <Marquee />
      <Manifesto />
      <Pillars3 />
      <EpisodeTeaserGrid limit={3} />
      <NetworkMomentsGrid limit={6} />
      <ArchiveTeaserGrid />
      <CrewCompositionPreview />
      <LogPreviewGrid limit={3} />
      <MembershipCTA />
      <GuestFooter />
    </main>
  );
}

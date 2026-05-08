import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import TierComparison from "@/components/guest/TierComparison";
import NetworkAccessByTier from "@/components/guest/NetworkAccessByTier";
import TheMarkBlock from "@/components/guest/TheMarkBlock";
import MembershipFAQ from "@/components/guest/MembershipFAQ";
import MembershipCTA from "@/components/guest/MembershipCTA";

export const metadata = {
  title: "HVRBOR.CLUB / Membership",
  description:
    "Three tiers. One Harbor. Crew is earned by sailing. Captain at the SEAson 1 founding rate. Commodore by invitation, fifty numbered seats per SEAson.",
};

export default function MembershipPage() {
  return (
    <main>
      <GuestNav />
      <section className="bg-paper px-5 py-20 pt-[140px] text-ink md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / Membership"
          title={
            <>
              The card.
              <br />
              The Crew.
            </>
          }
        />
        <p className="max-w-[720px] font-sub text-[clamp(24px,3vw,40px)] leading-tight tracking-wide">
          A year-round membership built on a Miami flotilla. Three tiers. Seven
          networks. One Harbor.
        </p>
      </section>
      <TierComparison />
      <NetworkAccessByTier />
      <TheMarkBlock />
      <MembershipFAQ />
      <MembershipCTA />
      <GuestFooter />
    </main>
  );
}

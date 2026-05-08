import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import VerticalCategoryGrid from "@/components/guest/VerticalCategoryGrid";
import NetworkMomentsGrid from "@/components/guest/NetworkMomentsGrid";
import HarborTeaser from "@/components/guest/HarborTeaser";

export const metadata = {
  title: "HVRBOR.CLUB / The Network",
  description:
    "Seven verticals — Entertainment, Sports, Health and Wellness, Hospitality, Travel, Retail, Nightlife. Anchor partners across each. The card that opens the rooms that matter.",
};

export default function NetworkPage() {
  return (
    <main>
      <GuestNav />
      <section className="bg-ink px-5 py-20 pt-[140px] text-paper md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / The Network"
          title={
            <>
              Seven networks.
              <br />
              One card.
            </>
          }
          light
        />
        <p className="max-w-[760px] font-sub text-[clamp(24px,3vw,40px)] leading-tight tracking-wide text-paper">
          The reciprocity layer. Anchor partners visible here. The full network
          lives in The Harbor — open to Captain members.
        </p>
      </section>
      <VerticalCategoryGrid />
      <NetworkMomentsGrid />
      <HarborTeaser />
      <GuestFooter />
    </main>
  );
}

import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import CrewComposition from "@/components/guest/CrewComposition";
import BringACrew from "@/components/guest/BringACrew";
import FoundingCrewBlock from "@/components/guest/FoundingCrewBlock";
import CrewStoriesGrid from "@/components/guest/CrewStoriesGrid";
import HarborTeaser from "@/components/guest/HarborTeaser";

export const metadata = {
  title: "HVRBOR.CLUB / The Crew",
  description:
    "Founders, operators, creatives, the occasional doctor, the occasional musician. Health-and-wealth-conscious operators with vast networks. The Crew curates itself.",
};

export default function CrewPage() {
  return (
    <main>
      <GuestNav />

      <section className="bg-paper px-5 py-20 pt-[140px] text-ink md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / The Crew"
          title={
            <>
              Who you find
              <br />
              in the room.
            </>
          }
        />
        <p className="max-w-[760px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
          The community pillar. The Crew is health-and-wealth-conscious young
          operators with vast networks — founders, builders, wellness
          practitioners, creative leadership. The room composes itself.
        </p>
      </section>

      <section className="bg-paper px-5 pb-20 text-ink md:px-10 md:pb-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              01 / The Crew Is
            </div>
            <h2 className="font-display text-[clamp(40px,6vw,88px)] uppercase leading-[0.9] tracking-[-0.02em]">
              Founders.
              <br />
              Operators.
              <br />
              The room
              <br />
              you'd want<span className="text-cyan">.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 pt-2 md:pt-8">
            <p className="text-[18px] leading-relaxed">
              Founders, senior operators, builders, wellness practitioners,
              creative leadership, the occasional doctor, the occasional
              musician. Health-aware. Wealth-aware. Network-rich. People who
              have earned the room and want to share it.
            </p>
            <p className="text-[18px] leading-relaxed">
              The Crew curates for variance, not similarity. The room is more
              useful when it isn't one type. The standup at 4:20 PM in
              ankle-deep water is the proof — ninety seconds each, no pitches,
              no decks. The introductions happen on their own.
            </p>
            <p className="font-sub text-[24px] leading-snug tracking-wide">
              Anyone who sails carries the Mark. The Mark logs the year.
            </p>
          </div>
        </div>
      </section>

      <CrewComposition />
      <BringACrew />
      <FoundingCrewBlock />
      <CrewStoriesGrid />
      <HarborTeaser />
      <GuestFooter />
    </main>
  );
}

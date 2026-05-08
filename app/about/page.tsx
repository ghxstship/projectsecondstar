import Link from "next/link";
import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "HVRBOR.CLUB / About",
  description:
    "A GHXSTSHIP brand. The thesis behind the membership, the operating team behind the flotilla, and the case for a Miami Saturday with a producer credit.",
};

export default function AboutPage() {
  return (
    <main>
      <GuestNav />

      <section className="bg-paper px-5 py-20 pt-[140px] text-ink md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / About"
          title={
            <>
              The plot
              <br />
              behind the boat.
            </>
          }
        />
        <p className="max-w-[760px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
          A year-round membership built on a Miami flotilla. Built by a
          production company that has spent thirteen years running rooms.
        </p>
      </section>

      <section className="bg-paper px-5 pb-20 text-ink md:px-10 md:pb-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              01 / Origin
            </div>
            <h2 className="font-display text-[clamp(40px,6vw,88px)] uppercase leading-[0.9] tracking-[-0.02em]">
              Why we run
              <br />
              the room<span className="text-cyan">.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[18px] leading-relaxed">
              Miami has more charters than any coastline in America. It also
              has the longevity capital of the United States, the densest
              founder economy outside of San Francisco, and the cultural
              calendar of a city three times its size. What it didn't have was
              someone running the room around all of it.
            </p>
            <p className="text-[18px] leading-relaxed">
              HVRBOR.CLUB started as a flotilla. Eight Saturdays a year on
              Biscayne Bay, twelve seats, designed dock to dock. SEAson 1
              premieres June 20, 2026. Episode 01 is The Origin.
            </p>
            <p className="text-[18px] leading-relaxed">
              The membership came next. The Crew earned its way on by sailing.
              Captain locked an annual seat with the Network and the Harbor
              concierge behind it. Commodore became the invitation-only tier
              for the fifty-numbered black-card class. The card became the
              point.
            </p>
            <p className="font-sub text-[24px] leading-snug tracking-wide">
              The Saturdays are the proof. The membership is the product.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
              02 / Parent
            </div>
            <h2 className="font-display text-[clamp(40px,6vw,88px)] uppercase leading-[0.9] tracking-[-0.02em]">
              A GHXSTSHIP
              <br />
              brand<span className="text-cyan">.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[17px] leading-relaxed text-[#C5C5C0]">
              HVRBOR.CLUB is a brand of GHXSTSHIP Industries — a production
              and technology company with thirteen-plus years of operations
              across fifty-two countries. Live-event credentials span Formula
              1, EDC, Ultra, PATRÓN, Red Bull, and Heineken. The Sports and
              Entertainment verticals of the HVRBOR Network draw on those
              relationships directly.
            </p>
            <p className="text-[17px] leading-relaxed text-[#C5C5C0]">
              That parentage is the structural moat. No Miami members club can
              deliver paddock-tier F1 access, World Cup hospitality, or
              Olympic-network packaging from the membership card alone.
              HVRBOR can — because GHXSTSHIP already operates at the
              rights-holder layer.
            </p>
            <Link
              href="/deck"
              className="inline-flex items-center gap-2 self-start border-[3px] border-cyan bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-cyan no-underline hover:bg-cyan hover:text-ink transition-all"
            >
              Read the investor memo <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              03 / Method
            </div>
            <h2 className="font-display text-[clamp(40px,6vw,88px)] uppercase leading-[0.9] tracking-[-0.02em]">
              Designed,
              <br />
              not staged<span className="text-cyan">.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[18px] leading-relaxed">
              Every Episode is choreographed against five sensory layers:
              Light, Score, Contact, Provisions, Trace. Guests never see the
              architecture, but they feel it. The Signature Moment of every
              Episode touches three of the five at once. The Sailaway Ceremony
              touches all five.
            </p>
            <p className="text-[18px] leading-relaxed">
              Off the water, the Network and the Harbor follow the same
              method. Each partnership is approved against a quality bar
              before it ships. The principle: a membership is only as good as
              the room you walk into. We want the rooms to stay good.
            </p>
            <p className="font-sub text-[24px] leading-snug tracking-wide">
              We don't sell tickets. We run the room.
            </p>
          </div>
        </div>
      </section>

      <GuestFooter />
    </main>
  );
}

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
              Miami has more charters than any coastline in America. It is the
              longevity capital of the United States, the densest founder
              economy outside of San Francisco, and the cultural calendar of a
              city three times its size. It did not have a room around all of
              that. We built one.
            </p>
            <p className="text-[18px] leading-relaxed">
              HVRBOR.CLUB started as a flotilla. Eight Saturdays a year on
              Biscayne Bay. Twelve seats per Episode. The first Saturday is
              June 20, 2026. The first Episode is The Origin. The Crew that
              sails it carries that designation forward.
            </p>
            <p className="text-[18px] leading-relaxed">
              The membership followed. Crew is earned. Captain is the annual
              tier with the Network and the Harbor behind it. Commodore is
              fifty numbered seats. The card is the point. The Saturdays are
              the proof.
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
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              03 / The Crew
            </div>
            <h2 className="font-display text-[clamp(40px,6vw,88px)] uppercase leading-[0.9] tracking-[-0.02em]">
              Who this
              <br />
              is for<span className="text-cyan">.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[18px] leading-relaxed">
              The Crew is health-and-wealth-conscious young operators with
              vast networks. Founders, senior operators, builders, wellness
              practitioners, creative leadership. People in their thirties and
              forties who think in basis points and breathwork in the same
              breath. Quiet luxury, not loud. Earned, not inherited.
            </p>
            <p className="text-[18px] leading-relaxed">
              They are connectors. They bring the next ten people. The
              membership is built around that — Crew sponsors Crew, Captain
              sponsors Crew at the founding rate, Commodore extends
              invitations. The room composes itself.
            </p>
            <p className="font-sub text-[24px] leading-snug tracking-wide">
              If you recognize yourself, you're already most of the way in.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]">
        <div className="mb-10">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
            04 / Behind the Harbor
          </div>
          <h2 className="font-display text-[clamp(40px,5vw,72px)] uppercase leading-[0.95] tracking-[-0.01em]">
            The team.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["Founder", "Director of Production", "Director of Network"].map(
            (role) => (
              <div
                key={role}
                className="flex min-h-[280px] flex-col justify-between gap-4 border-[3px] border-paper p-8"
              >
                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
                    {role}
                  </div>
                  <h3 className="font-display text-[28px] uppercase leading-[0.95] tracking-[-0.01em]">
                    Bio TBD<span className="text-cyan">.</span>
                  </h3>
                </div>
                <p className="text-[14px] leading-relaxed text-[#C5C5C0]">
                  Named bios ship with the SEAson 1 press kit in May 2026.
                  Press inquiries can request advance copy now.
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              05 / Method
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

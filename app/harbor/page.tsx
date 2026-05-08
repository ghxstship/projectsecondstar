import Link from "next/link";
import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import NewsletterSignup from "@/components/guest/NewsletterSignup";

export const metadata = {
  title: "HVRBOR.CLUB / The Harbor",
  description:
    "The membership operating system. Concierge, the Mark, the Log, the Crew Directory, the Mark Wallet. Opening alongside SEAson 2.",
};

const surfaces = [
  {
    num: "/ 01",
    name: "The Concierge",
    detail:
      "Text-first. Real human plus AI hybrid. Reservations, tickets, recommendations, recoveries. Captain access.",
  },
  {
    num: "/ 02",
    name: "The Mark Wallet",
    detail:
      "House-account credit balance. Episodes, Dockside Salons, Recovery Series, partnered restaurants — all draw from one balance.",
  },
  {
    num: "/ 03",
    name: "The Log",
    detail:
      "Your personal record plus the public archive. Past Episodes, Crew Stories, Network Moments — filed in one place.",
  },
  {
    num: "/ 04",
    name: "The Crew Directory",
    detail:
      "Opt-in member roster. Captain-level. Lives behind the wall. The Crew names the Crew.",
  },
  {
    num: "/ 05",
    name: "Network Booking",
    detail:
      "One-tap reservations across the seven verticals. Members rate at Crew. Priority at Captain. Curated at Commodore.",
  },
];

export default function HarborPage() {
  return (
    <main>
      <GuestNav />

      <section className="bg-ink px-5 py-20 pt-[140px] text-paper md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / The Harbor"
          title={
            <>
              The system
              <br />
              the membership
              <br />
              runs on.
            </>
          }
          light
        />
        <p className="max-w-[760px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide text-paper">
          Of course it is text-first. Of course there is a number on the back
          of your card. Opening alongside SEAson 2.
        </p>
      </section>

      <section className="bg-ink px-5 pb-20 text-paper md:px-10 md:pb-[120px]">
        <div className="border-[3px] border-paper p-10 md:p-14">
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
            Status / SEAson 2 build
          </div>
          <h2 className="font-display text-[clamp(40px,7vw,96px)] uppercase leading-[0.9] tracking-[-0.02em]">
            The Harbor opens
            <br />
            after the Finale<span className="text-cyan">.</span>
          </h2>
          <p className="mt-6 max-w-[640px] text-[16px] leading-relaxed text-[#C5C5C0]">
            SEAson 1 is a flotilla — the Saturdays, the Episodes, the first
            ninety-six seats. SEAson 2 is when the Harbor opens. Captain
            members carry their access forward. The Crew Directory turns on.
            The Mark Wallet starts holding credit. The concierge picks up the
            phone.
          </p>
          <p className="mt-4 max-w-[640px] text-[16px] leading-relaxed text-[#C5C5C0]">
            Until then, this page is the spec. Everything below is what's
            being built.
          </p>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]">
        <div className="mb-10">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
            01 / Surfaces
          </div>
          <h2 className="font-display text-[clamp(40px,5vw,72px)] uppercase leading-[0.95] tracking-[-0.01em]">
            What ships.
          </h2>
        </div>

        <div className="grid grid-cols-1 border-[3px] border-ink md:grid-cols-2">
          {surfaces.map((s, idx) => (
            <div
              key={s.num}
              className={`flex flex-col gap-4 border-[1.5px] border-ink p-8 md:p-10 ${
                idx === surfaces.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
                {s.num}
              </div>
              <h3 className="font-display text-[36px] uppercase leading-[0.95] tracking-[-0.01em]">
                {s.name}
              </h3>
              <p className="text-[15px] leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper px-5 pb-20 text-ink md:px-10 md:pb-[120px]">
        <div className="border-hard p-8 md:p-12">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
            02 / In the meantime
          </div>
          <h3 className="font-display text-[clamp(32px,4vw,56px)] uppercase leading-[0.95] tracking-[-0.01em]">
            The Saturdays start now.
          </h3>
          <p className="mt-6 max-w-[640px] text-[16px] leading-relaxed">
            SEAson 1 is on. Episode 01 — The Origin — sails June 20, 2026.
            Crew earned by sailing one Episode. Captain casting opens at
            Basel '26. The Harbor follows.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/episodes"
              className="border-hard bg-ink px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft transition-all"
            >
              See SEAson 1
            </Link>
            <Link
              href="/apply"
              className="border-hard bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline hover:bg-ink hover:text-paper transition-all"
            >
              Apply for Captain
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <GuestFooter />
    </main>
  );
}

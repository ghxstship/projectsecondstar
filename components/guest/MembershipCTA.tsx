import Link from "next/link";

export default function MembershipCTA() {
  return (
    <section
      id="apply"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[160px]"
    >
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <h2 className="font-display text-[clamp(72px,12vw,200px)] uppercase leading-[0.85] tracking-[-0.02em]">
            Membership
            <br />
            opens at
            <br />
            Basel<span className="text-cyan">.</span>
          </h2>
          <p className="mt-8 font-sub text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-cyan">
            Captain casting now. Commodore by invitation.
          </p>
        </div>

        <div className="flex flex-col gap-8 pt-4 md:pt-10">
          <p className="text-[18px] leading-relaxed text-[#C5C5C0]">
            SEAson 1 has eight Episodes and seven networks. Captain at the
            founding rate locks the seat across both for the year — all eight
            Episodes inclusive, priority access across the Network, the Harbor
            concierge, the Mark.
          </p>
          <div className="flex flex-col items-start gap-3">
            <Link
              href="/apply"
              className="inline-flex w-full items-center justify-center border-[3px] border-cyan bg-cyan px-10 py-7 font-display text-[clamp(32px,4vw,56px)] uppercase leading-none tracking-[-0.01em] text-ink no-underline transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-xl-cyan md:w-auto"
            >
              Apply for Captain →
            </Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Standby positions held until casting opens at Art Basel, December
              2026.
            </p>
          </div>
          <Link
            href="/membership"
            className="font-mono text-[12px] uppercase tracking-[0.2em] text-cyan no-underline hover:text-paper"
          >
            Read the membership memo →
          </Link>
        </div>
      </div>
    </section>
  );
}

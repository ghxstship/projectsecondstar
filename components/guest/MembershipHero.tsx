import Link from "next/link";
import { BOOKING_URL } from "@/lib/config";

const meta = [
  { label: "Membership", value: "SEAson 1 Open" },
  { label: "Network", value: "7 Verticals" },
  { label: "Port", value: "Miami Beach Marina" },
  { label: "Next Episode", value: "June 20, 2026" },
  { label: "The Harbor", value: "Members-Only" },
];

export default function MembershipHero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-[120px] md:px-10 md:pt-[140px] grid grid-cols-1 gap-10">
      <div className="grid grid-cols-2 gap-5 border-b border-line pb-5 md:grid-cols-5">
        {meta.map((m) => (
          <div key={m.label} className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              {m.label}
            </span>
            <span className="font-sub text-[20px] tracking-wide">{m.value}</span>
          </div>
        ))}
      </div>

      <h1 className="font-display uppercase text-[clamp(64px,12vw,200px)] leading-[0.85] tracking-[-0.02em] mt-5 relative">
        Saturdays
        <br />
        are for
        <br />
        the sea<span className="text-cyan">.</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 border-t-[3px] border-ink pt-10">
        <div>
          <p className="max-w-[600px] text-[17px] leading-relaxed">
            <span className="font-sub text-[clamp(28px,3.5vw,48px)] leading-[0.95] tracking-wide block mb-6">
              Eight Saturdays.
              <br />
              Seven networks.
              <br />
              One Harbor.
            </span>
            A year-round membership built on a Miami flotilla. Eight Saturdays
            at sea, seven networks on land — and the Harbor that holds them
            together. The Crew is being cast for SEAson 1. Captain casting
            opens at Basel.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/apply"
              className="border-hard bg-ink px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft transition-all"
            >
              Apply for Captain
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-hard bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline hover:bg-ink hover:text-paper transition-all"
            >
              Claim a Seat
            </a>
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Captain casting opens at Art Basel, December 2026.
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-8 right-10 hidden md:flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="h-10 w-px bg-muted animate-pulse-line" />
        Keep going.
      </div>
    </section>
  );
}

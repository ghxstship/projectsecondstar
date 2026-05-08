import { BOOKING_URL } from "@/lib/config";

const meta = [
  { label: "Casting", value: "SEAson 1" },
  { label: "Premiere", value: "June 20, 2026" },
  { label: "Port", value: "Miami Beach Marina" },
  { label: "Episodes", value: "8 Biweekly Saturdays" },
  { label: "Seats", value: "12 per Episode" },
];

export default function EpisodesHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-[120px] md:px-10 md:pt-[140px] grid grid-cols-1 gap-10">
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

      <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr]">
        <h1 className="font-display uppercase text-[clamp(56px,10vw,160px)] leading-[0.85] tracking-[-0.02em]">
          Eight Saturdays.
          <br />
          One horizon<span className="text-cyan">.</span>
        </h1>

        <div className="flex flex-col gap-6 pt-2 md:pt-8">
          <p className="text-[17px] leading-relaxed">
            The flotilla product. A SEAson of twelve-seat vessels running one
            designed day across Biscayne Bay — Miami Beach Marina out, Haulover
            Sandbar in the middle, Stiltsville on the way back. Eight Episodes,
            biweekly, June through October. Each one a destination of its own.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-hard bg-ink px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft transition-all"
            >
              Claim a Seat
            </a>
            <a
              href="#calendar"
              className="border-hard bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline hover:bg-ink hover:text-paper transition-all"
            >
              See the Calendar
            </a>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            12 seats per Episode. SEAson 1 premieres June 20.
          </p>
        </div>
      </div>
    </section>
  );
}

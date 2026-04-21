import { BOOKING_URL } from "@/lib/config";

const meta = [
  { label: "Casting", value: "SEAson 1" },
  { label: "Premiere", value: "June 20, 2026" },
  { label: "Port", value: "Miami Beach Marina" },
  { label: "Episodes", value: "8 Biweekly Saturdays" },
  { label: "Seats", value: "12 per Episode" },
];

export default function GuestHero() {
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
          <p className="max-w-[560px] text-[17px] leading-relaxed">
            A Flotilla of 12-seat vessels running one designed day across
            Biscayne Bay. Miami Beach Marina out, Haulover Sandbar in the
            middle, Stiltsville on the way back. Wellness in the morning.
            Music in the afternoon. The right Crew the whole way through.
            Not a charter. Not a cruise. A Saturday somebody actually thought
            about — and one chapter of a story we're writing together.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-hard bg-ink px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft transition-all"
            >
              Claim a Seat
            </a>
            <a
              href="#day"
              className="border-hard bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline hover:bg-ink hover:text-paper transition-all"
            >
              See the Day
            </a>
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            12 seats per Episode. SEAson 1 premieres June 20.
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

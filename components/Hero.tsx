export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-[120px] md:px-10 md:pt-[140px] grid grid-cols-1 gap-10">
      {/* Meta row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 border-b border-line pb-5">
        {[
          { label: "Status", value: "Pre-Launch" },
          { label: "Launch Window", value: "June 2026" },
          { label: "Home Port", value: "Miami Beach, FL" },
          { label: "Parent Brand", value: "GHXSTSHIP" },
        ].map((m) => (
          <div key={m.label} className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              {m.label}
            </span>
            <span className="font-sub text-[20px] tracking-wide">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Title */}
      <h1 className="font-display uppercase text-[clamp(80px,18vw,280px)] leading-[0.85] tracking-[-0.02em] mt-5 relative">
        HVRBOR<span className="text-cyan">.</span>
      </h1>

      {/* Sub row */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 border-t-[3px] border-ink pt-10">
        <div>
          <div className="font-sub text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-wide">
            Miami's flotilla,
            <br />
            one day at a time.
          </div>
        </div>
        <div>
          <p className="max-w-[500px] text-[17px] leading-relaxed">
            A new kind of day experience built on the water. Curated flotillas
            of design-forward vessels running a single sunrise-to-sunset program
            across Biscayne Bay — anchored in{" "}
            <strong className="bg-cyan px-1 font-medium">wellness</strong>,{" "}
            <strong className="bg-cyan px-1 font-medium">community</strong>,{" "}
            <strong className="bg-cyan px-1 font-medium">soft-club culture</strong>,
            and the{" "}
            <strong className="bg-cyan px-1 font-medium">founder's economy</strong>.
            Yacht Week's format, distilled into a Saturday, engineered for Miami.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#audience"
              className="border-hard bg-ink px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft transition-all"
            >
              Investor Deck
            </a>
            <a
              href="#day"
              className="border-hard bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline hover:bg-ink hover:text-paper transition-all"
            >
              See the Day
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-10 hidden md:flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="h-10 w-px bg-muted animate-pulse-line" />
        Scroll / Deploy Fleet
      </div>
    </section>
  );
}

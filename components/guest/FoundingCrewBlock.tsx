import { foundingCrewLines } from "@/lib/crew";

export default function FoundingCrewBlock() {
  return (
    <section
      id="founding-crew"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <div className="mb-6 font-mono text-[12px] uppercase tracking-[0.3em] text-cyan">
            04 / The Founding Crew
          </div>
          <h2 className="font-display text-[clamp(56px,9vw,140px)] uppercase leading-[0.85] tracking-[-0.02em]">
            Lower numbers.
            <br />
            Earlier Crew<span className="text-cyan">.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-6 pt-2 md:pt-8">
          <ul className="flex flex-col gap-4 border-l-2 border-cyan pl-6">
            {foundingCrewLines.map((line, idx) => (
              <li
                key={idx}
                className="font-sub text-[20px] leading-snug tracking-wide text-paper"
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            The Origin sails June 20, 2026. Standby is honored in order.
          </p>
        </div>
      </div>
    </section>
  );
}

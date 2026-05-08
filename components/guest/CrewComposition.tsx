import SectionHeader from "../SectionHeader";
import { crewSnapshot } from "@/lib/crew";

export default function CrewComposition() {
  return (
    <section
      id="composition"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="02 / The Composition"
        title={
          <>
            The room,
            <br />
            described.
          </>
        }
        light
      />

      <p className="mb-10 max-w-[720px] font-sub text-[24px] leading-tight tracking-wide text-paper md:text-[28px]">
        {crewSnapshot.seasonLabel} / {crewSnapshot.totalSeats} seats /{" "}
        {crewSnapshot.episodes} Episodes. Anonymized snapshot, refreshed each
        SEAson.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col border-[3px] border-paper">
          {crewSnapshot.segments.map((s, idx) => (
            <div
              key={s.label}
              className={`grid grid-cols-[80px_1fr] gap-6 p-6 md:grid-cols-[120px_1fr] md:p-8 ${
                idx < crewSnapshot.segments.length - 1
                  ? "border-b-[1.5px] border-paper"
                  : ""
              }`}
            >
              <div>
                <div className="font-display text-[40px] leading-none text-cyan">
                  {s.share}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {s.label}
                </div>
              </div>
              <p className="text-[14px] leading-relaxed text-[#C5C5C0]">
                {s.examples}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <div className="border-[3px] border-paper p-6 md:p-8">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
              Group Composition
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-display text-[44px] leading-none">
                  {crewSnapshot.soloShare}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Solo seat buyers
                </div>
              </div>
              <div>
                <div className="font-display text-[44px] leading-none">
                  {crewSnapshot.groupShare}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Groups of 2–4
                </div>
              </div>
            </div>
          </div>

          <div className="border-[3px] border-paper p-6 md:p-8">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
              Geography
            </div>
            <ul className="flex flex-wrap gap-2">
              {crewSnapshot.geography.map((g) => (
                <li
                  key={g}
                  className="border border-paper px-3 py-1.5 font-sub text-[14px] tracking-wide"
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-[3px] border-paper p-6 md:p-8">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
              Age Band
            </div>
            <div className="font-display text-[44px] leading-none">
              {crewSnapshot.ageBand}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

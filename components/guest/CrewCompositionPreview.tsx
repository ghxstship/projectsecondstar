import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { crewSnapshot } from "@/lib/crew";

export default function CrewCompositionPreview() {
  return (
    <section
      id="crew-preview"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="06 / The Crew"
        title={
          <>
            Who you find
            <br />
            in the room.
          </>
        }
      />

      <p className="mb-10 max-w-[760px] font-sub text-[24px] leading-tight tracking-wide md:text-[28px]">
        Health-and-wealth-conscious young operators with vast networks. The
        Crew curates itself — Crew brings Crew, Captain sponsors Crew,
        Commodore extends invitations.
      </p>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.5fr_1fr]">
        <div className="border-[3px] border-ink">
          {crewSnapshot.segments.map((s, idx) => (
            <div
              key={s.label}
              className={`grid grid-cols-[80px_1fr] gap-6 p-5 md:grid-cols-[120px_1fr] md:p-6 ${
                idx < crewSnapshot.segments.length - 1
                  ? "border-b-[1.5px] border-ink"
                  : ""
              }`}
            >
              <div>
                <div className="font-display text-[32px] leading-none text-cyan-deep">
                  {s.share}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {s.label}
                </div>
              </div>
              <p className="text-[13px] leading-relaxed">{s.examples}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="border-[3px] border-ink p-5 md:p-6">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-deep">
              {crewSnapshot.seasonLabel} / {crewSnapshot.totalSeats} Seats
            </div>
            <p className="font-sub text-[18px] leading-snug tracking-wide">
              {crewSnapshot.soloShare} solo / {crewSnapshot.groupShare} groups
              of 2–4
            </p>
          </div>
          <div className="border-[3px] border-ink p-5 md:p-6">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-deep">
              Geography
            </div>
            <ul className="flex flex-wrap gap-2">
              {crewSnapshot.geography.map((g) => (
                <li
                  key={g}
                  className="border border-ink px-2 py-1 font-sub text-[13px] tracking-wide"
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/crew"
            className="inline-flex items-center gap-2 border-hard bg-transparent px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline hover:bg-ink hover:text-paper transition-all"
          >
            Meet the full Crew <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

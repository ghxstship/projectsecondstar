import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { networkMoments, type NetworkMoment } from "@/lib/moments";

const tierStyles: Record<NetworkMoment["tier"], string> = {
  "All Members": "border-paper text-paper",
  "Captain+": "border-cyan text-cyan",
  "Commodore-only": "border-cyan bg-cyan text-ink",
};

const statusStyles: Record<NetworkMoment["status"], string> = {
  Open: "text-paper",
  Announced: "text-muted",
  "Pre-allocation": "text-cyan",
};

type Props = {
  limit?: number;
  showHeader?: boolean;
};

export default function NetworkMomentsGrid({
  limit,
  showHeader = true,
}: Props) {
  const moments = limit ? networkMoments.slice(0, limit) : networkMoments;

  return (
    <section
      id="moments"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      {showHeader && (
        <SectionHeader
          num="02 / Featured Moments"
          title={
            <>
              The calendar
              <br />
              behind the card.
            </>
          }
          light
        />
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {moments.map((m) => (
          <article
            key={m.id}
            className="flex flex-col gap-5 border-[3px] border-paper p-8 transition-colors hover:bg-fog"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                {m.verticalLabel}
              </span>
              <span
                className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${tierStyles[m.tier]}`}
              >
                {m.tier}
              </span>
            </div>
            <h3 className="font-display text-[32px] uppercase leading-[0.95] tracking-[-0.01em]">
              {m.title}
            </h3>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-sub text-[20px] tracking-wide text-paper">
                {m.window}
              </span>
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.2em] ${statusStyles[m.status]}`}
              >
                {m.status}
              </span>
            </div>
            <p className="mt-auto text-[14px] leading-relaxed text-[#C5C5C0]">
              {m.description}
            </p>
            <Link
              href={`/network/${m.vertical}`}
              className="border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-paper transition-colors hover:text-cyan"
            >
              See the {m.verticalLabel} network →
            </Link>
          </article>
        ))}
      </div>

      {limit && (
        <div className="mt-12">
          <Link
            href="/network"
            className="inline-flex items-center gap-2 border-[3px] border-paper bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-paper hover:text-ink transition-all"
          >
            Read the full Network <span aria-hidden>→</span>
          </Link>
        </div>
      )}
    </section>
  );
}

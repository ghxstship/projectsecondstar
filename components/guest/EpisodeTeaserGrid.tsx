import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { guestEpisodes, type EpisodeStatusType } from "@/lib/content";
import { BOOKING_URL } from "@/lib/config";

const statusBadgeClasses: Record<EpisodeStatusType, string> = {
  standby: "border-cyan text-cyan",
  critical: "border-cyan bg-cyan text-ink",
  limited: "border-ink text-ink",
  available: "border-muted text-muted",
};

type Props = {
  limit?: number;
};

export default function EpisodeTeaserGrid({ limit = 3 }: Props) {
  const episodes = guestEpisodes.slice(0, limit);

  return (
    <section
      id="episodes-teaser"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="03 / Next Episodes"
        title={
          <>
            The flotilla,
            <br />
            on schedule.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {episodes.map((e) => (
          <article
            key={e.id}
            className="flex flex-col gap-5 border-[3px] border-ink p-8 transition-colors hover:bg-ink hover:text-paper"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                SEAson 1 / {e.episodeLabel}
              </span>
              <span
                className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${statusBadgeClasses[e.statusType]}`}
              >
                {e.status}
              </span>
            </div>
            <h3 className="font-display text-[36px] uppercase leading-[0.95] tracking-[-0.01em]">
              {e.destination}
            </h3>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-3">
              <span className="font-sub text-[20px] tracking-wide">
                {e.date} / {e.day}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Itinerary {e.itinerary}
              </span>
            </div>
            <p className="text-[14px] leading-relaxed">{e.tagline}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/episodes"
          className="border-hard bg-ink px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft transition-all"
        >
          See all eight Episodes →
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
    </section>
  );
}

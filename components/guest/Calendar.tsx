"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader";
import { guestEpisodes, type EpisodeStatusType } from "@/lib/content";
import { BOOKING_URL } from "@/lib/config";

const statusBadgeClasses: Record<EpisodeStatusType, string> = {
  standby: "border-cyan text-cyan",
  critical: "border-cyan bg-cyan text-ink animate-pulse-line",
  limited: "border-paper text-paper",
  available: "border-muted text-muted",
};

const ctaClasses: Record<EpisodeStatusType, string> = {
  standby:
    "border-cyan bg-transparent text-cyan hover:bg-cyan hover:text-ink",
  critical:
    "border-cyan bg-cyan text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-cyan",
  limited:
    "border-paper bg-paper text-ink hover:bg-cyan hover:border-cyan",
  available:
    "border-paper bg-transparent text-paper hover:bg-paper hover:text-ink",
};

export default function Calendar() {
  const [openIdx, setOpenIdx] = useState<number>(-1);

  return (
    <section
      id="calendar"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="04 / Calendar"
        title={
          <>
            Pick an
            <br />
            Episode.
          </>
        }
        light
      />

      <p className="mb-10 max-w-[720px] font-sub text-[24px] leading-tight tracking-wide text-paper md:text-[28px]">
        SEAson 1 / Eight Episodes, every other Saturday, June through October.
        Standby lists fill early.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guestEpisodes.map((e, i) => {
          const isOpen = openIdx === i;
          const ctaLabel = e.statusType === "standby" ? "Join Standby" : "Book";
          return (
            <article
              key={e.id}
              className="flex flex-col gap-6 border-[3px] border-paper p-8 transition-colors hover:bg-fog"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                  SEAson 1 / {e.episodeLabel}
                </span>
                <span
                  className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${statusBadgeClasses[e.statusType]}`}
                >
                  {e.status}
                </span>
              </div>

              <div>
                <h3 className="font-display text-[44px] uppercase leading-[0.9] tracking-[-0.01em]">
                  {e.destination}
                </h3>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-sub text-[22px] tracking-wide text-paper">
                    {e.date} / {e.day}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Itinerary {e.itinerary} / {e.itineraryLabel}
                  </span>
                </div>
              </div>

              <p className="text-[14px] leading-relaxed text-[#C5C5C0]">
                {e.tagline}
              </p>

              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                className="flex items-center justify-between border-t border-line pt-4 text-left font-mono text-[11px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-cyan"
                aria-expanded={isOpen}
              >
                <span>{isOpen ? "Hide details" : "Show details"}</span>
                <span
                  className={`flex h-6 w-6 items-center justify-center border border-current font-mono text-sm transition-transform ${
                    isOpen ? "rotate-45 border-cyan text-cyan" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="flex flex-col gap-4 border-t border-line pt-4 animate-fade-in">
                  <p className="text-[14px] leading-relaxed text-[#C5C5C0]">
                    {e.description}
                  </p>
                  <div>
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
                      Signature Moment
                    </div>
                    <p className="font-sub text-[18px] leading-snug tracking-wide">
                      {e.signatureMoment}
                    </p>
                  </div>
                </div>
              )}

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex items-center justify-center border-[3px] px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] no-underline transition-all ${ctaClasses[e.statusType]}`}
              >
                {ctaLabel}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

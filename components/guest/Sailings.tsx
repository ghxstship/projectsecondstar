import SectionHeader from "../SectionHeader";
import { guestSailings } from "@/lib/content";
import { BOOKING_URL } from "@/lib/config";

export default function Sailings() {
  return (
    <section
      id="sailings"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="04 / Upcoming"
        title={
          <>
            Pick your
            <br />
            Saturday.
          </>
        }
        light
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guestSailings.map((s) => {
          const isWaitlist = s.status === "waitlist";
          const ctaLabel = isWaitlist ? "Join Waitlist" : "Book";
          return (
            <div
              key={s.date}
              className="flex flex-col justify-between gap-8 border-[3px] border-paper p-8 transition-colors hover:bg-fog"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                    {s.date}
                  </span>
                  <span
                    className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
                      isWaitlist
                        ? "border-cyan text-cyan"
                        : "border-paper text-paper"
                    }`}
                  >
                    {s.seatsLabel}
                  </span>
                </div>
                <h3 className="mb-4 font-display text-[40px] uppercase leading-[0.95] tracking-[-0.01em]">
                  {s.theme}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#C5C5C0]">
                  {s.tagline}
                </p>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center border-[3px] px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] no-underline transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-cyan ${
                  isWaitlist
                    ? "border-cyan bg-transparent text-cyan hover:bg-cyan hover:text-ink"
                    : "border-paper bg-paper text-ink hover:bg-cyan hover:border-cyan"
                }`}
              >
                {ctaLabel}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

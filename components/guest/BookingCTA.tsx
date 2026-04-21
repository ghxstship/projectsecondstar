import { BOOKING_URL } from "@/lib/config";

export default function BookingCTA() {
  return (
    <section
      id="book"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[160px]"
    >
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <h2 className="font-display text-[clamp(72px,12vw,200px)] uppercase leading-[0.85] tracking-[-0.02em]">
            Get on
            <br />
            board<span className="text-cyan">.</span>
          </h2>
          <p className="mt-8 font-sub text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-cyan">
            Saturdays don't wait.
          </p>
        </div>

        <div className="flex flex-col gap-8 pt-4 md:pt-10">
          <p className="text-[18px] leading-relaxed text-[#C5C5C0]">
            SEAson 1 has eight Episodes. Twelve seats each. The Origin is
            already on standby. Book your Saturday, invite your people,
            pack less than you think you need. See you at the marina.
          </p>
          <div className="flex flex-col items-start gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center border-[3px] border-cyan bg-cyan px-10 py-7 font-display text-[clamp(32px,4vw,56px)] uppercase leading-none tracking-[-0.01em] text-ink no-underline transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-xl-cyan md:w-auto"
            >
              Claim a Seat →
            </a>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Booking secured. Confirmation in your inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionHeader from "../SectionHeader";
import { guestIncluded } from "@/lib/content";

export default function Included() {
  return (
    <section
      id="included"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="03 / In The Seat"
        title={
          <>
            The full
            <br />
            eight hours.
          </>
        }
      />

      <p className="mb-10 max-w-[640px] font-sub text-[24px] leading-tight tracking-wide md:text-[28px]">
        Everything below is in the seat. No upcharges at the bar. No surprises
        at the dock.
      </p>

      <div className="border-hard">
        {guestIncluded.map((item) => (
          <div
            key={item.num}
            className="grid grid-cols-[60px_1fr] items-center gap-4 border-b-[1.5px] border-ink p-5 last:border-b-0 md:grid-cols-[120px_1fr_auto] md:gap-10 md:p-8"
          >
            <div className="font-display text-[40px] md:text-[64px] leading-none text-cyan-deep">
              {item.num}
            </div>
            <div className="font-sub text-[24px] md:text-[36px] leading-none tracking-wide">
              {item.name}
            </div>
            <div className="hidden text-right font-mono text-[13px] uppercase tracking-[0.2em] text-muted md:block">
              {item.detail}
            </div>
            <div className="col-span-2 md:hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {item.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

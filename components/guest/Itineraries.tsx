import SectionHeader from "../SectionHeader";
import { itineraries } from "@/lib/content";

export default function Itineraries() {
  const list: ("A" | "B")[] = ["A", "B"];

  return (
    <section
      id="itineraries"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="04 / The Itineraries"
        title={
          <>
            Two shapes.
            <br />
            One day.
          </>
        }
      />

      <p className="mb-10 max-w-[640px] font-sub text-[24px] leading-tight tracking-wide md:text-[28px]">
        Every Episode runs Itinerary A or B. The difference is hours on yacht
        and where the Signature Moment lands.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {list.map((id) => {
          const it = itineraries[id];
          return (
            <div key={id} className="border-hard p-8 md:p-10">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-deep">
                {it.label}
              </div>
              <h3 className="mb-4 font-display text-[44px] uppercase leading-[0.95] tracking-[-0.01em]">
                {it.duration}
              </h3>
              <p className="mb-8 text-[15px] leading-relaxed">
                {it.description}
              </p>
              <div className="border-t border-line">
                {it.slots.map((slot, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-[88px_1fr] items-baseline gap-4 border-b border-line py-3 last:border-b-0"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      {slot.time}
                    </span>
                    <span className="font-sub text-[18px] tracking-wide">
                      {slot.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

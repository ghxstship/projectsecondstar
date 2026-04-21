import SectionHeader from "./SectionHeader";
import { pillars } from "@/lib/content";

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="02 / Cultural Layer"
        title={
          <>
            Four Miami
            <br />
            Currents.
          </>
        }
        light
      />

      <div className="grid grid-cols-1 border-[3px] border-paper md:grid-cols-2">
        {pillars.map((p) => (
          <div
            key={p.num}
            className="group flex min-h-[400px] cursor-pointer flex-col justify-between border-[1.5px] border-paper p-10 px-10 py-12 transition-colors hover:bg-fog"
          >
            <div>
              <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                {p.num}
              </div>
              <h3 className="mb-6 font-display text-[56px] uppercase leading-[0.95] tracking-[-0.01em]">
                {p.title}
                {p.titleTwo && (
                  <>
                    <br />
                    {p.titleTwo}
                  </>
                )}
              </h3>
              <p className="mb-8 text-[15px] leading-relaxed text-[#C5C5C0]">
                {p.desc}
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
                HVRBOR Integration
              </div>
              <div className="font-sub text-[18px] leading-snug tracking-wide text-paper">
                {p.integration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

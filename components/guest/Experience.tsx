import SectionHeader from "../SectionHeader";
import { guestPillars } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="02 / What Happens"
        title={
          <>
            Four currents.
            <br />
            One day.
          </>
        }
      />

      <div className="grid grid-cols-1 border-[3px] border-ink md:grid-cols-2">
        {guestPillars.map((p) => (
          <div
            key={p.num}
            className="group flex min-h-[360px] cursor-default flex-col justify-between border-[1.5px] border-ink p-10 px-10 py-12 transition-colors hover:bg-ink hover:text-paper"
          >
            <div>
              <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep group-hover:text-cyan">
                {p.num}
              </div>
              <h3 className="mb-6 font-display text-[56px] uppercase leading-[0.95] tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="text-[16px] leading-relaxed">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

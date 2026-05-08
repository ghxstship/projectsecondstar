import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { networkVerticals } from "@/lib/network";

const tierOrder = ["crew", "captain", "commodore"] as const;
const tierLabels: Record<(typeof tierOrder)[number], string> = {
  crew: "Crew",
  captain: "Captain",
  commodore: "Commodore",
};

export default function NetworkAccessByTier() {
  return (
    <section
      id="network-access"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="02 / Across The Network"
        title={
          <>
            Seven verticals.
            <br />
            Three tiers.
          </>
        }
        light
      />

      <div className="border-[3px] border-paper">
        <div className="hidden grid-cols-[1.5fr_1fr_1fr_1fr] border-b-[1.5px] border-paper md:grid">
          <div className="p-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            Vertical
          </div>
          {tierOrder.map((id) => (
            <div
              key={id}
              className="border-l-[1.5px] border-paper p-5 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-cyan"
            >
              {tierLabels[id]}
            </div>
          ))}
        </div>

        {networkVerticals.map((v) => {
          const access = tierOrder.map((tid) => {
            const matches = v.anchors.filter((a) => {
              if (tid === "crew") return true;
              if (tid === "captain")
                return a.tierAccess === "captain" || a.tierAccess === "commodore";
              return a.tierAccess === "commodore";
            });
            return matches.length;
          });

          return (
            <div
              key={v.id}
              className="grid grid-cols-1 border-b-[1.5px] border-paper last:border-b-0 md:grid-cols-[1.5fr_1fr_1fr_1fr]"
            >
              <div className="border-b border-line p-5 md:border-b-0 md:border-r md:border-line">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  / {v.num}
                </div>
                <h3 className="mt-1 font-display text-[28px] uppercase leading-none">
                  {v.label}
                </h3>
                <p className="mt-2 font-sub text-[14px] tracking-wide text-muted">
                  {v.positioning}
                </p>
              </div>
              {tierOrder.map((tid, idx) => (
                <div
                  key={tid}
                  className="flex items-center justify-between gap-3 border-b border-line p-5 last:border-b-0 md:border-b-0 md:border-l-[1.5px] md:border-paper md:justify-center"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan md:hidden">
                    {tierLabels[tid]}
                  </span>
                  <span className="font-display text-[32px] leading-none">
                    {tid === "crew"
                      ? "Members rate"
                      : tid === "captain"
                      ? "Priority"
                      : "Curated"}
                  </span>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:hidden">
                    {access[idx]} anchors
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <Link
          href="/network"
          className="inline-flex items-center gap-2 border-[3px] border-paper bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-paper hover:text-ink transition-all"
        >
          See the full Network <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

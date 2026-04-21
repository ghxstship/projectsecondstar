import SectionHeader from "./SectionHeader";
import { revenueStack } from "@/lib/content";

export default function Economics() {
  return (
    <section
      id="economics"
      className="bg-paper px-5 py-20 md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="05 / Unit Economics"
        title={
          <>
            Revenue
            <br />
            by design.
          </>
        }
      />

      {/* Econ cards */}
      <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-3">
        <EconCard
          label="Blended Ticket ACV"
          currency="$"
          figure="500"
          unit="Per Seat / Phase 3"
          desc="Laddered pricing across standard ($450), premium ($650), and private cabana ($3,200 whole-boat). Ticket is the anchor, not the ceiling."
        />
        <EconCard
          label="Sailing Day Gross"
          currency="$"
          figure="55K"
          unit="Full Flotilla / Day"
          desc="85 seats × $500 blended ticket, plus ancillary F&B, creator, and sponsorship layers. Before variable costs; ~58% contribution margin at scale."
          featured
        />
        <EconCard
          label="Steady-State EBITDA"
          currency="$"
          figure="700K"
          unit="Annualized / Miami"
          desc="40 sailing days per year at full flotilla, before any replication or format licensing revenue layered on top."
        />
      </div>

      {/* Revenue stack */}
      <div className="border-hard bg-paper">
        <div className="grid grid-cols-[40px_1fr_auto] items-center gap-6 bg-ink px-8 py-6 font-mono text-[11px] uppercase tracking-[0.25em] text-paper">
          <div>#</div>
          <div>Revenue Stream</div>
          <div>Distribution</div>
        </div>

        {revenueStack.map((row, i) => (
          <div
            key={row.num}
            className={`grid items-center gap-6 px-8 py-6 ${
              i < revenueStack.length - 1 ? "border-b border-line" : ""
            } grid-cols-[40px_1fr_60px] md:grid-cols-[40px_1fr_200px_60px]`}
          >
            <div className="font-mono text-[12px] text-muted">{row.num}</div>
            <div className="font-sub text-[28px] tracking-wide">{row.name}</div>
            <div className="hidden md:block">
              <div className="relative h-3 overflow-hidden border-[1.5px] border-ink bg-paper">
                <div
                  className="h-full bg-cyan transition-[width] duration-1000 ease-out"
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </div>
            <div className="text-right font-display text-[28px]">{row.pct}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EconCard({
  label,
  currency,
  figure,
  unit,
  desc,
  featured = false,
}: {
  label: string;
  currency: string;
  figure: string;
  unit: string;
  desc: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`border-hard p-8 md:px-8 md:py-10 transition-all hover:-translate-x-1 hover:-translate-y-1 ${
        featured
          ? "bg-ink text-paper shadow-hard-cyan hover:shadow-hard-xl-cyan"
          : "bg-paper shadow-hard hover:shadow-hard-xl"
      }`}
    >
      <div
        className={`mb-3 font-mono text-[11px] uppercase tracking-[0.25em] ${
          featured ? "text-cyan" : "text-muted"
        }`}
      >
        {label}
      </div>
      <div className="mb-2 font-display leading-[0.9] tracking-[-0.02em]">
        <span className="text-[36px] align-top mr-1">{currency}</span>
        <span className="text-[88px]">{figure}</span>
        <span
          className={`mt-3 block font-sub text-[22px] tracking-wide ${
            featured ? "text-cyan" : "text-muted"
          }`}
        >
          {unit}
        </span>
      </div>
      <p
        className={`mt-4 border-t pt-4 text-[14px] leading-relaxed ${
          featured ? "border-line text-[#B8B8B4]" : "border-line text-muted"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}

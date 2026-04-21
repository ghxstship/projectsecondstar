"use client";

import { useState, useMemo } from "react";
import SectionHeader from "./SectionHeader";
import { phases, type Phase } from "@/lib/content";

export default function Scaling() {
  const [activeId, setActiveId] = useState<1 | 2 | 3 | 4>(1);

  const active: Phase = useMemo(
    () => phases.find((p) => p.id === activeId)!,
    [activeId]
  );

  return (
    <section
      id="scaling"
      className="bg-dust px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="04 / Fleet Scaling"
        title={
          <>
            One vessel
            <br />
            to full flotilla.
          </>
        }
        light
      />

      {/* Phase tabs */}
      <div className="mb-10 grid grid-cols-1 border-[3px] border-paper md:grid-cols-4">
        {phases.map((p, i) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`flex flex-col gap-1 border-b-[1.5px] border-paper p-6 text-left font-mono text-[12px] uppercase tracking-[0.2em] transition-colors last:border-b-0 md:border-b-0 md:border-r-[1.5px] md:last:border-r-0 ${
                isActive
                  ? "bg-cyan text-ink"
                  : "bg-transparent text-paper hover:bg-fog"
              }`}
            >
              <span
                className={`text-[10px] tracking-[0.25em] ${
                  isActive ? "opacity-100" : "opacity-70"
                }`}
              >
                {p.label}
              </span>
              <span className="font-sub text-[22px] tracking-wide">
                {p.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Phase content */}
      <div className="grid grid-cols-1 gap-10 border-[3px] border-paper border-t-0 p-8 md:grid-cols-[1.2fr_1fr] md:gap-[60px] md:p-[60px] min-h-[500px]">
        <div className="flex flex-col gap-8">
          <div className="font-mono text-[12px] uppercase tracking-[0.25em] text-cyan">
            {active.period}
          </div>
          <h3 className="font-display text-[64px] uppercase leading-[0.9] tracking-[-0.01em]">
            {active.title}
          </h3>
          <p className="border-l-[3px] border-cyan pl-4 font-sub text-[24px] leading-tight text-cyan">
            {active.obj}
          </p>
          <p className="text-[15px] leading-relaxed text-[#B8B8B4]">
            {active.desc}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Stats grid */}
          <div className="grid grid-cols-1 gap-px border-[3px] border-paper bg-paper md:grid-cols-2">
            <Stat label="Vessels" value={active.vessels} />
            <Stat
              label="Max Day Capacity"
              value={active.capacity}
              unit={active.capacityUnit}
            />
            <Stat label="Target Gross / Day" value={active.revenue} />
            <Stat
              label="Capital Window"
              value={active.capital}
              unit={active.capitalUnit}
            />
          </div>

          {/* Fleet visualizer */}
          <div className="flex flex-col gap-4 border-[1.5px] border-paper bg-fog p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
              Fleet State
            </div>
            <div className="grid grid-cols-5 gap-2 py-5 md:grid-cols-10">
              {Array.from({ length: 10 }).map((_, i) => {
                const on = i < active.fleetOn;
                return (
                  <div
                    key={i}
                    className={`aspect-square border-[1.5px] transition-all duration-300 ${
                      on
                        ? "border-cyan bg-cyan opacity-100"
                        : "border-paper bg-transparent opacity-20"
                    }`}
                    style={{
                      transitionDelay: on ? `${i * 60}ms` : "0ms",
                    }}
                  />
                );
              })}
            </div>
            <div className="font-sub text-[18px] tracking-wide text-paper">
              {active.caption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="flex flex-col gap-2 bg-dust p-7">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
        {label}
      </span>
      <span className="font-display text-[44px] leading-none text-paper">
        {value}
        {unit && (
          <span className="ml-1 block font-sans text-[14px] font-medium uppercase tracking-wider text-cyan">
            {unit}
          </span>
        )}
      </span>
    </div>
  );
}

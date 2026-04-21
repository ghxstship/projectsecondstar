"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { audiences, type Audience } from "@/lib/content";

export default function AudienceSection() {
  const [activeId, setActiveId] = useState<Audience["id"]>("investor");
  const active = audiences.find((a) => a.id === activeId)!;

  return (
    <section
      id="audience"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="06 / Get Involved"
        title={
          <>
            Three
            <br />
            doors in.
          </>
        }
        light
      />

      {/* Audience toggle */}
      <div className="mb-[60px] grid grid-cols-1 border-[3px] border-paper md:grid-cols-3">
        {audiences.map((a) => {
          const isActive = a.id === activeId;
          return (
            <button
              key={a.id}
              onClick={() => setActiveId(a.id)}
              className={`relative border-b-[1.5px] border-paper p-6 text-left font-display text-[36px] uppercase leading-none tracking-[-0.01em] transition-colors last:border-b-0 md:border-b-0 md:border-r-[1.5px] md:p-8 md:text-[48px] md:last:border-r-0 ${
                isActive ? "bg-cyan text-ink" : "bg-transparent text-paper hover:bg-fog"
              }`}
            >
              <span
                className={`absolute right-5 top-5 font-mono text-[10px] tracking-[0.25em] ${
                  isActive ? "text-ink" : "text-muted"
                }`}
              >
                {a.num}
              </span>
              {a.label}
            </button>
          );
        })}
      </div>

      {/* Audience content */}
      <div
        key={active.id}
        className="grid animate-fade-in grid-cols-1 gap-10 md:grid-cols-2 md:gap-[60px]"
      >
        <div>
          <h3 className="mb-10 font-sub text-[clamp(32px,4vw,52px)] leading-none tracking-wide">
            {active.pitchPre}
            <span className="bg-cyan px-2 text-ink">{active.pitchHighlight}</span>
            {active.pitchPost}
          </h3>
          <p className="mb-10 text-[16px] leading-relaxed text-[#C5C5C0]">
            {active.body}
          </p>
          <div className="mt-10 border-cyan-hard bg-fog p-10">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan">
              {active.boxLabel}
            </div>
            <div className="mb-4 font-display text-[42px] uppercase leading-[0.95]">
              {active.boxTitle}
            </div>
            <p className="mb-6 text-[14px] leading-relaxed text-[#B8B8B4]">
              {active.boxDesc}
            </p>
            <a
              href="#contact"
              className="inline-block border-[3px] border-cyan bg-cyan px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft transition-all"
            >
              {active.boxCta}
            </a>
          </div>
        </div>

        <div>
          <div className="flex flex-col border-t border-line">
            {active.items.map((item) => (
              <div
                key={item.num}
                className="grid grid-cols-[40px_1fr_auto] items-center gap-5 border-b border-line py-5"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">
                  {item.num}
                </span>
                <span className="font-sub text-[22px] tracking-wide">
                  {item.text}
                </span>
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.15em] text-muted md:inline">
                  {item.meta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

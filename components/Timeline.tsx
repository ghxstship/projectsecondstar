"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { timelineActs } from "@/lib/content";

export default function Timeline() {
  const [activeIdx, setActiveIdx] = useState<number>(2); // act 3 active by default

  return (
    <section id="day" className="bg-paper px-5 py-20 md:px-10 md:py-[120px]">
      <SectionHeader
        num="03 / The Experience"
        title={
          <>
            Five acts,
            <br />
            one horizon.
          </>
        }
      />

      <div className="border-hard">
        {timelineActs.map((act, i) => {
          const isActive = activeIdx === i;
          return (
            <div
              key={act.num}
              className={`timeline-row cursor-pointer border-b-[1.5px] border-ink last:border-b-0 transition-colors ${
                isActive ? "active bg-ink text-paper" : "hover:bg-ink hover:text-paper"
              }`}
              onClick={() => setActiveIdx(isActive ? -1 : i)}
            >
              <div className="grid grid-cols-[60px_1fr_auto] items-center gap-4 p-5 md:grid-cols-[120px_1fr_200px_auto] md:gap-10 md:p-10">
                <div
                  className={`font-display text-[48px] md:text-[80px] leading-none transition-colors ${
                    isActive ? "text-cyan" : "text-current"
                  } group-hover:text-cyan`}
                >
                  {act.num}
                </div>
                <div className="font-sub text-[24px] md:text-[36px] leading-none tracking-wide">
                  {act.name}
                </div>
                <div
                  className={`hidden text-right font-mono text-[14px] uppercase tracking-wider md:block ${
                    isActive ? "text-paper" : "text-muted"
                  }`}
                >
                  {act.time}
                </div>
                <div
                  className={`flex h-10 w-10 items-center justify-center border-2 font-mono text-xl transition-all ${
                    isActive
                      ? "rotate-45 border-cyan bg-cyan text-ink"
                      : "border-current"
                  }`}
                >
                  +
                </div>
              </div>

              <div className="timeline-detail">
                <p className="max-w-[800px] text-[16px] leading-relaxed text-paper">
                  {act.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

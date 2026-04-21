"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader";
import { guestFaqs } from "@/lib/content";

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  return (
    <section id="faq" className="bg-paper px-5 py-20 md:px-10 md:py-[120px]">
      <SectionHeader
        num="05 / Questions"
        title={
          <>
            Before
            <br />
            you book.
          </>
        }
      />

      <div className="border-hard">
        {guestFaqs.map((f, i) => {
          const isActive = activeIdx === i;
          return (
            <div
              key={f.question}
              className={`timeline-row cursor-pointer border-b-[1.5px] border-ink last:border-b-0 transition-colors ${
                isActive ? "active bg-ink text-paper" : "hover:bg-ink hover:text-paper"
              }`}
              onClick={() => setActiveIdx(isActive ? -1 : i)}
            >
              <div className="grid grid-cols-[1fr_auto] items-center gap-4 p-5 md:gap-10 md:p-8">
                <div className="font-sub text-[22px] md:text-[32px] leading-tight tracking-wide">
                  {f.question}
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
                  {f.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

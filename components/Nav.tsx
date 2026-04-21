"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const onScroll = () => {
      const cur = window.scrollY;
      setHidden(cur > lastScroll && cur > 100);
      lastScroll = cur;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b-[3px] border-ink bg-paper px-5 py-4 md:px-10 md:py-5 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <a
        href="#"
        className="font-display text-[32px] leading-none text-ink no-underline"
      >
        HVRBR<span className="text-cyan">.CLUB</span>
      </a>

      <div className="flex items-center gap-3 md:gap-8">
        <a
          href="#thesis"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors"
        >
          Thesis
        </a>
        <a
          href="#pillars"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors"
        >
          Pillars
        </a>
        <a
          href="#day"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors"
        >
          The Day
        </a>
        <a
          href="#scaling"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors"
        >
          Fleet
        </a>
        <a
          href="#audience"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors"
        >
          Get Involved
        </a>
        <span className="hidden lg:inline border-l border-line pl-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Launch / June 2026
        </span>
        <a
          href="#contact"
          className="border-hard bg-ink px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper hover:bg-cyan hover:text-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-soft transition-all"
        >
          Apply
        </a>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/config";

export default function GuestNav() {
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
        className="font-display text-[32px] leading-none text-ink no-underline relative"
      >
        HVRBOR
        <span className="absolute bottom-1 -right-2 h-1.5 w-1.5 rounded-full bg-cyan" />
      </a>

      <div className="flex items-center gap-3 md:gap-8">
        <a
          href="#day"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors"
        >
          The Day
        </a>
        <a
          href="#experience"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors"
        >
          Experience
        </a>
        <a
          href="#sailings"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors"
        >
          Sailings
        </a>
        <a
          href="#faq"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors"
        >
          FAQ
        </a>
        <span className="hidden lg:inline border-l border-line pl-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Sailing / June 2026
        </span>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border-hard bg-ink px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper hover:bg-cyan hover:text-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-soft transition-all"
        >
          Book
        </a>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function GuestNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b-[3px] border-ink px-5 md:px-10 transition-all duration-300 ${
        scrolled
          ? "py-2 md:py-3 bg-paper/85 backdrop-blur-md"
          : "py-4 md:py-5 bg-paper"
      }`}
    >
      <Link
        href="/"
        className="font-display text-[32px] leading-none text-ink no-underline"
      >
        HVRBOR.CLUB<span className="text-cyan">.</span>
      </Link>

      <div className="flex items-center gap-3 md:gap-7">
        <Link
          href="/episodes"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors no-underline"
        >
          Episodes
        </Link>
        <Link
          href="/network"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors no-underline"
        >
          Network
        </Link>
        <Link
          href="/membership"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors no-underline"
        >
          Membership
        </Link>
        <Link
          href="/log"
          className="hidden md:inline font-mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-cyan-deep transition-colors no-underline"
        >
          Log
        </Link>
        <span className="hidden lg:inline border-l border-line pl-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Casting / SEAson 1
        </span>
        <Link
          href="/apply"
          className="border-hard bg-ink px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper hover:bg-cyan hover:text-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-soft transition-all no-underline"
        >
          Apply
        </Link>
      </div>
    </nav>
  );
}

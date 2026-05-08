import Link from "next/link";

export default function HarborTeaser() {
  return (
    <section
      id="harbor-teaser"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <div className="mb-6 font-mono text-[12px] uppercase tracking-[0.3em] text-cyan">
            The Harbor
          </div>
          <h2 className="font-display text-[clamp(56px,9vw,140px)] uppercase leading-[0.85] tracking-[-0.02em]">
            The full Network
            <br />
            lives in the
            <br />
            Harbor<span className="text-cyan">.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-6 pt-2 md:pt-8">
          <p className="text-[17px] leading-relaxed text-[#C5C5C0]">
            The page you're on shows the anchor partners. The Harbor — the
            membership operating system — holds the full Network and the
            booking flows behind it. Concierge chat. The Mark Wallet. The Log.
            The Crew Directory.
          </p>
          <p className="text-[17px] leading-relaxed text-[#C5C5C0]">
            Captain members get full access. Crew get read-only. Opening
            alongside SEAson 2.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 self-start border-[3px] border-cyan bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-cyan no-underline hover:bg-cyan hover:text-ink transition-all"
          >
            How membership works <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

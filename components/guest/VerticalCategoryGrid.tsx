import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { networkVerticals } from "@/lib/network";

export default function VerticalCategoryGrid() {
  return (
    <section
      id="verticals"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="01 / Seven Verticals"
        title={
          <>
            One card.
            <br />
            Seven networks.
          </>
        }
      />

      <div className="grid grid-cols-1 border-[3px] border-ink md:grid-cols-2">
        {networkVerticals.map((v) => (
          <Link
            key={v.id}
            href={`/network/${v.id}`}
            className="group flex min-h-[320px] flex-col justify-between border-[1.5px] border-ink p-8 no-underline text-ink transition-colors hover:bg-ink hover:text-paper md:p-10"
          >
            <div>
              <div className="mb-4 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                <span className="text-cyan-deep group-hover:text-cyan">
                  / {v.num}
                </span>
                <span className="text-muted">{v.positioning}</span>
              </div>
              <h3 className="mb-4 font-display text-[48px] uppercase leading-[0.95] tracking-[-0.01em]">
                {v.label}
              </h3>
              <p className="text-[15px] leading-relaxed">{v.blurb}</p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-3 border-t border-current pt-4 font-mono text-[11px] uppercase tracking-[0.25em]">
              <span>{v.anchors.length} anchor partners</span>
              <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

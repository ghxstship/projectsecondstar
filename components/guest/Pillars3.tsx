import Link from "next/link";
import SectionHeader from "../SectionHeader";

const pillars = [
  {
    num: "/ 01",
    label: "Experience",
    title: "The Saturdays.",
    body: "Eight Saturdays per SEAson on Biscayne Bay. Twelve seats each. Every Episode a destination. Choreographed dock to dock. The Saturdays are what HVRBOR was built on, and what the membership is named after.",
    href: "/episodes",
    cta: "See the Saturdays",
  },
  {
    num: "/ 02",
    label: "Product",
    title: "The Archive.",
    body: "What you take home. The numbered Mark. The Origin Capsule. The Future Archives prints. The Loro Piana × HVRBOR capsule. The Faena Resident Suite. Three rings — what we make, what we make with others, what the Network turns into a product.",
    href: "/archive",
    cta: "Open the Archive",
  },
  {
    num: "/ 03",
    label: "Community",
    title: "The Crew.",
    body: "Who you find in the room. Founders, operators, creatives, wellness practitioners. Health-and-wealth-conscious young operators with vast networks. The Crew brings the Crew. The room curates itself.",
    href: "/crew",
    cta: "Meet the Crew",
  },
];

export default function Pillars3() {
  return (
    <section
      id="pillars"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="01 / Three at Once"
        title={
          <>
            Experience.
            <br />
            Product. Crew.
          </>
        }
      />

      <div className="grid grid-cols-1 border-[3px] border-ink md:grid-cols-3">
        {pillars.map((p) => (
          <Link
            key={p.num}
            href={p.href}
            className="group flex min-h-[420px] flex-col justify-between border-[1.5px] border-ink p-8 no-underline transition-colors hover:bg-ink hover:text-paper md:p-10"
          >
            <div>
              <div className="mb-6 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep group-hover:text-cyan">
                <span>{p.num}</span>
                <span className="text-muted group-hover:text-paper/70">
                  {p.label}
                </span>
              </div>
              <h3 className="mb-6 font-display text-[48px] uppercase leading-[0.95] tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed">{p.body}</p>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 border-t border-current pt-4 font-mono text-[11px] uppercase tracking-[0.25em]">
              {p.cta}
              <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

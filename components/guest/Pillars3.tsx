import Link from "next/link";
import SectionHeader from "../SectionHeader";

const pillars = [
  {
    num: "/ 01",
    title: "Episodes.",
    body: "The flotilla. Eight Saturdays per SEAson on Biscayne Bay — twelve seats each, every one a destination. Set end to end, dock to dock. The proof. The reason the Crew shows up.",
    href: "/episodes",
    cta: "See SEAson 1",
  },
  {
    num: "/ 02",
    title: "The Network.",
    body: "The card opens the rooms that matter. Paddock at the Grand Prix. Preview day at Basel. The off-market suite at Faena. Where the Crew shows up between Saturdays — and what the membership is, between Saturdays.",
    href: "/network",
    cta: "Read the Network",
  },
  {
    num: "/ 03",
    title: "The Harbor.",
    body: "The operating system the membership runs on. Concierge. The Mark. The Log. The Crew. Of course it is text-first. Of course there is a number on the back of your card. Opening alongside SEAson 2.",
    href: "/membership",
    cta: "How Membership Works",
  },
];

export default function Pillars3() {
  return (
    <section
      id="pillars"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="01 / The Membership"
        title={
          <>
            Three pillars.
            <br />
            One Harbor.
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
              <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep group-hover:text-cyan">
                {p.num}
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

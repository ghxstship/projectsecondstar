import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { logArticles } from "@/lib/log";

export default function CrewStoriesGrid() {
  const stories = logArticles.filter((a) => a.category === "Crew Story");

  if (stories.length === 0) return null;

  return (
    <section
      id="crew-stories"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="05 / Crew Stories"
        title={
          <>
            Names,
            <br />
            when named.
          </>
        }
      />

      <p className="mb-10 max-w-[640px] font-sub text-[24px] leading-tight tracking-wide md:text-[28px]">
        Profiles ship opt-in. The Crew Directory lives in The Harbor.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <Link
            key={s.slug}
            href={`/log/${s.slug}`}
            className="group flex flex-col gap-4 border-[3px] border-ink p-8 no-underline text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-deep group-hover:text-cyan">
                {s.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {s.date}
              </span>
            </div>
            <h3 className="font-display text-[28px] uppercase leading-[0.95] tracking-[-0.01em]">
              {s.title}
            </h3>
            <p className="text-[14px] leading-relaxed">{s.excerpt}</p>
            <span className="mt-auto inline-flex items-center gap-2 border-t border-current pt-3 font-mono text-[11px] uppercase tracking-[0.25em]">
              Read entry <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

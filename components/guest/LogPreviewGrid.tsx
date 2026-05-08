import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { logArticles } from "@/lib/log";

type Props = {
  limit?: number;
};

export default function LogPreviewGrid({ limit = 3 }: Props) {
  const articles = logArticles.slice(0, limit);

  return (
    <section
      id="log-preview"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="04 / The Log"
        title={
          <>
            Notes from
            <br />
            the Harbor.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/log/${a.slug}`}
            className="group flex flex-col gap-4 border-[3px] border-ink p-8 no-underline text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-deep group-hover:text-cyan">
                {a.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {a.date}
              </span>
            </div>
            <h3 className="font-display text-[28px] uppercase leading-[0.95] tracking-[-0.01em]">
              {a.title}
            </h3>
            <p className="text-[14px] leading-relaxed">{a.excerpt}</p>
            <span className="mt-auto inline-flex items-center gap-2 border-t border-current pt-4 font-mono text-[11px] uppercase tracking-[0.25em]">
              Read entry <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/log"
          className="inline-flex items-center gap-2 border-hard bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-ink no-underline hover:bg-ink hover:text-paper transition-all"
        >
          Read the full Log <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

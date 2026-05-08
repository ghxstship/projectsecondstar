import Link from "next/link";
import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import NewsletterSignup from "@/components/guest/NewsletterSignup";
import { logArticles } from "@/lib/log";

export const metadata = {
  title: "HVRBOR.CLUB / The Log",
  description:
    "The running record. Episode previews, Network Moment write-ups, Crew stories, partner spotlights, founder notes from the Harbor.",
};

export default function LogIndexPage() {
  const [hero, ...rest] = logArticles;

  return (
    <main>
      <GuestNav />

      <section className="bg-paper px-5 py-20 pt-[140px] text-ink md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / The Log"
          title={
            <>
              The running
              <br />
              record.
            </>
          }
        />
        <p className="max-w-[720px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
          Every Episode leaves a Mark. The Log is where they're written down.
        </p>
      </section>

      {hero && (
        <section className="bg-paper px-5 pb-20 text-ink md:px-10">
          <Link
            href={`/log/${hero.slug}`}
            className="group grid grid-cols-1 gap-8 border-hard p-8 no-underline text-ink transition-colors hover:bg-ink hover:text-paper md:grid-cols-[1.4fr_1fr] md:gap-12 md:p-12"
          >
            <div>
              <div className="mb-6 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.25em]">
                <span className="text-cyan-deep group-hover:text-cyan">
                  Featured / {hero.category}
                </span>
                <span className="text-muted">{hero.date}</span>
              </div>
              <h2 className="font-display text-[clamp(40px,6vw,88px)] uppercase leading-[0.95] tracking-[-0.01em]">
                {hero.title}
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed">{hero.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 border-t border-current pt-4 font-mono text-[12px] uppercase tracking-[0.25em]">
                Read entry <span aria-hidden>→</span>
              </span>
            </div>
            <div className="flex flex-col justify-end gap-3 md:items-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Author
              </span>
              <span className="font-sub text-[24px] tracking-wide">
                {hero.author}
              </span>
            </div>
          </Link>
        </section>
      )}

      {rest.length > 0 && (
        <section className="bg-paper px-5 pb-20 text-ink md:px-10 md:pb-[120px]">
          <div className="mb-10">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              All Entries
            </div>
            <h3 className="font-display text-[clamp(32px,4vw,56px)] uppercase leading-[0.95] tracking-[-0.01em]">
              The full Log.
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/log/${a.slug}`}
                className="group flex flex-col gap-4 border-[3px] border-ink p-8 no-underline text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-deep group-hover:text-cyan">
                    {a.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {a.date}
                  </span>
                </div>
                <h3 className="font-display text-[26px] uppercase leading-[0.95] tracking-[-0.01em]">
                  {a.title}
                </h3>
                <p className="text-[14px] leading-relaxed">{a.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 border-t border-current pt-3 font-mono text-[11px] uppercase tracking-[0.25em]">
                  Read entry <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <NewsletterSignup />
      <GuestFooter />
    </main>
  );
}

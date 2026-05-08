import { notFound } from "next/navigation";
import Link from "next/link";
import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import NewsletterSignup from "@/components/guest/NewsletterSignup";
import { getArticleBySlug, getRelatedArticles, logArticles } from "@/lib/log";

export function generateStaticParams() {
  return logArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "HVRBOR.CLUB / Log" };
  return {
    title: `HVRBOR.CLUB / Log / ${article.title}`,
    description: article.excerpt,
  };
}

export default async function LogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const related = getRelatedArticles(slug, 3);

  return (
    <main>
      <GuestNav />

      <article className="bg-paper px-5 pt-[140px] text-ink md:px-10 md:pt-[180px]">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em]">
            <Link
              href="/log"
              className="text-cyan-deep no-underline hover:text-ink"
            >
              ← The Log
            </Link>
            <span className="text-muted">/ {article.category}</span>
            <span className="text-muted">/ {article.date}</span>
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,120px)] uppercase leading-[0.85] tracking-[-0.02em]">
            {article.title}
            <span className="text-cyan">.</span>
          </h1>
          <p className="mt-6 max-w-[640px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
            {article.excerpt}
          </p>
          <div className="mt-10 flex items-center gap-4 border-t-[3px] border-ink pt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            <span>By</span>
            <span className="text-ink">{article.author}</span>
          </div>
        </div>
      </article>

      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]">
        <div className="mx-auto flex max-w-[820px] flex-col gap-6">
          {article.body.map((para, idx) => (
            <p key={idx} className="text-[18px] leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper px-5 pb-20 text-ink md:px-10 md:pb-[120px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8 border-t-[3px] border-ink pt-8">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
                Continue Reading
              </div>
              <h2 className="font-display text-[clamp(32px,4vw,56px)] uppercase leading-[0.95] tracking-[-0.01em]">
                More from the Log.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/log/${a.slug}`}
                  className="group flex flex-col gap-4 border-[3px] border-ink p-6 no-underline text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                    <span className="text-cyan-deep group-hover:text-cyan">
                      {a.category}
                    </span>
                    <span className="text-muted">{a.date}</span>
                  </div>
                  <h3 className="font-display text-[24px] uppercase leading-[0.95] tracking-[-0.01em]">
                    {a.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterSignup />
      <GuestFooter />
    </main>
  );
}

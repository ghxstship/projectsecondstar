import { notFound } from "next/navigation";
import Link from "next/link";
import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import HarborTeaser from "@/components/guest/HarborTeaser";
import { getVerticalById, networkVerticals } from "@/lib/network";
import { networkMoments } from "@/lib/moments";
import type { PartnerStatus } from "@/lib/network";

const statusStyles: Record<PartnerStatus, string> = {
  Confirmed: "border-cyan bg-cyan text-ink",
  "In conversation": "border-cyan text-cyan",
  "Anchor target": "border-muted text-muted",
};

const tierLabels = {
  crew: "Crew access",
  captain: "Captain priority",
  commodore: "Commodore-only",
} as const;

export function generateStaticParams() {
  return networkVerticals.map((v) => ({ category: v.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const vertical = getVerticalById(category);
  if (!vertical) return { title: "HVRBOR.CLUB" };
  return {
    title: `HVRBOR.CLUB / Network / ${vertical.label}`,
    description: vertical.blurb,
  };
}

export default async function NetworkCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const vertical = getVerticalById(category);
  if (!vertical) notFound();

  const verticalMoments = networkMoments.filter(
    (m) => m.vertical === vertical.id,
  );

  return (
    <main>
      <GuestNav />

      <section className="bg-ink px-5 py-20 pt-[140px] text-paper md:px-10 md:py-[120px] md:pt-[160px]">
        <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
          <Link
            href="/network"
            className="text-cyan no-underline hover:text-paper"
          >
            ← Network
          </Link>
          <span className="text-muted">/ {vertical.num}</span>
        </div>
        <h1 className="font-display text-[clamp(64px,12vw,200px)] uppercase leading-[0.85] tracking-[-0.02em]">
          {vertical.label}
          <span className="text-cyan">.</span>
        </h1>
        <p className="mt-6 max-w-[640px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide text-paper">
          {vertical.positioning}
        </p>
        <p className="mt-8 max-w-[760px] text-[17px] leading-relaxed text-[#C5C5C0]">
          {vertical.body}
        </p>
      </section>

      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]">
        <div className="mb-10">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
            01 / Anchors
          </div>
          <h2 className="font-display text-[clamp(40px,5vw,72px)] uppercase leading-[0.95] tracking-[-0.01em]">
            The named partners.
          </h2>
        </div>

        <div className="grid grid-cols-1 border-[3px] border-ink">
          {vertical.anchors.map((a, idx) => (
            <div
              key={a.name}
              className={`grid grid-cols-1 gap-4 p-6 md:grid-cols-[1.5fr_2fr_auto_auto] md:items-center md:gap-8 md:p-8 ${
                idx < vertical.anchors.length - 1
                  ? "border-b-[1.5px] border-ink"
                  : ""
              }`}
            >
              <div>
                <h3 className="font-display text-[28px] uppercase leading-none tracking-[-0.01em]">
                  {a.name}
                </h3>
              </div>
              <p className="text-[15px] leading-relaxed">{a.description}</p>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-deep">
                {tierLabels[a.tierAccess]}
              </span>
              <span
                className={`justify-self-start border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${statusStyles[a.status]}`}
              >
                {a.status}
              </span>
            </div>
          ))}
        </div>

        {vertical.pipeline.length > 0 && (
          <div className="mt-12">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              02 / Pipeline
            </div>
            <p className="mb-6 font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
              In conversation. Anchor targets. Pending confirmation.
            </p>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {vertical.pipeline.map((p) => (
                <li
                  key={p}
                  className="border-l-2 border-cyan-deep py-2 pl-4 font-sub text-[18px] tracking-wide"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {verticalMoments.length > 0 && (
        <section className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]">
          <div className="mb-10">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
              03 / Moments In {vertical.label}
            </div>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] uppercase leading-[0.95] tracking-[-0.01em]">
              On the calendar.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {verticalMoments.map((m) => (
              <article
                key={m.id}
                className="flex flex-col gap-5 border-[3px] border-paper p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-sub text-[20px] tracking-wide text-paper">
                    {m.window}
                  </span>
                  <span className="border border-cyan px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                    {m.tier}
                  </span>
                </div>
                <h3 className="font-display text-[28px] uppercase leading-[0.95]">
                  {m.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#C5C5C0]">
                  {m.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      <HarborTeaser />
      <GuestFooter />
    </main>
  );
}

import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { archiveItems, type ArchiveStatus } from "@/lib/archive";

const statusStyles: Record<ArchiveStatus, string> = {
  Shipping: "border-cyan bg-cyan text-ink",
  "Founding allocation": "border-cyan text-cyan",
  "On standby": "border-paper text-paper",
  "Coming SEAson 1": "border-paper text-paper",
  "Coming SEAson 2": "border-muted text-muted",
  "Anchor target": "border-muted text-muted",
};

export default function ArchiveTeaserGrid() {
  // Surface the headline three: The Mark, The Origin Capsule, the Loro Piana capsule
  const featured = [
    archiveItems.find((i) => i.id === "the-mark")!,
    archiveItems.find((i) => i.id === "the-origin-capsule")!,
    archiveItems.find((i) => i.id === "loro-piana-capsule")!,
  ];

  return (
    <section
      id="archive-teaser"
      className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="05 / The Archive"
        title={
          <>
            What you
            <br />
            take home.
          </>
        }
        light
      />

      <p className="mb-10 max-w-[640px] font-sub text-[24px] leading-tight tracking-wide text-paper md:text-[28px]">
        Three rings. Owned. Co-branded. Partner. The Mark mails first.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((item) => (
          <article
            key={item.id}
            className="flex min-h-[280px] flex-col justify-between gap-5 border-[3px] border-paper p-8 transition-colors hover:bg-fog"
          >
            <div>
              <div className="mb-3 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                <span className="text-muted">{item.category}</span>
                {item.numbered && (
                  <span className="text-cyan">Numbered</span>
                )}
              </div>
              <h3 className="mb-4 font-display text-[32px] uppercase leading-[0.95] tracking-[-0.01em]">
                {item.name}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#C5C5C0]">
                {item.description}
              </p>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {item.tier}
              </span>
              <span
                className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/archive"
          className="inline-flex items-center gap-2 border-[3px] border-paper bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-paper hover:text-ink transition-all"
        >
          Open the full Archive <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

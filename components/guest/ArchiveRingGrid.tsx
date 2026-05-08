import SectionHeader from "../SectionHeader";
import {
  archiveItems,
  archiveRingLabels,
  type ArchiveItem,
  type ArchiveRing,
  type ArchiveStatus,
} from "@/lib/archive";

const statusStyles: Record<ArchiveStatus, string> = {
  Shipping: "border-cyan bg-cyan text-ink",
  "Founding allocation": "border-cyan text-cyan",
  "On standby": "border-paper text-paper",
  "Coming SEAson 1": "border-paper text-paper",
  "Coming SEAson 2": "border-muted text-muted",
  "Anchor target": "border-muted text-muted",
};

type Props = {
  ring: ArchiveRing;
  num: string;
};

export default function ArchiveRingGrid({ ring, num }: Props) {
  const items = archiveItems.filter((i) => i.ring === ring);
  const ringMeta = archiveRingLabels[ring];
  const isDark = ring === "co-branded";

  return (
    <section
      className={`px-5 py-20 md:px-10 md:py-[120px] ${
        isDark ? "bg-ink text-paper" : "bg-paper text-ink"
      }`}
    >
      <SectionHeader
        num={`${num} / ${ringMeta.label}`}
        title={
          <>
            {ringMeta.label.split(" ").slice(0, 2).join(" ")}
            {ringMeta.label.split(" ").length > 2 && (
              <>
                <br />
                {ringMeta.label.split(" ").slice(2).join(" ")}
              </>
            )}
          </>
        }
        light={isDark}
      />

      <p
        className={`mb-10 max-w-[640px] font-sub text-[24px] leading-tight tracking-wide md:text-[28px] ${
          isDark ? "text-paper" : ""
        }`}
      >
        {ringMeta.positioning}
      </p>

      <div
        className={`grid grid-cols-1 border-[3px] md:grid-cols-2 ${
          isDark ? "border-paper" : "border-ink"
        }`}
      >
        {items.map((item) => (
          <ArchiveCard key={item.id} item={item} dark={isDark} />
        ))}
      </div>
    </section>
  );
}

function ArchiveCard({ item, dark }: { item: ArchiveItem; dark: boolean }) {
  return (
    <article
      className={`flex min-h-[280px] flex-col justify-between gap-6 border-[1.5px] p-8 md:p-10 ${
        dark ? "border-paper hover:bg-fog" : "border-ink hover:bg-ink hover:text-paper"
      } group transition-colors`}
    >
      <div>
        <div
          className={`mb-3 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] ${
            dark ? "text-muted" : "text-cyan-deep group-hover:text-cyan"
          }`}
        >
          <span>{item.category}</span>
          {item.numbered && (
            <span className={dark ? "text-cyan" : "text-cyan-deep"}>
              Numbered
            </span>
          )}
        </div>
        <h3 className="mb-4 font-display text-[36px] uppercase leading-[0.95] tracking-[-0.01em]">
          {item.name}
        </h3>
        <p className="text-[14px] leading-relaxed">{item.description}</p>
      </div>

      <div
        className={`flex items-center justify-between gap-3 border-t pt-4 ${
          dark ? "border-line" : "border-current"
        }`}
      >
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
            dark ? "text-muted" : "text-muted"
          }`}
        >
          {item.tier}
        </span>
        <span
          className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${statusStyles[item.status]}`}
        >
          {item.status}
        </span>
      </div>
    </article>
  );
}

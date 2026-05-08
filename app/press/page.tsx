import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import { PRESS_EMAIL } from "@/lib/config";

export const metadata = {
  title: "HVRBOR.CLUB / Press Kit",
  description:
    "Press contacts, brand boilerplate, and downloadable assets for HVRBOR.CLUB — Saturdays are for the sea.",
};

const assets: { file: string; purpose: string; status: string }[] = [
  {
    file: "hvrbor-club-colors.json",
    purpose: "Canonical color palette (hex + semantic roles)",
    status: "Locked",
  },
  {
    file: "hvrbor-club-wordmark.svg",
    purpose: "Primary wordmark, SVG with font-as-paths",
    status: "Pending",
  },
  {
    file: "hvrbor-club-wordmark-mono.svg",
    purpose: "Single-color variant (no cyan accent)",
    status: "Pending",
  },
  {
    file: "hvrbor-club-lockup@2x.png",
    purpose: "Raster fallback, 2x density",
    status: "Pending",
  },
];

export default function PressPage() {
  return (
    <main>
      <GuestNav />

      <section className="bg-paper px-5 py-20 pt-[140px] text-ink md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / Press"
          title={
            <>
              The kit.
              <br />
              The contact.
            </>
          }
        />
        <p className="max-w-[760px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
          Boilerplate, brand assets, and the press address. The full press kit
          ships at SEAson 1 launch in May 2026.
        </p>
      </section>

      <section className="bg-paper px-5 pb-20 text-ink md:px-10 md:pb-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              01 / Boilerplate
            </div>
            <h2 className="font-display text-[clamp(40px,6vw,88px)] uppercase leading-[0.9] tracking-[-0.02em]">
              Copy-ready.
              <br />
              Forty-five words<span className="text-cyan">.</span>
            </h2>
          </div>
          <div className="border-hard p-8 md:p-10">
            <p className="font-sub text-[20px] leading-snug tracking-wide md:text-[24px]">
              HVRBOR.CLUB is a year-round Miami membership built on a flotilla.
              Eight Saturdays per SEAson on Biscayne Bay, twelve seats per
              Episode, and a Network of priority access across Entertainment,
              Sports, Health and Wellness, Hospitality, Travel, Retail, and
              Nightlife. Sailing from Miami Beach Marina, June 20, 2026. A
              GHXSTSHIP brand.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-paper md:px-10 md:py-[120px]">
        <div className="mb-10">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
            02 / Assets
          </div>
          <h2 className="font-display text-[clamp(40px,5vw,72px)] uppercase leading-[0.95] tracking-[-0.01em]">
            Brand files.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-[#C5C5C0]">
            Served from <code className="text-cyan">/press/</code>. Wordmark
            SVGs ship after the brand asset finalization. Color palette is
            locked.
          </p>
        </div>

        <div className="border-[3px] border-paper">
          {assets.map((a, idx) => (
            <div
              key={a.file}
              className={`grid grid-cols-1 gap-4 p-5 md:grid-cols-[1.5fr_2fr_auto] md:items-center md:gap-8 md:p-6 ${
                idx < assets.length - 1
                  ? "border-b-[1.5px] border-paper"
                  : ""
              }`}
            >
              <code className="font-mono text-[13px] text-cyan">
                {a.file}
              </code>
              <p className="text-[14px] leading-relaxed text-paper">
                {a.purpose}
              </p>
              <span
                className={`justify-self-start border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
                  a.status === "Locked"
                    ? "border-cyan bg-cyan text-ink"
                    : "border-muted text-muted"
                }`}
              >
                {a.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/press/hvrbor-club-colors.json"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[3px] border-paper bg-transparent px-8 py-[18px] font-mono text-[12px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-paper hover:text-ink transition-all"
          >
            Download colors.json →
          </a>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
              03 / Contact
            </div>
            <h2 className="font-display text-[clamp(40px,6vw,88px)] uppercase leading-[0.9] tracking-[-0.02em]">
              Press inquiries.
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${PRESS_EMAIL}`}
              className="border-hard bg-ink px-8 py-[18px] font-mono text-[14px] uppercase tracking-[0.2em] text-paper no-underline hover:bg-cyan hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-soft transition-all md:self-start"
            >
              {PRESS_EMAIL} →
            </a>
            <p className="text-[16px] leading-relaxed">
              Founder bios, on-water photography, and Episode imagery ship
              with the SEAson 1 press kit in May 2026. Filing requests
              earlier? Email above with deadline and outlet.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              48-hour response window during business days.
            </p>
          </div>
        </div>
      </section>

      <GuestFooter />
    </main>
  );
}

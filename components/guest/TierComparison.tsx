import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { membershipTiers } from "@/lib/membership";

export default function TierComparison() {
  return (
    <section
      id="tiers"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="01 / The Tiers"
        title={
          <>
            Three tiers.
            <br />
            One Harbor.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {membershipTiers.map((tier) => {
          const isCaptain = tier.id === "captain";
          const isCommodore = tier.id === "commodore";
          return (
            <article
              key={tier.id}
              className={`flex flex-col gap-6 border-[3px] p-8 md:p-10 ${
                isCaptain
                  ? "border-cyan bg-cyan/5"
                  : isCommodore
                  ? "border-ink bg-ink text-paper"
                  : "border-ink"
              }`}
            >
              <div>
                <div
                  className={`mb-4 font-mono text-[11px] uppercase tracking-[0.3em] ${
                    isCommodore ? "text-cyan" : "text-cyan-deep"
                  }`}
                >
                  {tier.positioning}
                </div>
                <h3 className="font-display text-[64px] uppercase leading-[0.9] tracking-[-0.01em]">
                  {tier.label}
                </h3>
              </div>

              <div className="border-y border-current py-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[44px] leading-none">
                    {tier.price}
                  </span>
                  {tier.priceCadence && (
                    <span className="font-sub text-[18px] tracking-wide">
                      {tier.priceCadence}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 font-mono text-[10px] uppercase tracking-[0.2em] ${
                    isCommodore ? "text-muted" : "text-muted"
                  }`}
                >
                  {tier.priceNote}
                </p>
              </div>

              <p className="text-[15px] leading-relaxed">{tier.description}</p>

              <ul className="flex flex-col gap-4 border-t border-current pt-5">
                {tier.benefits.map((b) => (
                  <li
                    key={`${tier.id}-${b.category}`}
                    className="grid grid-cols-[110px_1fr] gap-3 text-[14px] leading-relaxed"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-deep">
                      {b.category}
                    </span>
                    <span>{b.detail}</span>
                  </li>
                ))}
              </ul>

              {tier.cta.href.startsWith("/") ? (
                <Link
                  href={tier.cta.href}
                  className={`mt-auto inline-flex items-center justify-center border-[3px] px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] no-underline transition-all hover:-translate-x-1 hover:-translate-y-1 ${
                    isCommodore
                      ? "border-cyan bg-cyan text-ink hover:shadow-hard-cyan"
                      : isCaptain
                      ? "border-ink bg-ink text-paper hover:bg-cyan hover:text-ink hover:border-cyan"
                      : "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper"
                  }`}
                >
                  {tier.cta.label}
                </Link>
              ) : (
                <span
                  className={`mt-auto inline-flex items-center justify-center border-[3px] px-6 py-4 font-mono text-[12px] uppercase tracking-[0.2em] ${
                    isCommodore
                      ? "border-cyan text-cyan"
                      : "border-ink text-ink"
                  }`}
                >
                  {tier.cta.label}
                </span>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

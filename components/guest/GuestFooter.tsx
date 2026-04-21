import {
  DECK_URL,
  PRESS_EMAIL,
  CREW_EMAIL,
  BRAND_LINE,
  PARENT_BRAND,
} from "@/lib/config";

export default function GuestFooter() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-20 text-paper md:px-10">
      <div className="mb-12 border-b border-line pb-10">
        <div className="relative font-display text-[clamp(56px,12vw,220px)] uppercase leading-[0.85] tracking-[-0.02em]">
          HVRBOR.CLUB<span className="text-cyan">.</span>
        </div>
        <p className="mt-6 font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide text-paper">
          {BRAND_LINE} A {PARENT_BRAND} brand. SEAson 1 premieres June 20.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-[60px] md:grid-cols-2 md:gap-[80px]">
        <FooterCol title="Experience">
          <FooterLink href="#day">The Day</FooterLink>
          <FooterLink href="#included">What's Included</FooterLink>
          <FooterLink href="#calendar">Calendar</FooterLink>
          <FooterLink href="#faq">FAQ</FooterLink>
        </FooterCol>

        <FooterCol title="Connect">
          <FooterLink href="#" external>
            Instagram
          </FooterLink>
          <FooterLink href="#" external>
            TikTok
          </FooterLink>
          <FooterLink href={`mailto:${PRESS_EMAIL}`}>Press</FooterLink>
          <FooterLink href={`mailto:${CREW_EMAIL}`}>Crew</FooterLink>
        </FooterCol>
      </div>

      <div className="mb-8 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:flex-row md:items-center">
        <div>
          HVRBOR LLC / A <span className="text-paper">GHXSTSHIP</span> Brand
          / Miami
        </div>
        <div>Launch / June 2026</div>
        <a
          href={DECK_URL}
          className="text-muted no-underline transition-colors hover:text-cyan"
        >
          Investors, Partners, Press →
        </a>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70">
        No yachts were harmed in the making of this website.
        <br />A few Saturdays were improved considerably.
      </p>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan">
        {title}
      </span>
      {children}
    </div>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const extraProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      {...extraProps}
      className="font-sub text-[18px] tracking-wide text-paper no-underline transition-colors hover:text-cyan"
    >
      {children}
    </a>
  );
}

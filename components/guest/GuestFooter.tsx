import { DECK_URL } from "@/lib/config";

export default function GuestFooter() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-20 text-paper md:px-10">
      <div className="mb-[60px] grid grid-cols-1 gap-[60px] border-b border-line pb-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="relative font-display text-[clamp(64px,14vw,220px)] uppercase leading-[0.85] tracking-[-0.02em]">
            HVRBR<span className="text-cyan">.CLUB</span>
          </div>
        </div>

        <FooterCol title="Experience">
          <FooterLink href="#day">The Day</FooterLink>
          <FooterLink href="#included">What's Included</FooterLink>
          <FooterLink href="#sailings">Sailings</FooterLink>
          <FooterLink href="#faq">FAQ</FooterLink>
        </FooterCol>

        <FooterCol title="Connect">
          <FooterLink href="https://instagram.com/hvrbr.club" external>
            Instagram
          </FooterLink>
          <FooterLink href="https://tiktok.com/@hvrbr.club" external>
            TikTok
          </FooterLink>
          <FooterLink href="mailto:press@hvrbr.club">Press</FooterLink>
          <FooterLink href="mailto:partnerships@hvrbr.club">
            Partnerships
          </FooterLink>
          <FooterLink href="mailto:careers@hvrbr.club">Careers</FooterLink>
          <FooterLink href="mailto:hello@hvrbr.club">Crew</FooterLink>
        </FooterCol>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:flex-row md:items-center">
        <div>
          HVRBR.CLUB LLC / A <span className="text-paper">GHXSTSHIP</span> Brand
        </div>
        <div>Miami / Launch June 2026</div>
        <a
          href={DECK_URL}
          className="text-muted no-underline transition-colors hover:text-cyan"
        >
          Press / Investors / Partners →
        </a>
      </div>
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

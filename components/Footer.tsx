export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-20 text-paper md:px-10">
      <div className="mb-[60px] grid grid-cols-1 gap-[60px] border-b border-line pb-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="relative font-display text-[clamp(100px,18vw,280px)] uppercase leading-[0.85] tracking-[-0.02em]">
            HVRBOR<span className="text-cyan">.</span>
          </div>
        </div>

        <FooterCol title="The Product">
          <FooterLink href="#thesis">Thesis</FooterLink>
          <FooterLink href="#day">The Day</FooterLink>
          <FooterLink href="#scaling">Fleet</FooterLink>
          <FooterLink href="#economics">Economics</FooterLink>
        </FooterCol>

        <FooterCol title="Engage">
          <FooterLink href="#audience">Investors</FooterLink>
          <FooterLink href="#audience">Partners</FooterLink>
          <FooterLink href="#audience">Sponsors</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterCol>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:flex-row md:items-center">
        <div>
          HVRBOR LLC / A <span className="text-paper">GHXSTSHIP</span> Brand
        </div>
        <div>Miami / Launch June 2026</div>
        <div>© 2026</div>
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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-sub text-[18px] tracking-wide text-paper no-underline transition-colors hover:text-cyan"
    >
      {children}
    </a>
  );
}

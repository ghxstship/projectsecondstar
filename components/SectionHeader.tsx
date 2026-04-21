type Props = {
  num: string;
  title: React.ReactNode;
  light?: boolean;
};

export default function SectionHeader({ num, title, light = false }: Props) {
  return (
    <div
      className={`mb-20 grid grid-cols-1 items-start gap-10 border-b-[3px] pb-10 md:grid-cols-[auto_1fr] ${
        light ? "border-paper" : "border-ink"
      }`}
    >
      <div
        className={`pt-5 font-mono text-[13px] uppercase tracking-[0.3em] ${
          light ? "text-cyan" : "text-muted"
        }`}
      >
        {num}
      </div>
      <h2
        className={`font-display text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-[-0.01em] uppercase ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

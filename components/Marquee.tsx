export default function Marquee() {
  const items = [
    "Biscayne Bay",
    "Sandbar Anchor",
    "Sunrise Breathwork",
    "Soft Club Sets",
    "Founder Flotillas",
    "Curated Day Format",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y-[3px] border-ink bg-ink py-5 text-paper">
      <div className="flex animate-marquee gap-[60px] whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-[60px] font-display text-[32px] uppercase tracking-wide"
          >
            {item}
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-cyan" />
          </div>
        ))}
      </div>
    </div>
  );
}

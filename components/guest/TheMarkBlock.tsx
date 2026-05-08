import SectionHeader from "../SectionHeader";

const finishes = [
  {
    tier: "Crew",
    finish: "Matte black",
    description:
      "Earned by sailing one Episode. Numbered on the back with your Origin Episode and SEAson.",
  },
  {
    tier: "Captain",
    finish: "Brushed steel",
    description:
      "Annual membership tier. Lower numbers signal earlier Crew. Pre-loaded with the Mark Wallet house account.",
  },
  {
    tier: "Commodore",
    finish: "Brass",
    description:
      "Invitation only. Limited to fifty numbered seats per SEAson. The number is permanent — replacement Marks issued once.",
  },
];

export default function TheMarkBlock() {
  return (
    <section
      id="the-mark"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="03 / The Mark"
        title={
          <>
            Numbered.
            <br />
            Permanent.
          </>
        }
      />

      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <p className="text-[18px] leading-relaxed">
            The Mark is the physical card every Crew member receives after
            their first Episode. It is numbered. The number reflects when you
            sailed, not what you paid. Lower numbers indicate earlier Crew.
          </p>
          <p className="mt-6 text-[18px] leading-relaxed">
            Three finishes by tier. The finish telegraphs the tier without
            being loud about it. The number telegraphs the seniority. Together
            they are the only two pieces of information the card carries.
          </p>
          <p className="mt-6 font-sub text-[24px] leading-snug tracking-wide">
            A receipt for showing up. Not a status symbol.
          </p>
        </div>

        <div className="grid grid-cols-1 border-[3px] border-ink">
          {finishes.map((f, idx) => (
            <div
              key={f.tier}
              className={`grid grid-cols-[120px_1fr] gap-6 p-6 md:grid-cols-[160px_1fr] md:p-8 ${
                idx < finishes.length - 1
                  ? "border-b-[1.5px] border-ink"
                  : ""
              }`}
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-deep">
                  {f.tier}
                </div>
                <div className="mt-2 font-display text-[28px] uppercase leading-none">
                  {f.finish}
                </div>
              </div>
              <p className="text-[14px] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

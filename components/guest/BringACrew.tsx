import SectionHeader from "../SectionHeader";
import { bringACrewRules } from "@/lib/crew";

export default function BringACrew() {
  return (
    <section
      id="bring-a-crew"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <SectionHeader
        num="03 / Bring-a-Crew"
        title={
          <>
            The room
            <br />
            curates itself.
          </>
        }
      />

      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div>
          <p className="text-[18px] leading-relaxed">
            Applications matter less than the network. The way new Crew gets
            in is through the +1 — vouched by someone already in the room.
          </p>
          <p className="mt-6 text-[18px] leading-relaxed">
            Crew brings Crew. Captain sponsors Crew. Commodore extends
            invitations. The Crew names the next class.
          </p>
        </div>

        <div className="grid grid-cols-1 border-[3px] border-ink">
          {bringACrewRules.map((rule, idx) => (
            <div
              key={rule.tier}
              className={`grid grid-cols-[120px_1fr] gap-6 p-6 md:grid-cols-[160px_1fr] md:p-8 ${
                idx < bringACrewRules.length - 1
                  ? "border-b-[1.5px] border-ink"
                  : ""
              }`}
            >
              <div>
                <div className="font-display text-[28px] uppercase leading-none">
                  {rule.tier}
                </div>
              </div>
              <p className="text-[14px] leading-relaxed">{rule.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

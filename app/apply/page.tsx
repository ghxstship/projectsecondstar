import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import ApplyForm from "@/components/guest/ApplyForm";

export const metadata = {
  title: "HVRBOR.CLUB / Apply for Captain",
  description:
    "Captain casting opens at Art Basel Miami in December 2026. Standby positions are queued in order received. Lower numbers — earlier Crew.",
};

export default function ApplyPage() {
  return (
    <main>
      <GuestNav />
      <section className="bg-ink px-5 py-20 pt-[140px] text-paper md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / Apply"
          title={
            <>
              Captain
              <br />
              casting.
            </>
          }
          light
        />
        <p className="max-w-[760px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide text-paper">
          The standby list. Ten thousand at the SEAson 1 founding rate. Casting
          opens at Art Basel Miami, December 2026.
        </p>
      </section>
      <ApplyForm />
      <GuestFooter />
    </main>
  );
}

import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import ArchiveRingGrid from "@/components/guest/ArchiveRingGrid";
import HarborTeaser from "@/components/guest/HarborTeaser";

export const metadata = {
  title: "HVRBOR.CLUB / The Archive",
  description:
    "The product layer. Three rings — HVRBOR-direct, co-branded capsules, and partner products + memberships. The Mark, the Origin Capsule, the Future Archives Prints, the Loro Piana capsule, the Faena Resident Suite.",
};

export default function ArchivePage() {
  return (
    <main>
      <GuestNav />

      <section className="bg-paper px-5 py-20 pt-[140px] text-ink md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / The Archive"
          title={
            <>
              What you
              <br />
              take home.
            </>
          }
        />
        <p className="max-w-[760px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
          The product layer of HVRBOR.CLUB. Three concentric rings — what we
          make, what we make with others, and what the Network turns into a
          product.
        </p>
      </section>

      <ArchiveRingGrid ring="hvrbor" num="01" />
      <ArchiveRingGrid ring="co-branded" num="02" />
      <ArchiveRingGrid ring="partner" num="03" />
      <HarborTeaser />
      <GuestFooter />
    </main>
  );
}

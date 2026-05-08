import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import { CREW_EMAIL } from "@/lib/config";

export const metadata = {
  title: "HVRBOR.CLUB / Terms",
  description:
    "How HVRBOR.CLUB membership works, what we promise, and what we ask in return.",
};

export default function TermsPage() {
  return (
    <main>
      <GuestNav />

      <section className="bg-paper px-5 py-20 pt-[140px] text-ink md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / Terms"
          title={
            <>
              How this works.
              <br />
              In plain terms.
            </>
          }
        />
        <p className="max-w-[760px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
          The short version. The full Membership Agreement ships with Captain
          casting at Basel '26.
        </p>
      </section>

      <section className="bg-paper px-5 pb-20 text-ink md:px-10 md:pb-[120px]">
        <div className="mx-auto flex max-w-[820px] flex-col gap-8">
          <Block num="01" title="Episodes.">
            <p>
              Episode bookings are processed through Speakeasy. Cancellations
              follow Speakeasy policy. Weather cancellations are HVRBOR's
              call — if the day is fully cancelled, your seat becomes a
              credit that rolls into any future date.
            </p>
            <p>
              The Crew is curated. Right of refusal sits with HVRBOR for any
              behavior that breaks the room — bottle-service energy on a
              wellness Episode, rudeness to crew, anything that disrupts the
              Saturday for the rest of the boat. Refunds are issued in those
              cases.
            </p>
          </Block>

          <Block num="02" title="Membership.">
            <p>
              Captain memberships are annual and non-refundable. A Captain
              can name a successor — a single transfer of the seat to one
              named Crew member, once per SEAson. Unused Episode allocation
              rolls forward to your renewal.
            </p>
            <p>
              Commodore memberships are by invitation, fifty numbered seats
              per SEAson, and follow the Membership Agreement that ships with
              the invitation. Numbers are permanent. Replacement Marks are
              issued once.
            </p>
          </Block>

          <Block num="03" title="Bottle Episodes.">
            <p>
              Bottle Episodes are private full-boat charters, six to twelve
              guests at a flat rate. Same programming standard as a public
              Episode. Booking, payment, and cancellation terms are confirmed
              in the contract HVRBOR sends after your inquiry.
            </p>
          </Block>

          <Block num="04" title="The Network.">
            <p>
              Network access is brokered between HVRBOR and each partner.
              Reservations, allocations, and member rates are subject to
              partner availability and partner policy. HVRBOR doesn't
              guarantee partner-side performance, but works to make the
              member's experience clean — if a partner can't deliver, we
              refund the cost or substitute equivalent access.
            </p>
          </Block>

          <Block num="05" title="The Mark.">
            <p>
              The Mark is HVRBOR property. Membership grants you the right to
              hold and use it for the duration of your tier. Lost or damaged
              Marks are replaced once. The number is permanent. Reselling or
              transferring a Mark outside the named-successor mechanic voids
              the membership.
            </p>
          </Block>

          <Block num="06" title="The Log + The Archive.">
            <p>
              Photography, film, and content from Episodes is HVRBOR's, with
              a license back to you to use your own likeness on personal
              channels. We won't publish a named Crew member without consent.
              The Archive products you receive are yours to keep — the
              numbered prints, the capsule pieces, the Mark itself.
            </p>
          </Block>

          <Block num="07" title="Disputes.">
            <p>
              Anything that goes sideways: email{" "}
              <a
                href={`mailto:${CREW_EMAIL}`}
                className="text-ink underline decoration-cyan underline-offset-4 hover:text-cyan-deep"
              >
                {CREW_EMAIL}
              </a>{" "}
              first. Subject line "Dispute / [your name]". We aim to resolve
              within 30 days. The full Membership Agreement specifies the
              jurisdiction for anything that escalates beyond that.
            </p>
          </Block>

          <p className="border-l-2 border-cyan-deep pl-4 font-mono text-[12px] uppercase tracking-[0.25em] text-muted">
            Updated April 2026. The full legal version follows at Captain
            casting, December 2026.
          </p>
        </div>
      </section>

      <GuestFooter />
    </main>
  );
}

function Block({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-deep">
        {num}
      </div>
      <h2 className="mb-4 font-display text-[clamp(28px,4vw,48px)] uppercase leading-[0.95] tracking-[-0.01em]">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-[16px] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

import GuestNav from "@/components/guest/GuestNav";
import GuestFooter from "@/components/guest/GuestFooter";
import SectionHeader from "@/components/SectionHeader";
import { PRESS_EMAIL, CREW_EMAIL } from "@/lib/config";

export const metadata = {
  title: "HVRBOR.CLUB / Privacy",
  description:
    "What HVRBOR.CLUB collects, why, how long, and how to ask us to delete it.",
};

export default function PrivacyPage() {
  return (
    <main>
      <GuestNav />

      <section className="bg-paper px-5 py-20 pt-[140px] text-ink md:px-10 md:py-[120px] md:pt-[160px]">
        <SectionHeader
          num="00 / Privacy"
          title={
            <>
              What we keep.
              <br />
              What we don't.
            </>
          }
        />
        <p className="max-w-[760px] font-sub text-[clamp(20px,2.5vw,32px)] leading-tight tracking-wide">
          A short version. The legal full text ships with the SEAson 1 launch
          in May 2026.
        </p>
      </section>

      <section className="bg-paper px-5 pb-20 text-ink md:px-10 md:pb-[120px]">
        <div className="mx-auto flex max-w-[820px] flex-col gap-8">
          <Block num="01" title="What we collect.">
            <p>
              When you apply for Captain, join the standby list, request a
              Bottle Episode, sign up for The Log, or contact the Harbor: your
              name, email, phone if you give it, and what you wrote in the
              form. When you book an Episode through Speakeasy: whatever
              Speakeasy shares back with us — typically the name on the seat
              and the email used to book.
            </p>
            <p>
              When you visit the site: standard server logs (IP, user agent,
              referrer, timestamp). We don't run third-party analytics or ad
              trackers. We don't sell data, ever.
            </p>
          </Block>

          <Block num="02" title="Why we keep it.">
            <p>
              To answer your application. To run the membership. To know
              whose number is on which Mark. To send the SEAson updates you
              asked for. Nothing else.
            </p>
          </Block>

          <Block num="03" title="How long we keep it.">
            <p>
              Standby applications: until casting closes for the SEAson, plus
              a year. Active membership records: for the duration of your
              membership, plus seven years for tax and accounting. Newsletter
              records: until you unsubscribe.
            </p>
          </Block>

          <Block num="04" title="Who we share it with.">
            <p>
              Service providers we operate through — payments, email,
              hosting, the booking platform. Each holds your data only to
              perform the service. We don't share data with marketing
              partners or advertisers.
            </p>
          </Block>

          <Block num="05" title="Your rights.">
            <p>
              Email{" "}
              <a
                href={`mailto:${CREW_EMAIL}`}
                className="text-ink underline decoration-cyan underline-offset-4 hover:text-cyan-deep"
              >
                {CREW_EMAIL}
              </a>{" "}
              to access, correct, or delete your data. Subject line "Privacy /
              [your name]". 30-day response window, faster in practice. If
              you're in California or the EU/UK, you have the formal CCPA /
              GDPR rights — same address, same response.
            </p>
          </Block>

          <Block num="06" title="Cookies.">
            <p>
              The site sets a small number of cookies for things like
              remembering your dark/light preference if we ever ship that. No
              tracking cookies. No advertising cookies.
            </p>
          </Block>

          <p className="border-l-2 border-cyan-deep pl-4 font-mono text-[12px] uppercase tracking-[0.25em] text-muted">
            Updated April 2026. The full legal version follows at SEAson 1
            launch. For press inquiries, write to{" "}
            <a
              href={`mailto:${PRESS_EMAIL}`}
              className="text-cyan-deep hover:text-ink"
            >
              {PRESS_EMAIL}
            </a>
            .
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

import GuestNav from "@/components/guest/GuestNav";
import GuestHero from "@/components/guest/GuestHero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/guest/Manifesto";
import Timeline from "@/components/Timeline";
import Experience from "@/components/guest/Experience";
import Included from "@/components/guest/Included";
import Sailings from "@/components/guest/Sailings";
import FAQ from "@/components/guest/FAQ";
import BookingCTA from "@/components/guest/BookingCTA";
import GuestFooter from "@/components/guest/GuestFooter";

export default function Home() {
  return (
    <main>
      <GuestNav />
      <GuestHero />
      <Marquee />
      <Manifesto />
      <Timeline />
      <Experience />
      <Included />
      <Sailings />
      <FAQ />
      <BookingCTA />
      <GuestFooter />
    </main>
  );
}

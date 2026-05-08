import GuestNav from "@/components/guest/GuestNav";
import EpisodesHero from "@/components/guest/EpisodesHero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/guest/Manifesto";
import Timeline from "@/components/Timeline";
import Experience from "@/components/guest/Experience";
import Included from "@/components/guest/Included";
import Itineraries from "@/components/guest/Itineraries";
import Calendar from "@/components/guest/Calendar";
import BottleEpisodes from "@/components/guest/BottleEpisodes";
import FAQ from "@/components/guest/FAQ";
import BookingCTA from "@/components/guest/BookingCTA";
import GuestFooter from "@/components/guest/GuestFooter";

export const metadata = {
  title: "HVRBOR.CLUB / SEAson 1 Episodes",
  description:
    "Eight Saturdays across Biscayne Bay. The flotilla product — twelve seats per Episode, one chapter at a time. SEAson 1 premieres June 20, 2026.",
};

export default function EpisodesPage() {
  return (
    <main>
      <GuestNav />
      <EpisodesHero />
      <Marquee />
      <Manifesto />
      <Timeline />
      <Experience />
      <Included />
      <Itineraries />
      <Calendar />
      <BottleEpisodes />
      <FAQ />
      <BookingCTA />
      <GuestFooter />
    </main>
  );
}

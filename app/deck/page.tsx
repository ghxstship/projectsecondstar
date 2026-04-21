import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Thesis from "@/components/Thesis";
import Pillars from "@/components/Pillars";
import Timeline from "@/components/Timeline";
import Scaling from "@/components/Scaling";
import Economics from "@/components/Economics";
import Audience from "@/components/Audience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Deck() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Thesis />
      <Pillars />
      <Timeline />
      <Scaling />
      <Economics />
      <Audience />
      <Contact />
      <Footer />
    </main>
  );
}

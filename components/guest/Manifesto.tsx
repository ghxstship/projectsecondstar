export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-paper px-5 py-20 md:px-10 md:py-[140px]"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <h2 className="font-display text-[clamp(56px,9vw,140px)] uppercase leading-[0.85] tracking-[-0.02em]">
          We don't
          <br />
          sell tickets.
          <br />
          We run
          <br />
          the room<span className="text-cyan">.</span>
        </h2>

        <div className="flex flex-col gap-6 pt-2 md:pt-8">
          <p className="text-[18px] leading-relaxed">
            Miami has more charters than any coastline in America. What it
            didn't have was a plot.
          </p>
          <p className="text-[18px] leading-relaxed">
            A rented yacht is not a memory. It is, at best, a footnote — and
            an apology to the deposit on Tuesday.
          </p>
          <p className="text-[18px] leading-relaxed">
            HVRBOR runs the other direction. Every Episode is set end to end.
            The route is planned. The music fits the hour. The food is real
            food. The Crew on your boat is there for the same reason you are.
            None of that is an accident.
          </p>
          <p className="text-[18px] leading-relaxed">
            The Saturdays are the proof. The Network, the Harbor, the Mark,
            the Crew — those are the membership. Saturdays are eight days a
            year. The Harbor is the other three-hundred-and-fifty-seven.
          </p>
          <p className="font-sub text-[28px] leading-snug tracking-wide">
            A Miami Saturday with a producer credit. SEAson 1 has eight
            Episodes. Captain casting opens at Basel.
          </p>
        </div>
      </div>
    </section>
  );
}

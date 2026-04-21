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
          rent boats.
          <br />
          We write
          <br />
          chapters<span className="text-cyan">.</span>
        </h2>

        <div className="flex flex-col gap-6 pt-2 md:pt-8">
          <p className="text-[18px] leading-relaxed">
            Miami has more charters than any coastline in America. What it
            didn't have was a plot.
          </p>
          <p className="text-[18px] leading-relaxed">
            Eight hours of chaos on a rented yacht is not a memory. It's an
            afternoon you regret by Monday and a security deposit you're
            texting about Tuesday.
          </p>
          <p className="text-[18px] leading-relaxed">
            HVRBOR runs the other direction. Every Episode is set end to end.
            The route is planned. The music fits the hour. The food is real
            food. The people on your boat are there for the same reason you
            are. That last part is not an accident.
          </p>
          <p className="font-sub text-[28px] leading-snug tracking-wide">
            This is a Miami Saturday with a producer credit. SEAson 1 has
            eight Episodes. Casting is open.
          </p>
        </div>
      </div>
    </section>
  );
}

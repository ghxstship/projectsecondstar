import SectionHeader from "./SectionHeader";

export default function Thesis() {
  return (
    <section id="thesis" className="bg-paper px-5 py-20 md:px-10 md:py-[120px]">
      <SectionHeader
        num="01 / Thesis"
        title={
          <>
            The Gap
            <br />
            is the Day.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <p className="font-sub text-[clamp(32px,4.5vw,60px)] leading-none tracking-wide">
            Yacht Week isn't a boat. It's a{" "}
            <span className="bg-cyan px-2">flotilla</span>, a route, and a
            social layer. Strip the week off, move it home, and the format
            becomes a <span className="bg-cyan px-2">Saturday</span>.
          </p>
        </div>
        <div className="text-[17px] leading-relaxed space-y-5">
          <p className="text-[20px] font-medium">
            Miami has over 1,000 vessels available for charter on any given
            weekend. Every one of them operates as a private rental. None of
            them run as a curated product.
          </p>
          <p>
            HVRBOR operates the other way. We don't rent boats. We program
            days. Each sailing is choreographed from embarkation to
            disembark — route, soundtrack, hosts, food, content, and community.
            Our vessels sail together, anchor together, and return together.
          </p>
          <p>
            The Yacht Week model doesn't need Croatia. It needs density,
            curation, and a reason to come back. Miami has the demand, the
            demographic, and the coastline. Nobody has productized it.
          </p>
          <p>That's the entire thesis.</p>
        </div>
      </div>
    </section>
  );
}

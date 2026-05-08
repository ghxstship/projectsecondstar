export default function BottleEpisodes() {
  return (
    <section
      id="bottle-episodes"
      className="bg-paper px-5 py-20 text-ink md:px-10 md:py-[120px]"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <div className="mb-6 font-mono text-[12px] uppercase tracking-[0.3em] text-cyan-deep">
            Private / Bottle Episode
          </div>
          <h2 className="font-display text-[clamp(56px,8vw,120px)] uppercase leading-[0.85] tracking-[-0.02em]">
            The whole boat.
            <br />
            Your call sheet<span className="text-cyan">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 pt-2 md:pt-6">
          <p className="text-[17px] leading-relaxed">
            A Bottle Episode is a private full-boat charter. Six to twelve
            guests, flat rate, same programming standard as a public Episode.
            Bachelorettes, birthdays, corporate offsites, wedding welcome days —
            you pick the room, we handle the day.
          </p>
          <ul className="flex flex-col gap-3 border-t border-line pt-6 text-[15px]">
            <li className="grid grid-cols-[140px_1fr] gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Capacity
              </span>
              <span>6–12 guests, captained vessel, 8 hours on the water</span>
            </li>
            <li className="grid grid-cols-[140px_1fr] gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Programming
              </span>
              <span>
                Same Itinerary A or B as a public Episode, customized end to
                end — route, soundtrack, food, content
              </span>
            </li>
            <li className="grid grid-cols-[140px_1fr] gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Captain Credit
              </span>
              <span>
                Captain members receive a Bottle Episode credit applied to
                their first private charter
              </span>
            </li>
            <li className="grid grid-cols-[140px_1fr] gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Inquire
              </span>
              <a
                href="mailto:hello@hvrbor.club?subject=Bottle%20Episode%20Inquiry"
                className="text-ink underline decoration-cyan underline-offset-4 hover:text-cyan-deep"
              >
                hello@hvrbor.club
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ====================================================================
// THE LOG — running publication
// ====================================================================
// Public-facing editorial. Episode previews, Network Moment write-ups,
// founder notes. Phase 1 ships hard-coded; CMS layer comes later.
// ====================================================================

export type LogCategory =
  | "Episode Preview"
  | "Network Moment"
  | "Crew Story"
  | "Partner Spotlight"
  | "Harbor Note"
  | "From the Archive";

export type LogArticle = {
  slug: string;
  title: string;
  category: LogCategory;
  date: string;
  author: string;
  excerpt: string;
  body: string[];
  hero?: boolean;
};

export const logArticles: LogArticle[] = [
  {
    slug: "the-origin-cast-list",
    title: "The Origin / Cast List",
    category: "Episode Preview",
    date: "April 21, 2026",
    author: "The Harbor",
    hero: true,
    excerpt:
      "Episode 01 sails June 20. The longest Saturday of the year. Twelve seats — all on standby — and the founding Crew of SEAson 1.",
    body: [
      "Every ship has a first day. Every Crew has an Origin. SEAson 1 opens on the longest Saturday of the year — six hours on the water, brunch before, Dockside Social after. The bottle breaks at sunset.",
      "Episode 01 is named because it is named — The Origin is not a destination on a map. It is the starting coordinate of everything HVRBOR will become. The first page of the Log. The Crew that sails it becomes the SEAson 1 founding cast — a designation the brand will carry forward in every future SEAson.",
      "The day overlays the FIFA World Cup opening weekend. Uruguay vs Cape Verde kicks off at 6 PM at Hard Rock Stadium the same evening Episode 01 debarks. The Dockside Social runs match highlights on ambient screens — sound low, attention optional. Soft programming for a hard cultural moment.",
      "The Signature Moment at 6:20 PM is The Christening. A bottle of champagne opened across the bow. Every guest takes a pour. One toast for the voyage. One for the SEAson. One for the Crew that showed up first. Sunset as the light.",
      "Episode 01 is on standby. Captain casting opens at Art Basel in December alongside the Finale. Until then, the only path on is to claim a seat on a different Episode and earn The Mark.",
    ],
  },
  {
    slug: "what-the-mark-is",
    title: "What the Mark is — and what it isn't",
    category: "Harbor Note",
    date: "April 19, 2026",
    author: "The Harbor",
    excerpt:
      "A numbered card with your Origin Episode engraved on the back. Not a status symbol. A receipt for showing up.",
    body: [
      "The Mark is the physical card every Crew member receives after their first Episode. It is numbered. The number reflects when you sailed, not what you paid. Lower numbers indicate earlier Crew, full stop.",
      "Three finishes by tier. Matte black for Crew. Brushed steel for Captain. Brass for Commodore. The finish telegraphs the tier without being loud about it. The number telegraphs the seniority. Together they are the only two pieces of information the card carries.",
      "The Mark is not a status symbol in the membership-card sense. It is a receipt for showing up. It does not get you into anything that the corresponding tier does not already get you into. Its function is the moment it lands in the hand of the next Crew member at the next Episode and the conversation starts.",
      "Replacement Marks are issued once. Lost Marks stay lost. The number is permanent.",
    ],
  },
  {
    slug: "fifa-2026-miami-overlay",
    title: "How SEAson 1 Sails the World Cup",
    category: "Network Moment",
    date: "April 17, 2026",
    author: "The Harbor",
    excerpt:
      "Miami hosts seven World Cup matches across SEAson 1's opening three Episodes. Here's how the calendar overlays.",
    body: [
      "SEAson 1's first three Episodes — The Origin, The Lost Meridian, The Sunken Cathedral — sail the same weekends FIFA hosts Miami World Cup matches at Hard Rock Stadium.",
      "This is not coincidence. The SEAson calendar was set against the FIFA Miami match schedule before the Episode names were chosen. The Origin sails the opening weekend. The Lost Meridian sails the Saturday Fourth of July, mid-knockout-rounds. The Sunken Cathedral sails the Bronze Final Day — the third-place match, which is the most globally broadcast non-final fixture of the tournament.",
      "Captain members get ticket allocation against the Miami matches when the official lottery opens. Commodore members get hospitality suite access. Episode programming is built so that the Saturday on the water finishes before the evening match kicks off — which means a same-day pivot from the Dockside Social to the stadium for guests who hold tickets.",
      "The overlay is a single use of the SEAson template that cannot be replicated. Future SEAsons will have their own cultural overlays — Hispanic Heritage Month, Miami Spice, Art Basel build-up — but the World Cup is once a generation. SEAson 1 is the only SEAson that opens against it.",
    ],
  },
  {
    slug: "before-you-write-chapters",
    title: "We don't sell tickets. We run the room.",
    category: "Harbor Note",
    date: "April 14, 2026",
    author: "The Founder",
    excerpt:
      "Why the membership product, why now, and what it changes about the flotilla underneath it.",
    body: [
      "When we started, the unit was a seat on a Saturday. Eight Episodes a year, twelve seats per Episode, ninety-six Saturdays' worth of curated rooms across SEAson 1. That product is real. It is selling. Episode 01 is on standby.",
      "But the Saturdays are the proof point, not the entire product. They are the eight days of the year when you can see, on the water, what HVRBOR is for. The remaining three hundred and fifty-seven days are the reason you stay.",
      "So the membership comes next. Captain at the SEAson 1 founding rate. Commodore by invitation, fifty numbered seats. Crew earned by showing up. The Network spans seven verticals — Entertainment, Sports, Health and Wellness, Hospitality, Travel, Retail, Nightlife — with anchor partners in each. The Harbor is the operating system that holds it all together.",
      "What this changes about the flotilla underneath: nothing. Every Episode is still set end to end. The route is still planned. The music still fits the hour. The food is still real food. What changes is that the flotilla now has a context — a year's worth of programming, a calendar of Network access, a Crew that exists between Saturdays.",
      "We don't sell tickets. We run the room.",
    ],
  },
  {
    slug: "captain-casting-art-basel",
    title: "Captain Casting Opens at Art Basel",
    category: "Harbor Note",
    date: "April 11, 2026",
    author: "The Harbor",
    excerpt:
      "December 2026. The Faena penthouse. Fifty initial Captain seats at the SEAson 1 founding rate.",
    body: [
      "Captain is the annual membership tier. Ten thousand dollars at the SEAson 1 founding rate. The fee includes all eight SEAson 1 Episodes, a Bottle Episode credit, full Network access across seven verticals, and the Harbor concierge.",
      "Captain casting opens at Art Basel Miami in December 2026. The location is the Faena penthouse. The window is the SEAson 1 Finale week — the same week the SEAson 1 recap film premieres and the Episode Finale / The Last Harbor sails the prior Saturday.",
      "Standby positions for the Captain application can be reserved now via the Apply page. Standby is not a guarantee — it is a place in the queue when applications go live. The first fifty Captain seats are SEAson 1 founding members and carry that designation in every future SEAson, including pricing locks at the founding rate for the duration of the membership.",
      "Commodore is invitation-only and is not part of the Captain casting window. Commodore invitations are extended to Captain members based on participation across the SEAson — Episodes sailed, Dockside Salons attended, Network engagement. The first Commodore class is named at Art Basel 2027.",
    ],
  },
  {
    slug: "the-crew-is-not-a-list",
    title: "The Crew is not a list",
    category: "Crew Story",
    date: "April 23, 2026",
    author: "The Harbor",
    excerpt:
      "What we mean when we say the Crew. How the room composes itself. Why the +1 matters more than the application.",
    body: [
      "The Crew is not a list of names. It is the answer to a question — who would you want at the sandbar at 4:20 PM, ankle-deep, with ninety seconds to say what you're working on?",
      "SEAson 1 has ninety-six seats across eight Episodes. The composition isn't accidental. Roughly half the room is operators — founders, senior operators, early-employee number-twos across tech and finance and creative companies. About a fifth are wellness practitioners — the longevity-functional-medicine-recovery class that has made Miami the longevity capital of the United States. The rest is creative leadership, builders, and the variance that keeps the room useful — the doctor, the athlete, the academic.",
      "The Crew curates for variance, not similarity. The room is more useful when it isn't one type.",
      "The way new Crew gets in: the +1. Crew members can request a +1 on any open Episode. The +1 sails as a guest. If they sail again, they're cast as Crew themselves. Captain members sponsor one new Crew member per SEAson — that seat is held at the founding rate, and the number on their Mark is logged with yours. Commodore extends invitations. The Crew curates itself.",
      "The applications matter less than the network. The room composes itself.",
    ],
  },
  {
    slug: "the-archive-is-the-product",
    title: "The Archive is the Product",
    category: "From the Archive",
    date: "April 22, 2026",
    author: "The Harbor",
    excerpt:
      "The first-party line, the co-branded capsules, and the partner network — read as one product surface.",
    body: [
      "The Archive is the product layer of HVRBOR.CLUB. It runs in three concentric rings.",
      "The first ring is HVRBOR-direct. Owned IP. The Mark — the numbered card every Crew member carries. The Origin Capsule that ships with The Mark for SEAson 1 sailors. The Recovery Kit that productizes what every Episode runs on. The Future Archives Prints — Episode 07's 4×5 group portrait, framed, mailed sixty days later. The Stolen Gallery Flag — Episode 05's annual artist commission, gifted by raffle. The Atlas — the Miami guide, opening SEAson 2. The Book — three SEAsons of the Log, bound, in a numbered edition.",
      "The second ring is co-branded capsules. One or two per SEAson. Tied to specific Episodes. Loro Piana × HVRBOR for the SEAson capsule. KITH × Episode 04. Eres × HVRBOR Swim. Stone Island pre-allocations through the SMS list.",
      "The third ring is partner products and memberships — the Network, productized. Continuum panels. Tradewind credits. Othership annual passes. The Faena Resident Suite. Aman day-pass reciprocity. Each of these can be bundled into Captain inclusion or sold at the members rate.",
      "The Archive is what Crew take home. The Saturdays are what they did. The Crew is who they were with. Three things at once.",
    ],
  },
  {
    slug: "the-network-as-product",
    title: "The Network is the Product",
    category: "Harbor Note",
    date: "April 7, 2026",
    author: "The Harbor",
    excerpt:
      "Seven verticals, in priority order. Why the order matters and what's behind it.",
    body: [
      "The Network has seven verticals. The order is not arbitrary.",
      "Entertainment leads because cultural reach is the broadest entry point. Concerts, festivals, premieres, art — these are the rooms a young Captain wants in immediately. Sports follows because Sports is HVRBOR's structural moat. The parent company has thirteen years of operating credentials with Formula 1, the Olympics-network, EDC, Ultra, Red Bull, PATRÓN, Heineken. No Miami members club can deliver that access. We can.",
      "Premium and ultra-premium Health & Wellness comes third — the longevity audience is core to the membership thesis, and Miami is the longevity capital of the United States. Hospitality fourth because membership has to make the global claim true. Travel fifth — that is where the Yacht Week DNA fully lands, with the geographic overlays that scale the flotilla beyond Biscayne Bay.",
      "Retail and Nightlife round out the seven. Retail is the smallest by SKU and the highest by status. Nightlife extends the Episode after-hours room into a year-round programming surface.",
      "Mass-market dining, fitness gyms, coworking, members-club reciprocity — those are not in the Network. They were considered. They were ruled out. The decision to go premium and ultra-premium across all seven verticals is the decision that separates HVRBOR from every other Miami members operation.",
    ],
  },
];

export function getArticleBySlug(slug: string): LogArticle | undefined {
  return logArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): LogArticle[] {
  return logArticles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, count);
}

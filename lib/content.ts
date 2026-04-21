// ====================================================================
// HVRBR.CLUB CONTENT DATA
// ====================================================================
// Central source of truth for pillar copy, timeline acts, fleet
// scaling phases, and audience positioning. Edit here instead of
// touching the components.
// ====================================================================

export type Pillar = {
  num: string;
  title: string;
  titleTwo?: string;
  desc: string;
  integration: string;
};

export type TimelineAct = {
  num: string;
  name: string;
  time: string;
  desc: string;
};

export type Phase = {
  id: 1 | 2 | 3 | 4;
  label: string;
  name: string;
  period: string;
  title: string;
  obj: string;
  desc: string;
  vessels: string;
  capacity: string;
  capacityUnit: string;
  revenue: string;
  capital: string;
  capitalUnit: string;
  fleetOn: number;
  caption: string;
};

export type AudienceItem = {
  num: string;
  text: string;
  meta: string;
};

export type Audience = {
  id: "investor" | "partner" | "sponsor";
  label: string;
  num: string;
  pitchPre: string;
  pitchHighlight: string;
  pitchPost: string;
  body: string;
  boxLabel: string;
  boxTitle: string;
  boxDesc: string;
  boxCta: string;
  items: AudienceItem[];
};

export type RevenueRow = {
  num: string;
  name: string;
  pct: number;
};

// ====================================================================

export const pillars: Pillar[] = [
  {
    num: "/ 01",
    title: "Health",
    titleTwo: "+ Wellness",
    desc: "Miami has become the longevity capital of the United States. Cold plunges on Brickell, functional medicine clinics in Wynwood, breathwork studios in Sunset Harbour. The city rebuilt itself around the idea that wellness is a lifestyle, not a Sunday.",
    integration:
      "Sunrise breathwork sailings. Hydration + adaptogen bar. Functional NA cocktails. Saturday morning \"Recovery Flotilla\" in partnership with Miami studios.",
  },
  {
    num: "/ 02",
    title: "Social",
    titleTwo: "Communities",
    desc: "The members-club economy has exploded in Miami. Casa Tua, ZZ's, Zero Bond, Major Food Group properties — the city runs on curated rooms now. Belonging is the product. Exclusion is the feature.",
    integration:
      "Crew membership tiers. Recurring rider community. Cross-club partnership seats. Invite-only themed sailings for the inner circle.",
  },
  {
    num: "/ 03",
    title: "Soft",
    titleTwo: "Clubbing",
    desc: "Club Space Sundays rewrote the rules. The best music in Miami now happens before midnight. Daytime DJ sets, sober-curious dancefloors, afternoon peak windows — the premium audience has moved off the 2 AM schedule.",
    integration:
      "Curated daytime DJ residencies. Deck-level sound design. Afternoon peak, sunset wind-down. Moderated bar service that respects the room.",
  },
  {
    num: "/ 04",
    title: "Founder's",
    titleTwo: "Economy",
    desc: "Miami is the de facto second city of American tech. Crypto, fintech, VC, and the remote-work elite have reshaped the social fabric. The best networking now looks like leisure. The best leisure now looks like networking.",
    integration:
      "Founder and operator flotillas. Industry-curated sailings. Corporate offsite format. LP + GP sundowner series during Miami Tech Week.",
  },
];

// ====================================================================

export const timelineActs: TimelineAct[] = [
  {
    num: "01",
    name: "Embarkation",
    time: "09:30 — 10:30",
    desc: "Arrival at Miami Beach Marina styled as festival check-in. Wristbands, manifest confirmation, welcome kit, mimosa / espresso martini / functional NA bar open on deck. Safety briefing folded into a hosted welcome. This is the pre-roll content window — first impressions set the tempo for the entire day.",
  },
  {
    num: "02",
    name: "Bay Cruise",
    time: "10:30 — 12:00",
    desc: "Departure south through Government Cut, east along South Beach, then west into Biscayne Bay past Star, Palm, Hibiscus. Narrated drive-by of Millionaire's Row with full legal fluency around 2025 Anchoring Limitation Act restrictions. Curated morning DJ set designed for daytime deck energy. Calibration phase — the peak is still coming.",
  },
  {
    num: "03",
    name: "Sandbar Anchor",
    time: "12:00 — 14:30",
    desc: "The centerpiece. Permitted anchor at Haulover or Nixon Sandbar depending on conditions. Lunch service, floating mats deployed, swim window, raft-up choreography with sister vessels at full fleet scale. This is where Yacht Week's magic lives — and Miami has no curated equivalent. The sandbar is the anchor experience, literally and emotionally.",
  },
  {
    num: "04",
    name: "Stiltsville Pass",
    time: "14:30 — 16:30",
    desc: "Move south to Stiltsville for the iconic content moment, continue along Virginia Key and Key Biscayne. Energy shift — bar transitions from daytime spritzes to a focused afternoon list. The 3–5 PM storm watch window opens here; the route is designed with abort-to-marina options from every anchor point, built into the captain's playbook.",
  },
  {
    num: "05",
    name: "Sunset Return",
    time: "16:30 — 18:00",
    desc: "Return leg through the ICW or along South Beach with the golden-hour content window open. Final on-board set, closing ceremonies, disembarkation. Optional after-hours extension at a partnered Ocean Drive or Washington Ave venue for the guests who want to keep going. Content package delivered to every guest within 72 hours.",
  },
];

// ====================================================================

export const phases: Phase[] = [
  {
    id: 1,
    label: "Phase 01",
    name: "MVP Flagship",
    period: "June — August 2026",
    title: "Prove the Day",
    obj: "One vessel. Twelve sailings. Repeatable experience.",
    desc: "The MVP phase is deliberately small. One flagship 12-pax vessel running Saturday sailings from Miami Beach Marina across a 12-week pilot season. Success is not revenue — success is a documented, repeatable day with NPS above 50, zero safety incidents, and proven unit economics at single-vessel scale. This validates the format before capital scales the fleet.",
    vessels: "01",
    capacity: "12",
    capacityUnit: "/ Day",
    revenue: "$3.8K",
    capital: "$220K",
    capitalUnit: "/ Min",
    fleetOn: 1,
    caption: "1 / 10 vessels deployed",
  },
  {
    id: 2,
    label: "Phase 02",
    name: "Mini Flotilla",
    period: "September 2026 — May 2027",
    title: "The Flotilla Begins",
    obj: "Three vessels sailing together. The raft-up starts here.",
    desc: "Three is the minimum viable flotilla. This is the moment HVRBR.CLUB stops being a better charter and starts being the Yacht Week equivalent. We expand to Saturday and Sunday public sailings, introduce themed monthly programs, launch price laddering, and hire our first full-time ops team. Winter operates on a curated corporate and private charter mix — demand stays steady year-round.",
    vessels: "03",
    capacity: "36",
    capacityUnit: "/ Day",
    revenue: "$14K",
    capital: "$500K",
    capitalUnit: "/ Mid",
    fleetOn: 3,
    caption: "3 / 10 vessels deployed",
  },
  {
    id: 3,
    label: "Phase 03",
    name: "Full Flotilla",
    period: "June 2027 onward",
    title: "Full Flotilla",
    obj: "Six to ten vessels. Choreographed days. Peak product.",
    desc: "Full Yacht Week equivalent. Six to ten coordinated vessels executing a choreographed day with flagship-led raft-up formations and cross-vessel programming. Target 40 public sailing days per year, supported by dedicated corporate and private channels. Target annualized EBITDA of $600K–$800K at Miami steady-state, before any replication revenue. This is the case we write to institutional capital.",
    vessels: "06-10",
    capacity: "85",
    capacityUnit: "/ Day",
    revenue: "$55K",
    capital: "$1.5M",
    capitalUnit: "/ Target",
    fleetOn: 8,
    caption: "8 / 10 vessels deployed",
  },
  {
    id: 4,
    label: "Phase 04",
    name: "Replication",
    period: "2028 onward",
    title: "Beyond Miami",
    obj: "Fleet-as-a-service. Format licensing. Multi-city.",
    desc: "HVRBR.CLUB productizes into a deployable format for other markets. Tampa Bay, Austin and Lake Travis, Lake of the Ozarks, San Diego, Long Beach, Lake Lanier, plus seasonal overlays in BVI and Ibiza. Three expansion vectors run in parallel: owned geographic replication, format licensing to local charter operators, and event overlay service into festivals and conferences. The platform is the business.",
    vessels: "Multi-city",
    capacity: "500+",
    capacityUnit: "/ Day",
    revenue: "$250K+",
    capital: "$3M+",
    capitalUnit: "/ Series A",
    fleetOn: 10,
    caption: "Fleet fully deployed / replication live",
  },
];

// ====================================================================

export const revenueStack: RevenueRow[] = [
  { num: "01", name: "Public Ticket Sales", pct: 55 },
  { num: "02", name: "Private Charter", pct: 18 },
  { num: "03", name: "F&B + Upsell", pct: 10 },
  { num: "04", name: "Sponsorship", pct: 8 },
  { num: "05", name: "Corporate Retreats", pct: 5 },
  { num: "06", name: "Creator + Content", pct: 4 },
];

// ====================================================================

export const audiences: Audience[] = [
  {
    id: "investor",
    label: "Investors",
    num: "/ 01",
    pitchPre: "A new consumer brand inside a ",
    pitchHighlight: "proven platform",
    pitchPost:
      " — launching into Miami's deepest year-round demand window.",
    body: "HVRBR.CLUB is a new entity nested under GHXSTSHIP Industries, a production and technology company with 13+ years of operations across 52 countries and live event credentials spanning Formula 1, EDC, Ultra, PATRÓN, Red Bull, and Heineken. HVRBR.CLUB is capital-light by design — vessels are chartered, not owned, in the pilot and scaling phases. We're raising against a proven operating team, not a thesis.",
    boxLabel: "Current Round",
    boxTitle: "$300K Pre-Seed",
    boxDesc:
      "Capital deployed across Phase 1 pilot (June–August 2026) and Phase 2 expansion to three-vessel flotilla through spring 2027. Institutional round sized against Phase 2 performance data.",
    boxCta: "Request Deck",
    items: [
      { num: "/ 01", text: "Proven operating team", meta: "GHXSTSHIP" },
      { num: "/ 02", text: "Capital-light vessel strategy", meta: "Charter model" },
      { num: "/ 03", text: "Multi-stream revenue stack", meta: "6 channels" },
      { num: "/ 04", text: "Productized experience IP", meta: "Licensable" },
      { num: "/ 05", text: "Miami to multi-city path", meta: "2028 plan" },
      { num: "/ 06", text: "Platform infra already built", meta: "GVTEWAY" },
      { num: "/ 07", text: "June launch / summer shoulder", meta: "Open lane" },
    ],
  },
  {
    id: "partner",
    label: "Partners",
    num: "/ 02",
    pitchPre: "We don't compete with Miami's best rooms. We ",
    pitchHighlight: "extend them onto the water.",
    pitchPost: "",
    body: "HVRBR.CLUB is a complementary layer to the Miami hospitality, wellness, and members-club ecosystem. Partner venues get a curated on-water channel for their members, a seasonal content destination, and a new category of programming that doesn't exist in their four walls. The flotilla becomes a satellite of your brand for a day.",
    boxLabel: "Partner Categories",
    boxTitle: "Co-Branded Day Programs",
    boxDesc:
      "Hotels. Members clubs. Wellness studios. F&B groups. Creative-industry collectives. Partnership structures range from per-sailing integrations to recurring seasonal residencies.",
    boxCta: "Open Conversation",
    items: [
      { num: "/ 01", text: "Hotel + hospitality", meta: "Member perks" },
      { num: "/ 02", text: "Members clubs", meta: "Extension days" },
      { num: "/ 03", text: "Wellness + longevity studios", meta: "Recovery flotillas" },
      { num: "/ 04", text: "F&B + specialty beverage", meta: "Menu curation" },
      { num: "/ 05", text: "Fashion + swim brands", meta: "Uniform co-design" },
      { num: "/ 06", text: "VC + founder collectives", meta: "Offsite format" },
      { num: "/ 07", text: "Creative + cultural institutions", meta: "Themed series" },
    ],
  },
  {
    id: "sponsor",
    label: "Sponsors",
    num: "/ 03",
    pitchPre: "Brand activation on water hits different — because ",
    pitchHighlight: "nobody scrolls on a boat.",
    pitchPost: "",
    body: "HVRBR.CLUB's audience is captive for eight hours in a designed, content-rich environment. The ROI math is simple: every guest produces multiples of their ticket value in organic content, and every sponsor integration lives inside that content in a way paid social can't replicate. We build tiered activation structures against the season, individual sailings, and single-activation moments.",
    boxLabel: "Activation Tiers",
    boxTitle: "Season / Sailing / Moment",
    boxDesc:
      "Season-long title sponsorship (spirits, wellness, fashion categories available). Individual sailing ownership. On-water activations and custom moments. Full creative development by the GHXSTSHIP production team.",
    boxCta: "Brief Us",
    items: [
      { num: "/ 01", text: "Spirits + premium NA", meta: "Category exclusive" },
      { num: "/ 02", text: "Wellness + functional", meta: "Morning takeover" },
      { num: "/ 03", text: "Fashion + swim", meta: "Uniform partnership" },
      { num: "/ 04", text: "Automotive + luxury", meta: "Marina activation" },
      { num: "/ 05", text: "Tech + fintech", meta: "Founder flotilla" },
      { num: "/ 06", text: "Media + content platforms", meta: "Content partner" },
      { num: "/ 07", text: "Travel + hospitality", meta: "Cross-promotion" },
    ],
  },
];

// ====================================================================
// GUEST-FACING CONTENT
// ====================================================================

export type GuestPillar = {
  num: string;
  title: string;
  body: string;
};

export type IncludedItem = {
  num: string;
  name: string;
  detail: string;
};

export type SailingStatus = "open" | "waitlist";

export type Sailing = {
  date: string;
  theme: string;
  seatsLabel: string;
  status: SailingStatus;
};

export type GuestFaq = {
  question: string;
  answer: string;
};

export const guestPillars: GuestPillar[] = [
  {
    num: "/ 01",
    title: "Start Clean.",
    body: "Mornings on HVRBR.CLUB don't start at the bar. They start with breathwork on the foredeck, hydration from a functional adaptogen bar, and a founder's dose of silence on the water before Miami wakes up. Arrive tired. Leave reset.",
  },
  {
    num: "/ 02",
    title: "Move With The Room.",
    body: "Our DJs understand daylight. No one is screaming over a 2 AM bassline. Just the right tempo at the right hour, engineered for eight-hour stamina. Soft-club energy, Biscayne Bay edition.",
  },
  {
    num: "/ 03",
    title: "Meet The Crew.",
    body: "The people on your boat are not an accident. Every sailing is curated — founders, operators, creatives, and the occasional person you've been trying to meet for six months. The most valuable conversation of your year might happen at the sandbar.",
  },
  {
    num: "/ 04",
    title: "End Full.",
    body: "Sunset return along the skyline, final set from your DJ, a content package delivered to your inbox within 72 hours, and an optional after-hours extension at a partnered Ocean Drive room. You'll still be talking about it Wednesday.",
  },
];

export const guestIncluded: IncludedItem[] = [
  {
    num: "01",
    name: "Captained Vessel",
    detail: "8 hours / 12-seat maximum",
  },
  {
    num: "02",
    name: "Full-Day Food & Beverage",
    detail: "Functional NA menu + premium bar",
  },
  {
    num: "03",
    name: "Curated DJ",
    detail: "Daytime residency program, live on deck",
  },
  {
    num: "04",
    name: "Professional Photography",
    detail: "Delivered to inbox in 72 hours",
  },
  {
    num: "05",
    name: "Hosted Programming",
    detail: "Embarkation to disembarkation",
  },
  {
    num: "06",
    name: "Recovery Kit",
    detail: "Sun, hydration, small rituals",
  },
  {
    num: "07",
    name: "Optional After-Hours",
    detail: "Partnered Ocean Drive extension",
  },
];

export const guestSailings: Sailing[] = [
  {
    date: "June 6, 2026",
    theme: "Launch Flotilla",
    seatsLabel: "4 seats left",
    status: "open",
  },
  {
    date: "June 13, 2026",
    theme: "Founders Edition",
    seatsLabel: "Waitlist",
    status: "waitlist",
  },
  {
    date: "June 20, 2026",
    theme: "Recovery Flotilla",
    seatsLabel: "8 seats left",
    status: "open",
  },
  {
    date: "June 27, 2026",
    theme: "Pride Edition",
    seatsLabel: "2 seats left",
    status: "open",
  },
  {
    date: "July 4, 2026",
    theme: "Independence Sundowner",
    seatsLabel: "Waitlist",
    status: "waitlist",
  },
  {
    date: "July 11, 2026",
    theme: "Open Flotilla",
    seatsLabel: "11 seats left",
    status: "open",
  },
];

export const guestFaqs: GuestFaq[] = [
  {
    question: "Do I need to know anyone to book?",
    answer:
      "No. HVRBR.CLUB is designed for solo seat buyers just as much as groups. Every sailing is curated to balance energy, so you'll walk off knowing names worth knowing.",
  },
  {
    question: "Is this a party boat?",
    answer:
      "No. HVRBR.CLUB is a designed day experience. Music is part of it. So is breathwork, food, conversation, and content. Guests who show up looking for a bottle-service cruise are typically disappointed.",
  },
  {
    question: "What if I don't drink?",
    answer:
      "You'll be well taken care of. HVRBR.CLUB runs a fully-stocked functional NA bar with adaptogens, tonics, and craft non-alcoholic cocktails alongside the spirits list. Sober-curious guests are a core part of every sailing.",
  },
  {
    question: "What should I wear?",
    answer:
      "Swim under, something you'd wear to a Miami rooftop over. A light layer for the return leg. We send a prep note with specifics 48 hours before your sailing.",
  },
  {
    question: "What if the weather turns?",
    answer:
      "Miami afternoons can surprise anyone. The day is structured to complete the peak experience before typical storm windows, and every sailing has an abort-to-marina plan built into the route. If a sailing is fully cancelled, you get a credit that rolls into any future HVRBR.CLUB date.",
  },
  {
    question: "Can I book the whole boat?",
    answer:
      "Yes. Private charters are available for 6\u201312 guests at a flat rate. Bachelorettes, birthdays, corporate off-sites, wedding weekends. The \u201cBook\u201d flow handles private inquiries too \u2014 select the private option at checkout.",
  },
  {
    question: "Where does it depart?",
    answer:
      "Miami Beach Marina. Exact slip and check-in details are sent 48 hours before your sailing.",
  },
  {
    question: "Do you sail year-round?",
    answer:
      "Our primary public sailing season is May through October. November through April runs on a private-charter and themed-sailing calendar. Sign up for the list to be notified when winter dates open.",
  },
];

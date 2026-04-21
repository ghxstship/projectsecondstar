// ====================================================================
// HVRBOR.CLUB CONTENT DATA
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
    desc: "Three is the minimum viable flotilla. This is the moment HVRBOR.CLUB stops being a better charter and starts being the Yacht Week equivalent. We expand to Saturday and Sunday public sailings, introduce themed monthly programs, launch price laddering, and hire our first full-time ops team. Winter operates on a curated corporate and private charter mix — demand stays steady year-round.",
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
    desc: "HVRBOR.CLUB productizes into a deployable format for other markets. Tampa Bay, Austin and Lake Travis, Lake of the Ozarks, San Diego, Long Beach, Lake Lanier, plus seasonal overlays in BVI and Ibiza. Three expansion vectors run in parallel: owned geographic replication, format licensing to local charter operators, and event overlay service into festivals and conferences. The platform is the business.",
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
    body: "HVRBOR.CLUB is a new entity nested under GHXSTSHIP Industries, a production and technology company with 13+ years of operations across 52 countries and live event credentials spanning Formula 1, EDC, Ultra, PATRÓN, Red Bull, and Heineken. HVRBOR.CLUB is capital-light by design — vessels are chartered, not owned, in the pilot and scaling phases. We're raising against a proven operating team, not a thesis.",
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
    body: "HVRBOR.CLUB is a complementary layer to the Miami hospitality, wellness, and members-club ecosystem. Partner venues get a curated on-water channel for their members, a seasonal content destination, and a new category of programming that doesn't exist in their four walls. The flotilla becomes a satellite of your brand for a day.",
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
    body: "HVRBOR.CLUB's audience is captive for eight hours in a designed, content-rich environment. The ROI math is simple: every guest produces multiples of their ticket value in organic content, and every sponsor integration lives inside that content in a way paid social can't replicate. We build tiered activation structures against the season, individual sailings, and single-activation moments.",
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

export type EpisodeStatusType =
  | "standby"
  | "critical"
  | "limited"
  | "available";

export type GuestEpisode = {
  id: string;
  episodeNumber: string;
  episodeLabel: string;
  date: string;
  day: string;
  year: string;
  destination: string;
  itinerary: "A" | "B";
  itineraryLabel: string;
  status: string;
  statusType: EpisodeStatusType;
  tagline: string;
  description: string;
  signatureMoment: string;
  culturalOverlay: string;
};

export type ItinerarySlot = {
  time: string;
  action: string;
};

export type Itinerary = {
  label: string;
  duration: string;
  description: string;
  slots: ItinerarySlot[];
};

export type GuestFaq = {
  question: string;
  answer: string;
};

export const guestPillars: GuestPillar[] = [
  {
    num: "/ 01",
    title: "Start Clean.",
    body: "Mornings don't start at the bar. They start with breathwork on the foredeck, a functional bar with adaptogens that actually do something, and about forty-five minutes of calm water before Miami gets loud. Show up tired. Leave reset. The sandwich is coming.",
  },
  {
    num: "/ 02",
    title: "Move With The Room.",
    body: "Our DJs understand daylight. Nobody is screaming over a 2 AM bassline at noon. Right tempo at the right hour, built to last eight hours without blowing you out by three. You will not need a second wind.",
  },
  {
    num: "/ 03",
    title: "Meet The Crew.",
    body: "The people on your Episode are not a coincidence. Every Episode is balanced for energy — founders, operators, creatives, and the occasional person you've been trying to get in a room with for six months. The most useful conversation of your year might happen standing in ankle-deep water. Bring a card if you still carry one.",
  },
  {
    num: "/ 04",
    title: "End Full.",
    body: "Sunset return along the skyline. Final set from your DJ. A content package in your inbox within 72 hours. Optional extension at a partnered Ocean Drive room if you're not done. Your group chat will be useless on Wednesday. We accept no responsibility for what happens in the group chat on Wednesday.",
  },
];

export const guestIncluded: IncludedItem[] = [
  {
    num: "01",
    name: "Vessel",
    detail: "Captained, 8 hours, 12-seat flotilla",
  },
  {
    num: "02",
    name: "Food",
    detail: "Full day, real kitchen, not a cheese plate",
  },
  {
    num: "03",
    name: "Bar",
    detail: "Spirits list plus a full functional NA bar",
  },
  {
    num: "04",
    name: "Soundtrack",
    detail: "Resident DJ, daytime programming, not a playlist",
  },
  {
    num: "05",
    name: "Photography",
    detail: "In your inbox within 72 hours",
  },
  {
    num: "06",
    name: "Hosting",
    detail: "Dock to dock, we handle it",
  },
  {
    num: "07",
    name: "Recovery Kit",
    detail: "Sun, hydration, the small rituals",
  },
  {
    num: "08",
    name: "After-Hours",
    detail: "Optional partnered room on Ocean Drive",
  },
];

export const guestEpisodes: GuestEpisode[] = [
  {
    id: "s1e01-the-origin",
    episodeNumber: "01",
    episodeLabel: "Episode 01",
    date: "June 20",
    day: "Saturday",
    year: "2026",
    destination: "The Origin",
    itinerary: "A",
    itineraryLabel: "6 hours on yacht",
    status: "Standby",
    statusType: "standby",
    tagline: "The first page of the Log. The Saturday it all begins.",
    description:
      "Every ship has a first day. Every Crew has an Origin. SEAson 1 opens on the longest Saturday of the year — six hours on the water, brunch before, Dockside Social after. The bottle breaks at sunset. You were on it.",
    signatureMoment: "The Christening — a bottle across the bow at sunset.",
    culturalOverlay: "FIFA World Cup opening weekend / Uruguay vs Cape Verde",
  },
  {
    id: "s1e02-the-lost-meridian",
    episodeNumber: "02",
    episodeLabel: "Episode 02",
    date: "July 4",
    day: "Saturday",
    year: "2026",
    destination: "The Lost Meridian",
    itinerary: "A",
    itineraryLabel: "6 hours on yacht",
    status: "2 seats left",
    statusType: "critical",
    tagline: "Fourth of July, on the water, without the face paint.",
    description:
      "A Saturday Fourth of July only happens every seven years. The Crew sails to find a meridian America has misplaced. Florida seafood, domestic spirits only, the American songbook at the right tempo, and an annual flag raised at sunset — commissioned from a Miami artist, gifted to one Crew member by raffle. Off the water by seven so you can find a rooftop.",
    signatureMoment: "The Flagpoint — a Miami artist's flag raised at sunset.",
    culturalOverlay:
      "Fourth of July on Saturday / Mid-World Cup knockout rounds",
  },
  {
    id: "s1e03-the-sunken-cathedral",
    episodeNumber: "03",
    episodeLabel: "Episode 03",
    date: "July 18",
    day: "Saturday",
    year: "2026",
    destination: "The Sunken Cathedral",
    itinerary: "B",
    itineraryLabel: "4 hours on yacht",
    status: "Standby",
    statusType: "standby",
    tagline:
      "The people building what Miami becomes next, standing on shared ground.",
    description:
      "A curated Episode for the founders, operators, and people charting Miami's next decade. Itinerary B — four concentrated hours, balanced for stage and category. One Sandbar Standup at 4:20 PM: 90 seconds, no pitches, no decks, ankle-deep at The Sunken Cathedral. The most useful Saturday of your quarter, engineered to respect it.",
    signatureMoment: "The Sandbar Standup — 90 seconds each, no pitches.",
    culturalOverlay: "FIFA World Cup Bronze Final Day",
  },
  {
    id: "s1e04-the-forgotten-feast",
    episodeNumber: "04",
    episodeLabel: "Episode 04",
    date: "August 1",
    day: "Saturday",
    year: "2026",
    destination: "The Forgotten Feast",
    itinerary: "A",
    itineraryLabel: "6 hours on yacht",
    status: "6 seats left",
    statusType: "available",
    tagline:
      "One chef. One prix-fixe. One route the city stopped telling people about.",
    description:
      "The Crew opens Miami Spice on the water. Itinerary A. One partnered chef on board for the full day, serving the sunset course personally at 6:20 PM. Three courses, a proper wine list, Biscayne Bay at its clearest during the city's best food month. The Forgotten Feast gets found.",
    signatureMoment: "The Chef's Course — served personally at sunset.",
    culturalOverlay: "Miami Spice opening day / August 1",
  },
  {
    id: "s1e05-the-stolen-gallery",
    episodeNumber: "05",
    episodeLabel: "Episode 05",
    date: "August 15",
    day: "Saturday",
    year: "2026",
    destination: "The Stolen Gallery",
    itinerary: "B",
    itineraryLabel: "4 hours on yacht",
    status: "4 seats left",
    statusType: "limited",
    tagline: "Queer-led, summer-peak, everyone welcome.",
    description:
      "A Miami summer Pride Episode the way it should be run. Itinerary B. Queer DJ curation from the Space residents lineage, a partnered local nonprofit, ten percent of every seat donated. An annual flag commissioned from a queer Miami artist, raised at 4:20 PM. No corporate choreography, no rainbow wrap, no parade route. A designed Saturday, programmed by the community that built Miami's best parties.",
    signatureMoment:
      "The Colors Reveal — artist flag raised, donation announced.",
    culturalOverlay: "Summer Pride / mid-summer peak",
  },
  {
    id: "s1e06-the-phantom-peninsula",
    episodeNumber: "06",
    episodeLabel: "Episode 06",
    date: "August 29",
    day: "Saturday",
    year: "2026",
    destination: "The Phantom Peninsula",
    itinerary: "A",
    itineraryLabel: "6 hours on yacht",
    status: "8 seats left",
    statusType: "available",
    tagline: "The Saturday the water gives you back.",
    description:
      "The late-August Episode everyone needs. Itinerary A. Breathwork on the foredeck, a functional bar running as the main bar, a lighter menu built to feel good on Sunday. One minute of silence at golden hour — sixty seconds, nothing else, The Phantom Peninsula briefly visible. The Saturday you've earned.",
    signatureMoment:
      "The Still Minute — sixty seconds of nothing, at golden hour.",
    culturalOverlay: "Pre-Labor Day approach",
  },
  {
    id: "s1e07-the-future-archives",
    episodeNumber: "07",
    episodeLabel: "Episode 07",
    date: "September 12",
    day: "Saturday",
    year: "2026",
    destination: "The Future Archives",
    itinerary: "B",
    itineraryLabel: "4 hours on yacht",
    status: "10 seats left",
    statusType: "available",
    tagline: "The people who chart what Miami becomes, on record.",
    description:
      "An Episode for the directors, photographers, editors, designers, and musicians making the Miami the rest of the world sees. Itinerary B. Analog photography station on board, film processed and mailed in your content package. One 4x5 group portrait at 4:20 PM — one frame, one exposure, framed prints delivered 60 days later. The pre-Basel conversation, filed for the future.",
    signatureMoment:
      "The Analog Exposure — one 4x5 frame, framed prints mailed 60 days later.",
    culturalOverlay: "Pre-Hispanic Heritage Month / Pre-Art Basel build-up",
  },
  {
    id: "s1-finale-the-last-harbor",
    episodeNumber: "Finale",
    episodeLabel: "Finale",
    date: "October 10",
    day: "Saturday",
    year: "2026",
    destination: "The Last Harbor",
    itinerary: "A",
    itineraryLabel: "6 hours on yacht",
    status: "5 seats left",
    statusType: "limited",
    tagline: "The year's only toast. The final page of the first book.",
    description:
      "SEAson 1 closes the way we want to open SEAson 2. Itinerary A. Standby list priority opens 48 hours before public casting. SEAson-recap film shot on the day, released at Art Basel to open SEAson 2 casting. The single toast of the year at 6:20 PM — read aloud: the Episode count, the Crew total, the Log entries. The Saturday that earns Saturday's reputation.",
    signatureMoment:
      "The SEAson Toast — the year's only toast, read aloud.",
    culturalOverlay:
      "Hispanic Heritage Month + Miami Carnival + Columbus Day weekend",
  },
];

export const itineraries: Record<"A" | "B", Itinerary> = {
  A: {
    label: "Itinerary A",
    duration: "6 hours on yacht",
    description: "The long day. Reserved for tentpole Episodes.",
    slots: [
      { time: "11:00 AM", action: "HVRBOR.CLUB Opens" },
      { time: "11:30 AM", action: "Brunch by the Bay" },
      { time: "1:00 PM", action: "Embark" },
      { time: "1:30 PM", action: "Sailaway Ceremony" },
      { time: "3:30 PM", action: "Sandbar Arrival" },
      { time: "5:30 PM", action: "Back on Board" },
      { time: "6:20 PM", action: "Signature Moment" },
      { time: "6:50 PM", action: "Debark" },
      { time: "7:00 PM", action: "Dockside Social" },
      { time: "8:00 PM", action: "HVRBOR.CLUB Closes" },
    ],
  },
  B: {
    label: "Itinerary B",
    duration: "4 hours on yacht",
    description:
      "The short set. For Episodes where the room matters more than the duration.",
    slots: [
      { time: "11:00 AM", action: "HVRBOR.CLUB Opens" },
      { time: "11:30 AM", action: "Brunch by the Bay" },
      { time: "1:00 PM", action: "Embark" },
      { time: "1:30 PM", action: "Sailaway Ceremony" },
      { time: "4:20 PM", action: "Signature Moment" },
      { time: "4:50 PM", action: "Debark" },
      { time: "5:00 PM", action: "Dockside Social" },
      { time: "6:00 PM", action: "HVRBOR.CLUB Closes" },
    ],
  },
};

export const guestFaqs: GuestFaq[] = [
  {
    question: "Do I need to know anyone to book?",
    answer:
      "No. Half the seats on any Episode are solo buyers. Every Episode is balanced for energy, not cliques. You'll walk off knowing names worth knowing.",
  },
  {
    question: "Is this a party boat?",
    answer:
      "No. Music is part of it. So is breathwork, food, conversation, and a functional bar. Guests who show up expecting a bottle-service cruise are typically disappointed. We consider this a feature.",
  },
  {
    question: "What if I don't drink?",
    answer:
      "You're covered. HVRBOR.CLUB runs a full functional NA bar alongside the spirits list \u2014 adaptogens, nootropics, real craft work, not a can of seltzer someone forgot about. Sober-curious guests are a core part of every Episode. Nobody asks why.",
  },
  {
    question: "What should I wear?",
    answer:
      "Swim under. Something you'd wear to a Miami rooftop over. A light layer for the ride back. We send a prep note 48 hours out with the specifics. Nothing requires a suit.",
  },
  {
    question: "What if the weather turns?",
    answer:
      "Miami afternoons have opinions. The day is built to finish the peak experience before the usual storm windows, and every route has an abort-to-marina plan the captain already knows by heart. If an Episode is fully cancelled, your seat becomes a credit you can roll into any future date.",
  },
  {
    question: "Can I book the whole boat?",
    answer:
      "Yes. We call it a Bottle Episode \u2014 private charters run 6\u201312 guests at a flat rate. Bachelorettes, birthdays, corporate offsites, wedding welcome days. Same programming standard. You just pick the room.",
  },
  {
    question: "Where does it depart?",
    answer:
      "Miami Beach Marina. Exact slip and check-in details land in your inbox 48 hours out. Park at Lincoln Road and walk. Don't drive into the marina, you'll regret it.",
  },
  {
    question: "Do you sail year-round?",
    answer:
      "Public season runs May through October. November through April runs on Bottle Episodes and themed Episodes. Sign up for the list and we'll let you know when winter dates open. The list is short. We intend to keep it that way.",
  },
  {
    question: "What's a SEAson?",
    answer:
      "SEAson 1 is our first eight Episodes \u2014 the calendar of voyages running June 20 through October 10, 2026. Biweekly Saturdays. Every Episode is its own destination. The Crew who sails SEAson 1 becomes the founding cast. SEAson 2 casting opens at Art Basel in December.",
  },
];

// ====================================================================
// THE RECIPROCITY NETWORK
// ====================================================================
// Seven verticals in priority order. Each lists anchor partners with
// a status tag (confirmed, in conversation, anchor target). The full
// network lives in The Harbor app — this file is the public reveal.
// ====================================================================

import { TierId } from "./membership";

export type PartnerStatus = "Confirmed" | "In conversation" | "Anchor target";

export type AnchorPartner = {
  name: string;
  description: string;
  tierAccess: TierId;
  status: PartnerStatus;
};

export type NetworkVertical = {
  id: string;
  num: string;
  label: string;
  positioning: string;
  blurb: string;
  body: string;
  anchors: AnchorPartner[];
  pipeline: string[];
};

export const networkVerticals: NetworkVertical[] = [
  {
    id: "entertainment",
    num: "01",
    label: "Entertainment",
    positioning: "Concerts, festivals, premieres, art",
    blurb:
      "The cultural calendar of Miami and the cities that orbit it. Festival presales, side-stage access, gallery preview days, premiere allocations.",
    body: "The Crew shows up to the rooms that matter — III Points, Rolling Loud, Ultra, Art Basel Miami, Coachella, EDC, Cannes. HVRBOR routes its members through the front of the line, the side stage, and the green room. GHXSTSHIP's thirteen-year operating history with EDC, Ultra, Red Bull, and PATRÓN is the lever — Entertainment access isn't built from cold outreach. It's built from existing relationships.",
    anchors: [
      {
        name: "Art Basel Miami Beach",
        description:
          "Preview day access, gallery dinner allocations, the SEAson recap film premiere",
        tierAccess: "commodore",
        status: "In conversation",
      },
      {
        name: "III Points",
        description: "VIP allocation, side-stage access, artist-meet windows",
        tierAccess: "captain",
        status: "In conversation",
      },
      {
        name: "Rolling Loud",
        description: "Captain priority allocation on Miami weekend passes",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Ultra Music Festival",
        description:
          "VIP and artist-area access, route-of-the-stage walkthroughs",
        tierAccess: "captain",
        status: "In conversation",
      },
      {
        name: "Coachella",
        description:
          "Commodore-only travel package — flights, hospitality, weekend curation",
        tierAccess: "commodore",
        status: "Anchor target",
      },
    ],
    pipeline: [
      "Cannes Film Festival travel package",
      "Miami Film Festival",
      "Live Nation / AEG presale window",
      "Broadway opening-night allocations",
    ],
  },
  {
    id: "sports",
    num: "02",
    label: "Sports",
    positioning: "F1, World Cup, Olympics, Open",
    blurb:
      "The unfair-advantage card. Paddock access, hospitality suites, ticket allocations to the events the public can't reach at any price.",
    body: "Sports is HVRBOR's structural moat. GHXSTSHIP's existing operating credentials with Formula 1 unlock paddock-tier access that no Miami members club can replicate. SEAson 1 already overlays the FIFA World Cup 2026 — Miami is a host city, and Episodes 01, 02, and 03 sail the same weekends as the matches. Captain and Commodore allocations against those tournaments are the highest-perceived-value benefit of the entire membership.",
    anchors: [
      {
        name: "Formula 1 Miami Grand Prix",
        description:
          "Paddock and suite access for Captain. Paddock Club for Commodore. Pair with a Race Weekend Episode.",
        tierAccess: "captain",
        status: "In conversation",
      },
      {
        name: "FIFA World Cup 2026 — Miami",
        description:
          "Match ticket allocation against Episodes 01–03. Hospitality suite access for Commodore.",
        tierAccess: "captain",
        status: "In conversation",
      },
      {
        name: "Miami Open (Tennis)",
        description:
          "Grounds passes plus courtside upgrade window for Captain",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Inter Miami CF",
        description: "Priority ticket allocation across the Messi era",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "LA Olympics 2028",
        description:
          "Commodore allocation against GHXSTSHIP's Olympics-network access. Sells from 2027.",
        tierAccess: "commodore",
        status: "Anchor target",
      },
    ],
    pipeline: [
      "Monaco Grand Prix travel package",
      "Las Vegas Grand Prix travel package",
      "Heat / Marlins / Hurricanes group buys",
      "Super Bowl host-city Episode (rotating)",
    ],
  },
  {
    id: "wellness",
    num: "03",
    label: "Health & Wellness",
    positioning: "Premium and ultra-premium",
    blurb:
      "Longevity clinics, recovery rooms, breathwork, cold plunge. The serious tier — not a class pass at a chain studio.",
    body: "Miami became the longevity capital of the United States somewhere between Cold Plunge Brickell and the Wynwood functional-medicine boom. HVRBOR's Wellness vertical only ships premium and ultra-premium partnerships. The Recovery Series — monthly off-Episode wellness pop-ups at partnered locations — extends the on-water Pillar 06 / Phantom Peninsula thread into the rest of the year.",
    anchors: [
      {
        name: "Continuum Wellness",
        description: "Functional medicine access for Captain. Members rate.",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Next Health",
        description:
          "IV, NAD, hyperbaric, longevity panels — Captain priority booking",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Anatomy Miami",
        description:
          "Walk-in privileges plus monthly classes for Captain. Off-hours pool and sauna for Commodore.",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Othership / Remedy Place",
        description:
          "Cold plunge and ice bath networks — monthly free entry for Captain",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Hyperice Lounges",
        description:
          "Recovery suite access at partnered Miami locations and traveling pop-ups",
        tierAccess: "captain",
        status: "Anchor target",
      },
    ],
    pipeline: [
      "Performix House",
      "Forever Young",
      "Sound bath and breathwork residencies",
      "International longevity-clinic partnerships (Switzerland, BVI)",
    ],
  },
  {
    id: "hospitality",
    num: "04",
    label: "Hospitality",
    positioning: "Aman, Faena, Edition, 1 Hotel",
    blurb:
      "The cross-city utility layer. Late checkout, day-pass cabanas, members rate, and the Resident Suite that arrives by lottery.",
    body: "Hospitality makes the membership claim global. A Captain in New York or Los Angeles uses HVRBOR for the Aman day pass. A Commodore in transit through Singapore uses it for the Edition arrival. The flagship benefit is The Resident Suite — one Faena Miami suite reserved on Episode dates for a Commodore who applies. Lottery if multiple. The Centurion-tier benefit translated to hospitality.",
    anchors: [
      {
        name: "Faena Miami Beach",
        description:
          "Spa-and-pool day pass, late checkout, The Resident Suite lottery for Commodore",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Aman New York / Miami",
        description:
          "Day-pass and members-rate access. Commodore-only suite preference.",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "1 Hotel South Beach",
        description:
          "Cabana access, members rate, Episode-day staging for guests in town",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "The Edition Miami",
        description:
          "Late checkout and members rate. Members-only event access.",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Six Senses Network",
        description:
          "Global access for traveling Captains. Wellness-stay partnership.",
        tierAccess: "captain",
        status: "Anchor target",
      },
    ],
    pipeline: [
      "Belmond properties",
      "Boutique surf hotels — Riviera Maya, Yucatán, Bocas",
      "Four Seasons preferred-partner program",
    ],
  },
  {
    id: "travel",
    num: "05",
    label: "Travel",
    positioning: "Aviation, charters, geographic overlays",
    blurb:
      "Private aviation for the corridor, yacht charters for the off-SEAson, and the BVI / Croatia / Ibiza overlays that grow the flotilla beyond Miami.",
    body: "The Yacht Week DNA gets fully expressed here. SEAson 2 introduces geographic overlays — mini-SEAsons in BVI in January, Croatia in July, Ibiza in September — with Captain pre-allocation 60 days before public and Commodore 90 days before. Private aviation partners cover the Northeast corridor that most Captain members fly weekly.",
    anchors: [
      {
        name: "Tradewind Aviation",
        description:
          "NYC ↔ Miami corridor. Members rate plus priority booking for Captain.",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Set Jet",
        description:
          "Curated private aviation. Captain priority on West Coast routes.",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "BVI Mini-SEAson",
        description:
          "January 2027 overlay. Captain pre-allocation opens 60 days ahead.",
        tierAccess: "captain",
        status: "In conversation",
      },
      {
        name: "Croatia Mini-SEAson",
        description: "July 2027. The original Yacht-Week template, refit.",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Indagare / Embark Beyond",
        description: "Concierge travel partnership. Members rate.",
        tierAccess: "captain",
        status: "Anchor target",
      },
    ],
    pipeline: [
      "Ibiza mini-SEAson — September 2027",
      "Wheels Up",
      "Burgess yacht charter partnership",
      "Black Tomato custom itineraries",
    ],
  },
  {
    id: "retail",
    num: "06",
    label: "Retail",
    positioning: "Capsules, drops, designer access",
    blurb:
      "Pre-allocation on partnered drops, capsule collaborations tied to specific Episodes, and the Archive — HVRBOR's own product line.",
    body: "Retail is the smallest vertical by SKU and the highest by status. SEAson 1 capsule collaborations land on Episode-specific themes — The Stolen Gallery flag becomes a numbered art object commissioned from a queer Miami artist; the Future Archives 4×5 photographs become numbered prints delivered to every Crew member sixty days after the Episode. Pre-allocation on partnered drops gives members early-access SMS windows on Stone Island, KITH, and rotating designer launches.",
    anchors: [
      {
        name: "Loro Piana — Episode Capsule",
        description: "Limited capsule tied to a specific Episode. Commodore-first.",
        tierAccess: "commodore",
        status: "Anchor target",
      },
      {
        name: "KITH",
        description: "Pre-allocation on Miami drops. SMS early-access window.",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "The Archive",
        description:
          "HVRBOR's own product — numbered prints, capsule garments, the SEAson 3 coffee-table book",
        tierAccess: "crew",
        status: "Confirmed",
      },
      {
        name: "Eres / Hunza G / Eberjey",
        description:
          "Swim and resort-wear capsules. Members rate plus pre-allocation.",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Stone Island",
        description: "Pre-allocation on Miami drops",
        tierAccess: "captain",
        status: "Anchor target",
      },
    ],
    pipeline: [
      "Brunello Cucinelli capsule",
      "Wynwood / Design District gallery editions",
      "Sneaker pre-allocation calendar",
    ],
  },
  {
    id: "nightlife",
    num: "07",
    label: "Nightlife",
    positioning: "After-hours rooms, soft-club takeovers",
    blurb:
      "The Ocean Drive after-hours room that lives downstream of every Episode, plus rotating partnered takeovers at the Miami venues that matter.",
    body: "Nightlife extends Pillar 04 / End Full off the boat. Every Episode ends with a partnered Ocean Drive room option — Captain plus Commodore have the standing allocation. Beyond Episode nights, HVRBOR programs a rotating after-hours room every Saturday during the SEAson, hosted at a different partnered venue, members-only.",
    anchors: [
      {
        name: "E11EVEN Miami",
        description:
          "Speakeasy-adjacent. Guest list plus bottle minimum waivers for Captain.",
        tierAccess: "captain",
        status: "In conversation",
      },
      {
        name: "LIV / Story",
        description: "Priority entry, table allocation",
        tierAccess: "captain",
        status: "Anchor target",
      },
      {
        name: "Ocean Drive Resident Room",
        description:
          "The standing partnered after-hours room post-Episode. Hosted address rotates.",
        tierAccess: "captain",
        status: "In conversation",
      },
      {
        name: "Treehouse / M2",
        description: "Members rate on cover, table priority",
        tierAccess: "captain",
        status: "Anchor target",
      },
    ],
    pipeline: [
      "Wynwood Marketplace residencies",
      "Rotating cross-club takeovers",
      "Sunset day-club at partnered hotels",
    ],
  },
];

export function getVerticalById(id: string): NetworkVertical | undefined {
  return networkVerticals.find((v) => v.id === id);
}

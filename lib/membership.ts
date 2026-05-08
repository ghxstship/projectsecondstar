// ====================================================================
// MEMBERSHIP TIERS
// ====================================================================
// SEAson 1 launches with three tiers. Pricing is the SEAson 1 founding
// rate and increases at SEAson 2.
// ====================================================================

export type TierId = "crew" | "captain" | "commodore";

export type TierBenefit = {
  category: "Episodes" | "Network" | "Harbor" | "Mark" | "Travel";
  detail: string;
};

export type MembershipTier = {
  id: TierId;
  label: string;
  positioning: string;
  price: string;
  priceCadence: string;
  priceNote: string;
  description: string;
  benefits: TierBenefit[];
  cta: { label: string; href: string };
};

export const membershipTiers: MembershipTier[] = [
  {
    id: "crew",
    label: "Crew",
    positioning: "01 / Entry",
    price: "Free",
    priceCadence: "with first Episode booking",
    priceNote: "Earned, not paid",
    description:
      "Anyone who sails one Episode joins the Crew. The number on your Mark is permanent. The Log notes your name. The members rate is yours from then on.",
    benefits: [
      {
        category: "Episodes",
        detail: "Standby priority on future Episodes after your first sail",
      },
      {
        category: "Network",
        detail: "Members rate across the public reciprocity network",
      },
      {
        category: "Harbor",
        detail: "Read-only access to The Log and the SEAson archive",
      },
      {
        category: "Mark",
        detail: "Numbered matte-black card mailed after your first Episode",
      },
    ],
    cta: { label: "Claim a Seat", href: "/episodes" },
  },
  {
    id: "captain",
    label: "Captain",
    positioning: "02 / Annual",
    price: "$10,000",
    priceCadence: "/ year",
    priceNote: "SEAson 1 founding rate. Increases at SEAson 2.",
    description:
      "Captain locks the year. All eight Episodes. Every door in the Network. The Harbor concierge. A numbered brushed-steel Mark. The founding rate holds for the duration of the membership.",
    benefits: [
      {
        category: "Episodes",
        detail:
          "All eight SEAson 1 Episodes inclusive, with first allocation on Bottle Episodes and Crew Sails",
      },
      {
        category: "Network",
        detail:
          "Priority access across all seven verticals — Entertainment, Sports, Health & Wellness, Hospitality, Travel, Retail, Nightlife",
      },
      {
        category: "Harbor",
        detail:
          "Full concierge access. Text-first, real human plus AI hybrid. Reservations, tickets, recommendations, recoveries.",
      },
      {
        category: "Mark",
        detail: "Numbered brushed-steel card. Pre-loaded house account.",
      },
      {
        category: "Travel",
        detail:
          "Pre-allocation on geographic overlays — BVI, Croatia, Ibiza mini-SEAsons opening 60 days ahead of public",
      },
    ],
    cta: { label: "Apply for Captain", href: "/apply" },
  },
  {
    id: "commodore",
    label: "Commodore",
    positioning: "03 / Invitation",
    price: "By invitation",
    priceCadence: "",
    priceNote: "Limited to fifty numbered seats in SEAson 1.",
    description:
      "The black-card tier. Earned, not applied for. The paddock at the Grand Prix. The preview day at Basel. The off-market suite. The capsule before it ships. Fifty numbered seats per SEAson.",
    benefits: [
      {
        category: "Episodes",
        detail:
          "Private allocation per SEAson. Custom Bottle Episodes — choose your route, chef, and Crew",
      },
      {
        category: "Network",
        detail:
          "Curated tier — F1 paddock club, Art Basel preview day, Coachella green rooms, off-market suites, retail capsule pre-allocation",
      },
      {
        category: "Harbor",
        detail:
          "Concierge with one-tap access to global partners. The Resident Suite at Faena Miami available on lottery basis.",
      },
      {
        category: "Mark",
        detail:
          "Numbered brass card. Lower numbers indicate earlier Crew. Limited to fifty in SEAson 1.",
      },
      {
        category: "Travel",
        detail:
          "First allocation on geographic overlays. F1 international packages — Monaco, Las Vegas. LA Olympics 2028 pre-access.",
      },
    ],
    cta: { label: "By Invitation Only", href: "#" },
  },
];

export type MembershipFaqEntry = {
  question: string;
  answer: string;
};

export const membershipFaqs: MembershipFaqEntry[] = [
  {
    question: "What's the difference between Crew, Captain, and Commodore?",
    answer:
      "Crew is the entry tier — earned by sailing one Episode, free. Captain is the annual membership at $10,000 with the full Network access and Harbor concierge. Commodore is the invitation-only black-card tier, limited to fifty numbered seats per SEAson, with curated access to things the public can't reach at any price.",
  },
  {
    question: "When does Captain casting open?",
    answer:
      "Captain applications open at Art Basel Miami in December 2026, alongside the SEAson 1 Finale. Standby positions for the application window can be reserved now via the Apply page.",
  },
  {
    question: "How does Commodore selection work?",
    answer:
      "By invitation only. Captain members earn invitation eligibility through participation across the SEAson — sailing Episodes, attending Dockside Salons, engaging the Network. The first Commodore class is named at Art Basel 2027.",
  },
  {
    question: "Is the Captain fee refundable?",
    answer:
      "Membership is annual and non-refundable, but every Captain can name a successor — a single transfer of the seat to one named Crew member, once per SEAson. Unused Episode allocation rolls forward to your renewal.",
  },
  {
    question: "What does the Captain fee include?",
    answer:
      "All eight SEAson 1 Episodes (a $4,800+ value at single-seat pricing), Bottle Episode credit toward one private charter, Network priority access, Harbor concierge, your numbered Mark, and pre-allocation on geographic overlays — BVI, Croatia, Ibiza — when those open in 2027.",
  },
  {
    question: "What's the Mark?",
    answer:
      "The physical card. Numbered, with your Origin Episode and SEAson engraved. Three finishes by tier — matte black for Crew, brushed steel for Captain, brass for Commodore. Lower numbers signal earlier Crew. The Mark mails within thirty days of membership confirmation.",
  },
  {
    question: "What's The Harbor?",
    answer:
      "The membership operating system. Episode booking, concierge chat, the Network access menu, your Log entry, the Crew Directory (opt-in), and your Mark Wallet (the house-account credit balance). Captain members get full access. Crew get read-only.",
  },
  {
    question: "Can I gift a membership?",
    answer:
      "Captain memberships can be gifted in full. Crew memberships are earned by sailing — the closest equivalent is gifting an Episode seat, which converts the recipient into Crew on completion.",
  },
];

// ====================================================================
// MEMBERSHIP TIERS
// ====================================================================
// Three tiers, each mapped to the brand's three pillars:
// Experience (the Saturdays), Product (the Archive), Community
// (the Crew). Pricing is the SEAson 1 founding rate.
// ====================================================================

export type TierId = "crew" | "captain" | "commodore";

export type BenefitPillar = "Experience" | "Product" | "Community";

export type TierBenefit = {
  pillar: BenefitPillar;
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
        pillar: "Experience",
        detail:
          "Standby priority on future Episodes after your first sail. Members rate on Bottle Episode bookings.",
      },
      {
        pillar: "Product",
        detail:
          "A numbered matte-black Mark mailed within thirty days of your first Episode. Members rate across the public Network.",
      },
      {
        pillar: "Community",
        detail:
          "A permanent entry in the Log. +1 privileges on open Episodes. Read-only access to The Harbor.",
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
        pillar: "Experience",
        detail:
          "All eight SEAson 1 Episodes inclusive. Bottle Episode credit toward one private charter. Pre-allocation on Mini-SEAson overlays — BVI, Croatia, Ibiza — opening 60 days ahead of public.",
      },
      {
        pillar: "Product",
        detail:
          "Brushed-steel Mark with house-account credit. Member capsule allocation across co-branded drops. Priority access to the partner Network — Continuum, Tradewind, Othership, Faena, Aman, Edition.",
      },
      {
        pillar: "Community",
        detail:
          "Sponsor one new Crew member per SEAson at the founding rate. Directory opt-in. Founding Crew designation in SEAson 1. Full Harbor concierge access — text-first, real human plus AI.",
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
    priceNote: "Limited to fifty numbered seats per SEAson.",
    description:
      "The black-card tier. Earned, not applied for. The paddock at the Grand Prix. The preview day at Basel. The off-market suite. The capsule before it ships. Fifty numbered seats per SEAson.",
    benefits: [
      {
        pillar: "Experience",
        detail:
          "Private allocation per SEAson. Custom Bottle Episodes — choose your route, chef, and Crew. F1 international packages — Monaco, Las Vegas. LA Olympics 2028 pre-access.",
      },
      {
        pillar: "Product",
        detail:
          "Brass-finished Mark. Loro Piana × HVRBOR capsule first allocation. Faena Resident Suite by lottery. Curated Network — paddock, preview day, off-market hospitality, retail-collab pre-allocation.",
      },
      {
        pillar: "Community",
        detail:
          "Extend invitations — the Commodore class names the next class. The Crew curates itself. Numbered, lower numbers indicate earlier members. Fifty seats per SEAson.",
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
      "By invitation only. The Commodore class names the next class — Captain members earn invitation eligibility through participation across the SEAson, sailing Episodes, attending Dockside Salons, engaging the Network. The first Commodore class is named at Art Basel 2027.",
  },
  {
    question: "How does Bring-a-Crew work?",
    answer:
      "Crew members can request a +1 on any open Episode — the +1 sails as a guest, and if they sail again they're cast as Crew themselves. Captain members sponsor one new Crew member per SEAson at the founding rate. Commodore extends invitations. The Crew curates itself.",
  },
  {
    question: "Is the Captain fee refundable?",
    answer:
      "Membership is annual and non-refundable, but every Captain can name a successor — a single transfer of the seat to one named Crew member, once per SEAson. Unused Episode allocation rolls forward to your renewal.",
  },
  {
    question: "What does the Captain fee include?",
    answer:
      "All eight SEAson 1 Episodes (a $4,800+ value at single-seat pricing), Bottle Episode credit toward one private charter, Network priority access, Harbor concierge, your numbered Mark, member capsule allocation, and pre-allocation on Mini-SEAson overlays — BVI, Croatia, Ibiza — when those open in 2027.",
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

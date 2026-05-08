// ====================================================================
// THE ARCHIVE — the product layer
// ====================================================================
// Three concentric rings: HVRBOR-direct, co-branded capsules, and
// partner products / memberships. Each entry has a status tag.
// ====================================================================

export type ArchiveRing =
  | "hvrbor"
  | "co-branded"
  | "partner";

export type ArchiveStatus =
  | "Shipping"
  | "Founding allocation"
  | "On standby"
  | "Coming SEAson 1"
  | "Coming SEAson 2"
  | "Anchor target";

export type ArchiveItem = {
  id: string;
  ring: ArchiveRing;
  name: string;
  category: string;
  description: string;
  status: ArchiveStatus;
  tier: "Crew" | "Captain+" | "Commodore-only";
  numbered: boolean;
};

export const archiveItems: ArchiveItem[] = [
  // Ring 1 — HVRBOR-direct
  {
    id: "the-mark",
    ring: "hvrbor",
    name: "The Mark",
    category: "Card",
    description:
      "Numbered. Permanent. Three finishes by tier — matte black for Crew, brushed steel for Captain, brass for Commodore. Mailed within thirty days of membership confirmation.",
    status: "Shipping",
    tier: "Crew",
    numbered: true,
  },
  {
    id: "the-origin-capsule",
    ring: "hvrbor",
    name: "The Origin Capsule",
    category: "Capsule / SEAson 1",
    description:
      "A small functional set — swim, shore, recovery — designed for the longest Saturday of the year. Numbered. Mails with The Mark for Episode 01 sailors.",
    status: "Founding allocation",
    tier: "Crew",
    numbered: true,
  },
  {
    id: "the-recovery-kit",
    ring: "hvrbor",
    name: "The Recovery Kit",
    category: "Provisions",
    description:
      "Reef-safe sun. Hydration. The small rituals. The version that ships on every Episode, productized for the rest of the year.",
    status: "Coming SEAson 1",
    tier: "Crew",
    numbered: false,
  },
  {
    id: "the-future-archives-prints",
    ring: "hvrbor",
    name: "The Future Archives Prints",
    category: "Edition / Episode 07",
    description:
      "One 4×5 large-format film exposure of the full Crew. Framed prints mailed to every Crew member sixty days later. Numbered. The print is yours.",
    status: "Coming SEAson 1",
    tier: "Crew",
    numbered: true,
  },
  {
    id: "the-stolen-gallery-flag",
    ring: "hvrbor",
    name: "The Stolen Gallery Flag",
    category: "Object / Episode 05",
    description:
      "A flag commissioned annually from a queer Miami artist, raised at sunset, gifted to one Crew member by raffle. Each year's flag is permanent. Each is collectible.",
    status: "Coming SEAson 1",
    tier: "Crew",
    numbered: true,
  },
  {
    id: "the-atlas",
    ring: "hvrbor",
    name: "The Atlas",
    category: "Publication",
    description:
      "A guide to Miami written through the HVRBOR lens. The functional NA bars that aren't a joke. The breathwork studios that don't oversell. Where to eat alone on a Tuesday.",
    status: "Coming SEAson 2",
    tier: "Captain+",
    numbered: false,
  },
  {
    id: "the-book",
    ring: "hvrbor",
    name: "The Book",
    category: "Publication / SEAson 3",
    description:
      "Three SEAsons of the Log, bound. Photography from twenty-four Episodes. Printed in a numbered edition. Pre-order opens at the Finale.",
    status: "Coming SEAson 2",
    tier: "Crew",
    numbered: true,
  },

  // Ring 2 — Co-branded capsules
  {
    id: "loro-piana-capsule",
    ring: "co-branded",
    name: "Loro Piana × HVRBOR",
    category: "Capsule",
    description:
      "A SEAson capsule in cashmere and linen. Numbered. Commodore-first allocation, Captain second window, public never.",
    status: "Anchor target",
    tier: "Commodore-only",
    numbered: true,
  },
  {
    id: "kith-episode-04",
    ring: "co-branded",
    name: "KITH × Episode 04",
    category: "Capsule",
    description:
      "A one-off capsule tied to The Forgotten Feast. Pre-allocation via SMS the morning of the Episode.",
    status: "Anchor target",
    tier: "Captain+",
    numbered: false,
  },
  {
    id: "eres-swim",
    ring: "co-branded",
    name: "Eres × HVRBOR Swim",
    category: "Capsule",
    description:
      "Limited swim capsule designed against the SEAson 1 calendar. Members rate plus pre-allocation for Captain.",
    status: "Anchor target",
    tier: "Captain+",
    numbered: false,
  },
  {
    id: "stone-island-drops",
    ring: "co-branded",
    name: "Stone Island × Crew",
    category: "Drops",
    description:
      "Pre-allocation on Miami drops. SMS early-access window for Captain members the night before the public release.",
    status: "Anchor target",
    tier: "Captain+",
    numbered: false,
  },

  // Ring 3 — Partner products + memberships (the Network as product)
  {
    id: "continuum-panel",
    ring: "partner",
    name: "Continuum Wellness — Annual Panel",
    category: "Wellness",
    description:
      "Functional medicine panel, priority booking, members rate. Captain inclusion bundle with longevity work-up.",
    status: "Anchor target",
    tier: "Captain+",
    numbered: false,
  },
  {
    id: "tradewind-credits",
    ring: "partner",
    name: "Tradewind Aviation — Credit Bundle",
    category: "Travel",
    description:
      "NYC ↔ Miami corridor. Captain members buy credits at the members rate, applied across the year. Bring-a-Crew transferable.",
    status: "Anchor target",
    tier: "Captain+",
    numbered: false,
  },
  {
    id: "othership-pass",
    ring: "partner",
    name: "Othership — Annual Pass",
    category: "Wellness",
    description:
      "Cold plunge and ice bath access at all Othership locations. Captain inclusion. Bring-a-Crew transferable for first visit.",
    status: "Anchor target",
    tier: "Captain+",
    numbered: false,
  },
  {
    id: "faena-resident-allocation",
    ring: "partner",
    name: "Faena Resident Suite",
    category: "Hospitality",
    description:
      "One suite, held on Episode dates, for a Commodore who applies. Lottery if oversubscribed. The Centurion benefit, translated to hospitality.",
    status: "Anchor target",
    tier: "Commodore-only",
    numbered: true,
  },
  {
    id: "aman-day-pass",
    ring: "partner",
    name: "Aman — Day Pass Reciprocity",
    category: "Hospitality",
    description:
      "Day-pass and members-rate access across the Aman network for traveling Captains. Commodore-preference on suite upgrades.",
    status: "Anchor target",
    tier: "Captain+",
    numbered: false,
  },
];

export const archiveRingLabels: Record<ArchiveRing, { label: string; positioning: string }> = {
  hvrbor: {
    label: "HVRBOR Direct",
    positioning: "First-party. Owned IP. Numbered when it matters.",
  },
  "co-branded": {
    label: "Co-Branded Capsules",
    positioning: "One or two per SEAson. Tied to specific Episodes.",
  },
  partner: {
    label: "Partner Products + Memberships",
    positioning: "The Network, productized. Bundled into Captain inclusion or sold at the members rate.",
  },
};

export function getItemsByRing(ring: ArchiveRing): ArchiveItem[] {
  return archiveItems.filter((i) => i.ring === ring);
}

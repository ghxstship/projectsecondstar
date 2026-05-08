// ====================================================================
// FEATURED NETWORK MOMENTS
// ====================================================================
// Specific upcoming Network events surfaced on the home and network
// pages. Mix of near-term (SEAson 1) and forward-looking (SEAson 2).
// ====================================================================

import { NetworkVertical } from "./network";

export type MomentTier = "All Members" | "Captain+" | "Commodore-only";

export type NetworkMoment = {
  id: string;
  vertical: NetworkVertical["id"];
  verticalLabel: string;
  title: string;
  window: string;
  tier: MomentTier;
  status: "Open" | "Announced" | "Pre-allocation";
  description: string;
};

export const networkMoments: NetworkMoment[] = [
  {
    id: "fifa-2026-miami",
    vertical: "sports",
    verticalLabel: "Sports",
    title: "FIFA World Cup 2026 — Miami Matches",
    window: "June – July 2026",
    tier: "Captain+",
    status: "Pre-allocation",
    description:
      "Hard Rock Stadium hosts seven matches across SEAson 1's opening Episodes. The Crew sails the Saturdays before. The seats are arranged. The hospitality is taken care of.",
  },
  {
    id: "art-basel-miami-2026",
    vertical: "entertainment",
    verticalLabel: "Entertainment",
    title: "Art Basel Miami — Preview Day",
    window: "December 2026",
    tier: "Commodore-only",
    status: "Announced",
    description:
      "First-look access on Wednesday. The dinners are accounted for. The SEAson 1 recap film premieres at the Faena penthouse. Captain casting opens the same week.",
  },
  {
    id: "f1-miami-2027",
    vertical: "sports",
    verticalLabel: "Sports",
    title: "Formula 1 Miami Grand Prix",
    window: "May 2027",
    tier: "Captain+",
    status: "Pre-allocation",
    description:
      "Suite for Captain. Paddock Club for Commodore. The Race Weekend Episode sails the Saturday before. The transport is arranged.",
  },
  {
    id: "bvi-mini-seaSon",
    vertical: "travel",
    verticalLabel: "Travel",
    title: "BVI Mini-SEAson",
    window: "January 2027",
    tier: "Captain+",
    status: "Pre-allocation",
    description:
      "Three Episodes, three islands, three nights. Captain pre-allocation opens 60 days ahead. Commodore, 90.",
  },
  {
    id: "faena-resident-suite",
    vertical: "hospitality",
    verticalLabel: "Hospitality",
    title: "The Resident Suite — Faena Miami",
    window: "SEAson 1 Episodes 02 + 04",
    tier: "Commodore-only",
    status: "Open",
    description:
      "One suite, held on Episode dates, for a Commodore who applies. Lottery if oversubscribed. The Centurion benefit, translated to hospitality.",
  },
  {
    id: "coachella-2027",
    vertical: "entertainment",
    verticalLabel: "Entertainment",
    title: "Coachella Weekend Package",
    window: "April 2027",
    tier: "Commodore-only",
    status: "Announced",
    description:
      "HVRBOR programs the trip. Flights, hospitality, credentials, return charter. Eight Commodore seats. Pack a hat.",
  },
];

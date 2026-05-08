// ====================================================================
// THE CREW — community layer
// ====================================================================
// Anonymized composition data, the Founding Crew callout, and the
// Bring-a-Crew mechanic. Named member profiles ship later, opt-in.
// ====================================================================

export type CrewSegment = {
  label: string;
  share: string;
  examples: string;
};

export type CrewSnapshot = {
  seasonLabel: string;
  totalSeats: number;
  episodes: number;
  soloShare: string;
  groupShare: string;
  segments: CrewSegment[];
  geography: string[];
  ageBand: string;
};

export const crewSnapshot: CrewSnapshot = {
  seasonLabel: "SEAson 1",
  totalSeats: 96,
  episodes: 8,
  soloShare: "38%",
  groupShare: "62%",
  segments: [
    {
      label: "Operators",
      share: "48%",
      examples:
        "Founders, senior operators, and early-employee number-twos across tech, finance, and creative companies.",
    },
    {
      label: "Wellness Practitioners",
      share: "22%",
      examples:
        "Functional medicine, recovery, performance, and longevity — practicing or running their own studios.",
    },
    {
      label: "Creatives",
      share: "15%",
      examples:
        "Directors, designers, photographers, editors, and the occasional musician. The people the city looks at.",
    },
    {
      label: "Builders",
      share: "10%",
      examples:
        "Architects, hospitality operators, real-estate principals, restaurateurs.",
    },
    {
      label: "Other",
      share: "5%",
      examples:
        "Doctors, athletes, the occasional academic. The Crew curates for variance — the room is more useful when it isn't one type.",
    },
  ],
  geography: [
    "Miami",
    "New York",
    "Los Angeles",
    "Bay Area",
    "London",
    "Mexico City",
  ],
  ageBand: "31 – 44",
};

export type BringACrewRule = {
  tier: "Crew" | "Captain" | "Commodore";
  detail: string;
};

export const bringACrewRules: BringACrewRule[] = [
  {
    tier: "Crew",
    detail:
      "Crew members can request a +1 on any open Episode. The +1 sails as a guest. If they sail again, they're cast as Crew themselves.",
  },
  {
    tier: "Captain",
    detail:
      "Captain members sponsor one new Crew member per SEAson. The sponsored seat is held at the founding rate. The number on their Mark is logged with yours.",
  },
  {
    tier: "Commodore",
    detail:
      "Commodore extends invitations. The Commodore class names the next class. The Crew curates itself.",
  },
];

export const foundingCrewLines = [
  "Anyone who sails any Episode of SEAson 1 carries the Founding Crew designation forward in every future SEAson.",
  "The numbers are permanent. Lower numbers indicate earlier Crew.",
  "The founding rate locks for the duration of the membership.",
  "The Founding Crew gets first allocation on every Mini-SEAson, every co-branded capsule, every Resident Suite.",
];

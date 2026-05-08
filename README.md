# HVRBOR.CLUB

**Saturdays are for the sea.** A GHXSTSHIP brand. SEAson 1 premieres June 20, 2026.

A year-round Miami membership built on a flotilla. Three pillars: **Experience** (the Saturdays), **Product** (the Archive), **Community** (the Crew). Built in Next.js 15 / App Router / TypeScript / Tailwind. Design system: monochromatic ink + paper with a cyan accent, Anton / Bebas Neue / Share Tech Mono / DM Sans, hard 3px borders, no emojis.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build      # Production build
npm run start      # Run production server
npm run lint       # Next.js lint
```

---

## Routes

```
/                       Membership home — three-pillar frame, Network Moments, Episode + Log + Archive + Crew teasers
/episodes               SEAson 1 calendar — Timeline, Itineraries A/B, Calendar, Bottle Episodes, FAQ
/membership             Tier comparison, Network access matrix, The Mark, Membership FAQ
/network                Seven verticals + Network Moments + Harbor teaser
/network/[category]     Seven dynamic vertical pages — entertainment, sports, wellness, hospitality, travel, retail, nightlife
/archive                Product surface — three rings (HVRBOR-direct, co-branded capsules, partner products)
/crew                   Community surface — composition snapshot, Bring-a-Crew, Founding Crew, Crew Stories
/log                    Publication index — featured article + grid + newsletter
/log/[slug]             Article view with related entries
/apply                  Captain casting standby form
/about                  Origin, GHXSTSHIP parentage, Crew archetype, Method
/press                  Boilerplate, brand assets, press contact
/deck                   Investor / partner / sponsor pitch (preserved unchanged from v1)
```

## Project Structure

```
hvrbor/
├── app/
│   ├── layout.tsx                  # Root layout, font loading, metadata
│   ├── page.tsx                    # Membership home
│   ├── episodes/page.tsx
│   ├── membership/page.tsx
│   ├── network/page.tsx + [category]/page.tsx
│   ├── archive/page.tsx
│   ├── crew/page.tsx
│   ├── log/page.tsx + [slug]/page.tsx
│   ├── apply/page.tsx
│   ├── about/page.tsx
│   ├── press/page.tsx
│   ├── deck/page.tsx               # Original v1 investor page
│   ├── error.tsx + not-found.tsx
│   ├── sitemap.ts + robots.ts      # SEO
│   └── globals.css
├── components/
│   ├── guest/                      # Membership-site components
│   │   ├── GuestNav, GuestFooter, GuestHero, MembershipHero, EpisodesHero
│   │   ├── Manifesto, Pillars3, Marquee tokens
│   │   ├── EpisodeTeaserGrid, Calendar, Itineraries, BottleEpisodes
│   │   ├── ArchiveRingGrid, ArchiveTeaserGrid
│   │   ├── CrewComposition, CrewCompositionPreview, BringACrew, FoundingCrewBlock, CrewStoriesGrid
│   │   ├── NetworkMomentsGrid, VerticalCategoryGrid, HarborTeaser
│   │   ├── TierComparison, NetworkAccessByTier, TheMarkBlock, MembershipFAQ, MembershipCTA
│   │   ├── LogPreviewGrid, NewsletterSignup, ApplyForm
│   │   ├── Experience, Included, FAQ, BookingCTA  # Episode-page components
│   ├── Nav, Hero, Footer, Pillars, Thesis, Timeline, Scaling, Economics, Audience, Contact, SectionHeader, Marquee
│   └── (legacy /deck components preserved unchanged)
├── lib/
│   ├── config.ts                   # BOOKING_URL, BRAND_LINE, emails, brand constants
│   ├── content.ts                  # SEAson 1 Episodes, Itineraries, guestPillars, guestIncluded, guestFaqs
│   ├── membership.ts               # Tiers + benefits (E×P×C) + Membership FAQ
│   ├── network.ts                  # Seven verticals + anchor partners + pipeline
│   ├── moments.ts                  # Featured Network Moments
│   ├── archive.ts                  # Three product rings (16 items) + ring metadata
│   ├── crew.ts                     # SEAson 1 composition, Bring-a-Crew rules, Founding Crew copy
│   └── log.ts                      # Publication articles
├── public/press/                   # Brand assets (colors.json + wordmark slots)
├── tailwind.config.ts
└── package.json
```

## The Three-Pillar Frame

The brand operates on three pillars; every editable surface should answer which one it serves.

| Pillar | Surface | Lives in |
| --- | --- | --- |
| **Experience** — the Saturdays | `/episodes` | `lib/content.ts` (SEAson 1 episodes, itineraries, FAQ) |
| **Product** — the Archive | `/archive` | `lib/archive.ts` (three rings) |
| **Community** — the Crew | `/crew` | `lib/crew.ts` (composition, Bring-a-Crew, Founding Crew) |

Membership tiers (`lib/membership.ts`) describe themselves *across* the three pillars rather than as a flat feature list. The Network (`lib/network.ts`) is the partner-access layer that delivers Product and Experience benefits.

## Editing Content

All copy + data lives in `lib/`. Edit there instead of digging into components.

- `lib/config.ts` — site-wide constants (booking URL, brand line, emails)
- `lib/content.ts` — SEAson 1 Episodes, Itineraries, Episode-page pillars, included rows, FAQ
- `lib/membership.ts` — Crew / Captain / Commodore tiers (each with E×P×C benefits) + Membership FAQ
- `lib/network.ts` — seven verticals + anchor partners + pipeline
- `lib/moments.ts` — Featured Network Moments (FIFA 2026, Art Basel, F1 Miami, BVI, Faena, Coachella)
- `lib/archive.ts` — three product rings (HVRBOR-direct, co-branded, partner)
- `lib/crew.ts` — SEAson 1 composition snapshot, Bring-a-Crew rules, Founding Crew copy
- `lib/log.ts` — publication articles with category + body

Every export is typed — TypeScript flags missing fields when you add new items.

---

## Design System

Defined in `tailwind.config.ts`:

### Colors

- `ink` — `#0A0A0A` (primary dark)
- `paper` — `#F5F2EC` (primary light)
- `cyan` — `#00E5FF` (accent)
- `cyan-deep` — `#00BCD4`
- `fog` — `#1A1A1A` (dark card)
- `dust` — `#2A2A28` (darker section bg)
- `line` — `#333333` (dividers on dark)
- `muted` — `#8A8A86` (muted text)

### Fonts (all loaded via `next/font/google` in `app/layout.tsx`)

- `font-display` — Anton (oversized display)
- `font-sub` — Bebas Neue (secondary display)
- `font-mono` — Share Tech Mono (data / labels / eyebrows)
- `font-sans` — DM Sans (body)

### Shadows

- `shadow-hard` — `8px 8px 0 #0A0A0A`
- `shadow-hard-cyan` — `8px 8px 0 #00E5FF`
- `shadow-hard-xl` / `shadow-hard-xl-cyan` — larger hover state
- `shadow-soft` — `4px 4px 0 #0A0A0A`

### Utilities (in `globals.css`)

- `border-hard` — 3px ink border
- `border-paper` — 3px paper border
- `border-cyan-hard` — 3px cyan border
- `text-outline` — outlined text treatment
- `text-outline-cyan` — cyan outlined text

---

## Next Steps / TODOs

When you pick this up in Claude Code, the usual first-pass things to tackle:

**Form submission wiring.** `Contact.tsx` currently simulates the submit with a timeout. Options:

1. Formspree or similar — swap the `onSubmit` body for a `fetch` to their endpoint.
2. Resend + a `/app/api/contact/route.ts` handler for a native Next.js API route.
3. Supabase insert if you want a contacts table in the existing Red Sea Lion stack.

**Metadata and OG.** `app/layout.tsx` has baseline metadata — add OG images (`/public/og.jpg`), a favicon, and structured data when the brand assets are finalized.

**Analytics.** Drop in Vercel Analytics, Plausible, or PostHog. Likely a single `<Script>` in `layout.tsx`.

**Deployment.** Ready for Vercel out of the box. `vercel --prod` from root, or push to GitHub and connect.

**Asset layer.** The `/public` folder is empty. Add:

- `favicon.ico`
- `og.jpg` (1200×630 for social)
- Any brand marks or illustrations

---

## Press & Partnerships

**Contact**

- Press: `press@hvrbor.club`
- Crew: `hello@hvrbor.club`

### Boilerplate (copy-ready, 49 words)

> HVRBOR.CLUB is a year-round Miami membership built on a flotilla. Eight Saturdays per SEAson on Biscayne Bay, twelve seats per Episode, and a Network of priority access across Entertainment, Sports, Health and Wellness, Hospitality, Travel, Retail, and Nightlife. Sailing from Miami Beach Marina, June 20, 2026. A GHXSTSHIP brand.

### Tagline

> Saturdays are for the sea.

Lowercase "sea", period (not exclamation). Never paraphrase. Always the refrain.

### Brand Voice

Five sources: **Tomorrowland** (ritual + worldbuilding), **Yacht Week** (flotilla earnestness, group euphoria), **American Express** (card-as-status, refined service), **Jungle Cruise** (theatrical destination naming, captain-narrator), **Tony Stark** (dry confidence, declarative cadence, never explains).

Synthesis: **Upscale Adventure × Social Luxury.** Less explainer prose, more declarative. Drop schlubby asides. Let ritual carry weight. *Of course it works. Of course there is a number on the back of your card.*

### Brand Assets

Downloadable assets live in `/public/press/` and are served from the site root.

| File | Purpose | Status |
| --- | --- | --- |
| `hvrbor-club-colors.json` | Canonical color palette (hex + semantic roles) | Locked |
| `hvrbor-club-wordmark.svg` | Primary wordmark, SVG with font-as-paths | **Pending final export from design** |
| `hvrbor-club-wordmark-mono.svg` | Single-color variant (no cyan accent) | Pending |
| `hvrbor-club-lockup@2x.png` | Raster fallback, 2x density | Pending |

When the design team exports the final wordmark, drop the SVG into `/public/press/` with the filename above. The table updates itself — no other code changes needed.

---

## License

Proprietary. HVRBOR LLC / A GHXSTSHIP Brand. All rights reserved.

# HVRBR.CLUB

**Miami's flotilla, one day at a time.** A GHXSTSHIP brand launching June 2026.

Investor / partner / sponsor launch page built in Next.js 15 with the App Router, TypeScript, and Tailwind CSS. Follows the GHXSTSHIP Contemporary Minimal Pop Art design system: monochromatic base with cyan accent, Anton / Bebas Neue / Share Tech Mono typography, zero emojis, three-pixel borders, hard geometric shadows.

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

## Project Structure

```
hvrbor/
├── app/
│   ├── layout.tsx          # Root layout, font loading, metadata
│   ├── page.tsx            # Root page, composes every section
│   └── globals.css         # Tailwind directives + brand utilities
├── components/
│   ├── Nav.tsx             # Fixed nav with scroll hide/show
│   ├── Hero.tsx            # Hero with meta row and CTAs
│   ├── Marquee.tsx         # Full-width scrolling band
│   ├── SectionHeader.tsx   # Reusable section head
│   ├── Thesis.tsx          # The gap / thesis statement
│   ├── Pillars.tsx         # Four Miami cultural currents
│   ├── Timeline.tsx        # Five-act day, click to expand
│   ├── Scaling.tsx         # Phase tabs + fleet visualizer
│   ├── Economics.tsx       # Unit economics cards + revenue stack
│   ├── Audience.tsx        # Investors / Partners / Sponsors toggle
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Oversized brand lockup + links
├── lib/
│   └── content.ts          # All editable copy + phase data
├── tailwind.config.ts      # Brand tokens: colors, fonts, shadows, keyframes
├── next.config.mjs
├── tsconfig.json
└── package.json
```

### Server vs. Client Components

Server components (no interactivity needed):

- `Hero`, `Marquee`, `Thesis`, `Pillars`, `Economics`, `Footer`, `SectionHeader`

Client components (`"use client"`):

- `Nav` — scroll listener for hide/show
- `Timeline` — act expand/collapse state
- `Scaling` — phase tab state + fleet viz
- `Audience` — tab state for investor / partner / sponsor
- `Contact` — form state

---

## Editing Content

**All copy and data lives in `lib/content.ts`.** Edit there instead of digging through components:

- `pillars` — four Miami cultural pillar cards
- `timelineActs` — five acts of the day
- `phases` — four fleet scaling phases
- `revenueStack` — revenue distribution rows
- `audiences` — investor / partner / sponsor pitches

Each export is typed — TypeScript will flag missing fields when you add items.

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

## License

Proprietary. HVRBR.CLUB LLC / A GHXSTSHIP Brand. All rights reserved.

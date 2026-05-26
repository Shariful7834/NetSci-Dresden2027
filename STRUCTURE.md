# Project structure — plain-language guide

This explains every folder so anyone (developer or not) can find their way around.
The project uses **Astro** (the website framework) with **React** components and **Tailwind**
for styling.

## Mental model

- A **page** = one web address (URL). Pages live in `src/pages/`.
- A page is assembled from **components** — reusable visual blocks in `src/components/`.
- The words on the screen live in `src/i18n/ui.ts`. The lists/tables of data live in `src/data/`.
- Anyone editing **text or numbers** rarely needs to touch components — just `i18n` and `data`.

```
netsci-dresden/
├─ public/                Files served as-is (favicon, robots.txt, OG image)
├─ src/
│  ├─ assets/             Images that get optimized automatically at build
│  │   └─ tu-dresden.jpeg
│  │
│  ├─ components/         Reusable visual building blocks (React .tsx)
│  │   ├─ layout/         Appears on every page
│  │   │   ├─ Navbar.tsx     Top navigation bar (the only interactive part)
│  │   │   └─ Footer.tsx     Bottom footer
│  │   ├─ sections/       Big blocks that make up a page
│  │   │   ├─ Hero.tsx           Full-screen banner with the photo + title
│  │   │   ├─ About.tsx          “Welcome / about” block + stats
│  │   │   ├─ ImportantDates.tsx Deadlines list
│  │   │   ├─ Contributions.tsx  Talk/poster formats
│  │   │   ├─ DiscoverDresden.tsx City/venue block
│  │   │   └─ Registration.tsx   Registration page body (fees, policy)
│  │   └─ ui/             Small shared pieces
│  │       ├─ SectionLabel.tsx   The gold “eyebrow” label above headings
│  │       ├─ PageHero.tsx       Banner at the top of inner pages
│  │       └─ Prose.tsx          Nice typography wrapper for text pages
│  │
│  ├─ content/            Markdown files = easy content, no coding
│  │   ├─ config.ts          Defines the shape of the content below
│  │   ├─ speakers/          One .md file per keynote speaker
│  │   └─ satellites/        One .md file per satellite event
│  │
│  ├─ data/               Plain data the components read from
│  │   ├─ conference.ts      Dates, stats, contribution formats, travel bullets
│  │   ├─ navigation.ts      The menu structure
│  │   ├─ partners.ts        Partner names + social links
│  │   ├─ program.ts         Daily schedule + committee
│  │   └─ site.ts            Site-wide switches (e.g. landingOnly)
│  │
│  ├─ i18n/               All on-screen text in one place
│  │   ├─ ui.ts              The text strings (edit copy here)
│  │   └─ utils.ts           Tiny helpers used by components
│  │
│  ├─ layouts/            Page “shells” that wrap content (Astro)
│  │   ├─ Layout.astro       The HTML document: <head>, fonts, SEO, scripts
│  │   └─ PageLayout.astro   Inner-page wrapper: navbar + banner + footer
│  │
│  ├─ lib/                Generic helpers
│  │   └─ cn.ts              Combines CSS class names
│  │
│  ├─ pages/              Each file here is a real URL
│  │   ├─ index.astro        “/” — the landing page
│  │   ├─ registration.astro “/registration”
│  │   ├─ about/ program/ venue/ …   the rest of the site
│  │
│  └─ styles/
│      └─ global.css         Base styles + a few shared CSS rules
│
├─ astro.config.mjs       Framework config (integrations, site URL)
├─ tailwind.config.mjs    Colours, fonts, design tokens
└─ tsconfig.json          TypeScript settings
```

## “I just want to change X” — where to go

| I want to change… | Go to |
|---|---|
| Any text on the homepage | `src/i18n/ui.ts` |
| The deadlines or stats | `src/data/conference.ts` |
| The menu | `src/data/navigation.ts` |
| Registration prices | `src/components/sections/Registration.tsx` |
| Add a speaker | new file in `src/content/speakers/` |
| The main photo | replace `src/assets/tu-dresden.jpeg` |
| Colours / fonts | `tailwind.config.mjs` |
| Turn the full menu on | `src/data/site.ts` → `landingOnly = false` |

## Naming conventions

- `.tsx` = a React component (a visual block).
- `.astro` = a page or a page shell (routing + composition).
- `.ts` = plain data or helpers (no visuals).
- Folder names are lowercase and describe their role (`layout`, `sections`, `ui`, `data`).
- Component files are `PascalCase` (e.g. `Navbar.tsx`); data files are `lowercase` (e.g. `conference.ts`).

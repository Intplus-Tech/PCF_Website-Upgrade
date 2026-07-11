# Redemption Church — Website

A Next.js (App Router) + TypeScript + Tailwind CSS v4 website for the church,
built from the Figma design. It ships with **dummy data** so every page and API
route works today; when the backend engineer is ready, integration is a small,
isolated change (see “Backend integration” below).

> Replace the placeholder church name, contact details, and images in
> `src/lib/config/site.ts` and `src/lib/data/*` with the real content.

---

## 1. Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Requirements: Node.js 18.18+ (20 LTS recommended). Fonts load from Google Fonts
and photos from Unsplash, so the first run needs internet.

Useful scripts:

```bash
npm run build        # production build
npm run typecheck    # tsc --noEmit
npm run lint         # eslint (add eslint config if you want linting)
```

---

## 2. Start working BEFORE your boss creates the repo

You don’t need a remote to have full version control. Work locally now, connect
the remote later with zero rework.

```bash
# From inside this project folder:
git init
git add .
git commit -m "chore: initial project scaffold"

git checkout -b feat/church-website     # work on a feature branch
# ...build & commit as you go...
git commit -am "feat: landing + ministries pages"
```

When your boss creates the remote repository:

```bash
git remote add origin <REPO_URL_FROM_BOSS>

# If the remote is EMPTY:
git push -u origin main
git push -u origin feat/church-website     # then open a Pull Request

# If the remote was initialised with a README/.gitignore:
git pull origin main --rebase              # replay your commits on top
git push -u origin feat/church-website
```

The point: commit early and often locally now; push a clean, reviewable branch
the moment the remote exists.

---

## 3. Project structure

```
src/
├── app/                         # App Router — routes live here
│   ├── layout.tsx               # root layout (fonts, Navbar, Footer, metadata)
│   ├── globals.css              # Tailwind v4 + design tokens (@theme)
│   ├── page.tsx                 # "/"           Landing
│   ├── about/page.tsx           # "/about"
│   ├── visit/page.tsx           # "/visit"
│   ├── events/page.tsx          # "/events"
│   ├── media/page.tsx           # "/media"
│   ├── contact/page.tsx         # "/contact"
│   ├── ministries/
│   │   ├── page.tsx             # "/ministries"          (index)
│   │   └── [slug]/page.tsx      # "/ministries/creche"…  (5 ministries)
│   ├── not-found.tsx            # custom 404
│   └── api/                     # ← BACKEND (Route Handlers, dummy data)
│       ├── health/route.ts      # GET  /api/health
│       ├── events/route.ts      # GET  /api/events
│       ├── ministries/route.ts  # GET  /api/ministries
│       ├── ministries/[slug]/route.ts   # GET /api/ministries/:slug
│       ├── sermons/route.ts     # GET  /api/sermons
│       └── contact/route.ts     # POST /api/contact
│
├── components/
│   ├── brand/Logo.tsx           # circular badge mark (SVG)
│   ├── layout/                  # Navbar, Footer, Container, PageHeader
│   ├── sections/                # VisitSection (reused across pages)
│   ├── forms/ContactForm.tsx    # client form → POST /api/contact
│   ├── ui/                      # Button, SectionHeading
│   └── MapEmbed.tsx             # OpenStreetMap embed (no API key)
│
├── lib/
│   ├── config/site.ts           # church identity, nav, service times
│   ├── data/                    # dummy data (ministries, events, sermons, staff)
│   ├── api.ts                   # DATA-ACCESS LAYER — the swap point for the real API
│   └── utils.ts                 # cn(), date helpers
│
└── types/index.ts               # shared TypeScript types
```

---

## 4. Backend integration (when the API is ready)

Every page reads data through `src/lib/api.ts`. Today those functions return the
dummy data from `src/lib/data/*`. To go live, change **only** those function
bodies — no page or component needs to change:

```ts
// src/lib/api.ts
export async function getEvents(): Promise<ChurchEvent[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/events`, {
    next: { revalidate: 300 },
  });
  const json = await res.json();
  return json.data;
}
```

Set `API_BASE_URL` in `.env.local` (see `.env.example`). The route handlers under
`app/api/*` mirror the same shapes, so they can be pointed at the real database
or kept as a thin proxy — whichever the backend engineer prefers.

---

## 5. Design tokens

Defined in `src/app/globals.css` under `@theme`:

- **Wine** `--color-wine-700 #6e1423` (primary) with 900/800/600/500 shades
- **Gold** `--color-gold-500 #c9a24b` (accent)
- **Cream** `--color-cream #f7f2e9` (background)
- **Display** font: Fraunces · **Body** font: Inter

Use them as normal Tailwind utilities: `bg-wine-700`, `text-cream-50`,
`font-display`, etc.

---

## 6. Deploy to Vercel

Push to the remote, import the repo in Vercel, and deploy — no extra config
needed. Add any environment variables (e.g. `API_BASE_URL`) in the Vercel
dashboard.

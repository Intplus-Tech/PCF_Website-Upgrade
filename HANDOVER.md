# Peoples Church Falkirk — Website Handover Documentation

_Last updated: [today's date]_
_Prepared by: [your name]_

---

## 1. Overview

This is the website for **Peoples Church Falkirk**, built as a redesign/upgrade
of the existing site at **pcfministries.org**.

It is a modern, content-managed website: church staff can edit most content
themselves (sermons, events, ministries, photos) through a built-in admin panel
called **Sanity Studio** — no code changes needed for day-to-day updates.

- **Live domain (current site):** https://pcfministries.org
- **Code repository:** https://github.com/Intplus-Tech/PCF_Website-Upgrade
- **Hosting (planned):** Vercel

---

## 2. Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **CMS (content management):** Sanity (embedded Studio at `/studio`)
- **Contact form email:** EmailJS
- **Maps:** OpenStreetMap embed (no API key required)
- **Deployment target:** Vercel

---

## 3. Running the Project Locally

Requirements: Node.js (v18.18+), Git.

```bash
# 1. Install dependencies (the flag is REQUIRED — see version notes below)
npm install --legacy-peer-deps

# 2. Create a .env.local file in the project root (see section 5)

# 3. Start the development server
npm run dev
```

- Website: **http://localhost:3000**
- Content editing (Studio): **http://localhost:3000/studio**

> Note: the machine needs several GB of free disk space. If you see an
> `ENOSPC` error, clear space: `npm cache clean --force` and delete the
> `.next` folder.

---

## 4. Content Editing — Guide for Church Staff

This is the important part for the church. To edit content:

1. Go to **[live-site-url]/studio** (locally: http://localhost:3000/studio).
2. **Log in** with the authorised Google account.
3. On the left you'll see content types: **Ministry**, **Event**,
   **Recent Memory**, **Sermon / Media**.
4. Click a type to see existing items. Click an item to **edit** it, or click
   the **+** to **add a new one**.
5. Fill in the fields and upload images where shown.
6. Click **Publish** (bottom right) to save. Changes appear on the website
   shortly after (refresh the page).

### What can be edited in Sanity:
- **Ministries** — all 5 (Crèche, Sunday School, Men's, Women's, Seniors):
  name, description, images, meeting times, features, team photos, etc.
- **Events** — the Event Calendar entries (title, date, time, location).
- **Recent Memories** — the photo gallery on the Events page.
- **Sermons / Media** — the sermon cards in the "Your Sermon. Your Moment."
  carousel.

### What is NOT in Sanity (edited in code only):
- Pastor bios on the Home and About pages (rarely change).
- The two large "Featured Series" blocks on the Media page.
- Site navigation, footer, and general page text.
- Service times and contact details (in `src/lib/config/site.ts`).

---

## 5. Environment Variables

These live in a file called **`.env.local`** in the project root. This file is
**NOT** committed to Git (it contains secrets). Anyone setting up the project
fresh must create it.

Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=o8psaqh6
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

EmailJS (contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=[FILL IN — in EmailJS dashboard]
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=[FILL IN — in EmailJS dashboard]
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=[FILL IN — in EmailJS dashboard]

> ⚠️ When deploying to Vercel, these same variables must be added in the
> Vercel dashboard (Project → Settings → Environment Variables), because
> `.env.local` is not in the repo.

---

## 6. Sanity CMS — Setup Details

- **Project name:** Peoples Church Falkirk
- **Project ID:** `o8psaqh6`
- **Dataset:** `production`
- **Organization ID:** `o9pEjTQWS`
- **Studio location:** embedded in the site at `/studio`
- **Login:** Google account — **[FILL IN which account owns it]**
- **Plan:** Growth Trial (**[FILL IN trial end date]**) — confirm it drops to
  the free tier (sufficient for this site) or arrange billing before it ends.

### ⚠️ Version pins (DO NOT change without testing)
The Sanity packages are locked to specific versions for compatibility with
React 19 / Next.js 15. Newer Sanity versions crash (React `useEffectEvent` error).

sanity: 3.99.0 (exact)
@sanity/vision: 3.99.0 (exact)
next-sanity: 9.12.3 (exact)

All installs must use `--legacy-peer-deps`.

### ⚠️ CORS origins (Sanity → API tab in sanity.io/manage)
For the Studio to work, the site's URL must be added as a CORS origin with
**"Allow credentials" ticked**:
- `http://localhost:3000` — already added (for local development).
- **[FILL IN production URL]** — MUST be added when the site deploys, or the
  live Studio won't log in.

### Login troubleshooting
- Must log into the Studio with the account that **owns** the project. A
  non-owner account causes a CORS/login bounce.
- Requires third-party cookies enabled in the browser.

---

## 7. EmailJS — Setup Details

The Contact form sends submissions via EmailJS.
- **Account:** currently under **[FILL IN email]** — see ownership note below.
- **Service:** Gmail (`service_973t40w`).
- **Template:** `template_t5bqvab` — sends name, email, phone, subject,
  message, and "how did you hear about us" to the church inbox.
- **Currently delivers to:** **[FILL IN email]** — change to the church's
  real inbox in the EmailJS template's "To Email" field.
- Keys are in `.env.local` (section 5).
- Package: `@emailjs/browser`.

---

## 8. Ownership & Transfer — ACTION REQUIRED

The following accounts were created under a personal/developer account to get
started and **must be transferred to the church before final handover:**

- [ ] **Sanity** project ("Peoples Church Falkirk", own organisation) — transfer to church.
- [ ] **EmailJS** account — transfer to church, and point the contact form to
      the church's real inbox.
- [ ] **Domain (pcfministries.org)** — confirm who currently manages the DNS/
      registrar (**[FILL IN]**). Repointing to the new site happens after
      deployment.

---

## 9. Project Structure (quick reference)

src/
├── app/                    # pages & routes (App Router)
│   ├── page.tsx            # Home
│   ├── about/ visit/ events/ media/ contact/
│   ├── ministries/[slug]/  # ministry detail pages
│   ├── studio/             # Sanity Studio (/studio)
│   └── api/                # dummy API routes (legacy — data now via Sanity)
├── components/             # UI: layout, sections, forms, media, ministries
├── lib/
│   ├── api.ts              # DATA LAYER — all Sanity fetches live here
│   ├── config/site.ts      # church name, nav, service times, contact
│   └── data/               # leftover dummy data (staff still used here)
├── sanity/
│   ├── client.ts           # Sanity connection
│   ├── image.ts            # image URL helper
│   └── schemaTypes/        # content definitions (ministry, event, memory, sermon)
└── types/                  # shared TypeScript types
sanity.config.ts            # Studio configuration

Key file: **`src/lib/api.ts`** — this is the single place all content is
fetched from Sanity. Ministries, events, memories, and sermons are live from
Sanity; staff is still dummy data.

---

## 10. Deployment (planned — not yet done)

1. Push code to the GitHub repo (done).
2. Import the repo into **Vercel**.
3. Add all environment variables (section 5) in the Vercel dashboard.
4. Add the Vercel production URL as a Sanity CORS origin (section 6).
5. Test the live site (contact form, Studio login, all pages).
6. **Then** repoint pcfministries.org DNS to the Vercel site.

---

## 11. Known Notes & Gotchas

- **Line endings:** Windows shows `LF will be replaced by CRLF` warnings on
  commit — harmless.
- **Images:** external image domains (`cdn.sanity.io`, `images.unsplash.com`)
  are whitelisted in `next.config.ts`. New domains must be added there.
- **File location:** project currently in `~/Downloads` (OneDrive-synced),
  which has caused file-lock (`EBUSY`) and sync errors. Recommend moving to a
  non-synced folder like `C:\dev\`.
- **Responsiveness:** desktop is complete and matches the Figma. Mobile/tablet
  responsiveness is in progress at time of writing.

  ## Domain
- Live domain: pcfministries.org (expires 2027-02-27)
- Registrar: Domain Monster / Mesh Digital Limited (domainmonster.com)
- DNS managed at: GoDaddy — nameservers ns65/ns66.domaincontrol.com
- Repointing to the new site (Vercel) is done in the GoDaddy DNS panel,
  as the FINAL step after deployment + testing. Requires GoDaddy account access.
- Domain has standard registrar locks (client transfer/update prohibited) — normal.
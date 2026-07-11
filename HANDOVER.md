# Peoples Church Falkirk — Website Handover

## Overview
Church website built with Next.js (App Router), TypeScript, and Tailwind CSS v4.
Content is managed through Sanity CMS (embedded Studio at /studio).
Contact form emails are sent via EmailJS.

## Tech Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Sanity CMS (content: ministries, sermons, events, staff)
- EmailJS (contact form delivery)
- Hosting: Vercel (planned)

## Accounts & Ownership
> ⚠️ ACTION REQUIRED: transfer these to the church's ownership before final handover.
- EmailJS: currently under waitr.info@gmail.com — TO BE TRANSFERRED
- Sanity: currently under waitr.info@gmail.com — TO BE TRANSFERRED

## Environment Variables (.env.local — NOT committed to git)
- NEXT_PUBLIC_EMAILJS_SERVICE_ID
- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
- (Sanity variables — added below as we set up)

## Running Locally
1. npm install
2. Create .env.local with the variables above
3. npm run dev  → http://localhost:3000
4. Studio (content editing) → http://localhost:3000/studio

## Deployment
(To be documented when deployed to Vercel — remember to add all env variables in the Vercel dashboard.)

## Content Editing (for church staff)
(To be written once Sanity is set up — how to log in and edit sermons, events, etc.)

- Sanity: PCF project created in its OWN organization "Peoples Church Falkirk" (owned by [your email]). Separate from the Intplus org. — TO BE TRANSFERRED to church.

## Notes
- next-sanity pinned to v9 for Next.js 15 compatibility. If upgrading to Next 16 later, update next-sanity to latest.

## Sanity — login/access notes
- Studio: http://localhost:3000/studio
- MUST log into Studio with the account that OWNS the project (org "Peoples Church Falkirk", ID o9pEjTQWS). A non-owner account causes a CORS/login bounce.
- CORS origin http://localhost:3000 (Allow credentials: ✓) added in API tab. Production URL must be added the same way at deploy time.

## Content editing workflow (for church staff)
1. Go to /studio and log in.
2. Click Ministry (or Event/Sermon once added).
3. Click a item to edit, or + to add a new one.
4. Fill the fields, upload images, then click PUBLISH.
5. Changes appear on the website after a refresh.

## Sanity — content types
- On Sanity: Ministries, Events, Recent Memories, Sermons
- NOT on Sanity (hardcoded, rarely changes): Pastor bios on Home/About, featured series blocks on Media, site nav/footer. Edit these in code if needed.


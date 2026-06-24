# Steven Mascarenhas — Portfolio

A full-stack personal portfolio built with the modern Vercel stack. Single scrolling
page with smooth scroll-reveal animations and a working contact form that stores each
submission in Supabase and emails you via Resend.

## Core stack

| Layer           | Tool                       |
| --------------- | -------------------------- |
| Language        | TypeScript                 |
| UI library      | React 19                   |
| Framework       | Next.js 16 (App Router)    |
| Styling         | Tailwind CSS v4            |
| Animation       | Framer Motion              |
| Database        | Supabase (PostgreSQL)      |
| Email           | Resend                     |
| Analytics       | Vercel Analytics           |
| Hosting         | Vercel                     |
| Version control | Git + GitHub               |
| Editor          | VS Code                    |

## Project structure

```
portfolio-app/
├── app/
│   ├── api/contact/route.ts   # POST endpoint: Zod validate → Supabase insert → Resend send
│   ├── globals.css            # Tailwind v4 + design tokens + responsive rules
│   ├── layout.tsx             # Fonts (Manrope + IBM Plex Mono), metadata, Vercel Analytics
│   └── page.tsx               # Assembles all sections
├── components/                # Hero, Projects, Experience, Skills, Education, etc.
├── lib/
│   ├── data.ts                # ALL content lives here — edit copy in one place
│   └── supabase.ts            # Server-only Supabase admin client
├── public/                    # profile.png + Steven-Mascarenhas-CV.pdf
├── supabase/schema.sql        # contacts table — run once in Supabase
└── .env.example               # copy to .env.local and fill in
```

## Getting started

### 1. Install

```bash
cd portfolio-app
npm install
```

### 2. Environment variables

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

- **RESEND_API_KEY** — from https://resend.com/api-keys
- **CONTACT_TO_EMAIL** — where messages land (your inbox)
- **CONTACT_FROM_EMAIL** — `onboarding@resend.dev` for testing, or an address on a
  domain you've verified in Resend for production
- **NEXT_PUBLIC_SUPABASE_URL** / **SUPABASE_SERVICE_ROLE_KEY** — Supabase → Project
  Settings → API

> The contact form still sends email even if Supabase vars are missing — the DB write
> is a best-effort backup, not a hard dependency.

### 3. Database (Supabase)

Create a project at https://supabase.com, then open **SQL Editor → New query**, paste
the contents of `supabase/schema.sql`, and run it. This creates the `contacts` table.

### 4. Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## Editing content

Everything — headline, intro, projects, hackathons, experience, skills, education,
certifications, volunteering, links — lives in **`lib/data.ts`**. Change the text there
and the page updates. No component edits needed for copy changes.

To swap the accent colour, edit `--accent`, `--accent-soft`, and `--accent-softer` in
`app/globals.css`.

Replace `public/profile.png` and `public/Steven-Mascarenhas-CV.pdf` with your own.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at https://vercel.com/new.
3. Add the same environment variables from `.env.local` in **Project Settings →
   Environment Variables**.
4. Deploy. Vercel auto-detects Next.js — no extra config.

Every `git push` to the main branch redeploys automatically.

## Notes

- **Animations:** `components/Reveal.tsx` wraps sections in Framer Motion and fades them
  in on scroll (`whileInView`, once). This replaces the IntersectionObserver code from
  the original design.
- **Accessibility / no-JS:** the contact card shows your email directly, so visitors can
  always reach you even if the form script doesn't run.
- **Spam:** for production, consider adding a honeypot field or a rate limit to the
  `/api/contact` route.

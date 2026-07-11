# Djaya Massage & Reflexology Batam

Premium traditional Indonesian spa website — mobile-first, bilingual (ID/EN), built faithfully from the `Indonesia massage spa design` mockup.

**Live:** [djayamassagebatam.com](https://djayamassagebatam.com/)

## Tech stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** — design tokens match the Claude design file exactly
- **Framer Motion** — subtle scroll reveals
- **next/font** — Cormorant Garamond + Mulish (self-hosted, no layout shift)
- **SEO / GEO** — JSON-LD LocalBusiness + FAQPage, llms.txt, intent headings, SSR fact block

## Project structure

```
.
├── app/                    # Next.js App Router (layout, page, globals)
├── components/             # UI sections (Header, Hero, Menu, Reviews, …)
├── lib/                    # i18n strings, treatment menu data, reviews
├── public/img/             # Optimized images served at /img/*
├── assets/img/             # Source photography & brand assets
├── Indonesia massage spa design/   # Design source of truth (Djaya Massage.dc.html)
└── public/robots.txt, sitemap.xml
```

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

### GitHub auto-deploy (recommended)

1. Push this repo to [github.com/adithyodw/djaya-apps](https://github.com/adithyodw/djaya-apps).
2. In [Vercel](https://vercel.com/adithyodws-projects/djaya-apps): **Import** the GitHub repo.
3. Framework preset: **Next.js** (auto-detected). Build: `next build`. Output: default.
4. Every push to `main` deploys production; branches/PRs get preview URLs.

### Vercel CLI

```bash
npx vercel          # preview
npx vercel --prod   # production
```

## Booking & contact

All booking CTAs open WhatsApp with a pre-filled message:

- **WhatsApp:** +62 852-7835-5590
- **Instagram:** [@djayamassage](https://www.instagram.com/djayamassage/)
- **Address:** Ruko Penuin Centre Blok A No. 14, Batu Selicin, Lubuk Baja, Batam 29411
- **Hours:** Daily 10:00 – 22:00 WIB

## Design fidelity

Layout, typography, colors, spacing, and section order follow `Indonesia massage spa design/Djaya Massage.dc.html` — no sections removed, no layout reinterpretation.

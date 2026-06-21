# Djaya Massage & Reflexology Batam

Premium traditional Indonesian spa website — a fast, mobile-first, single-page static site.
Built faithfully on the provided `code.html` layout and the `DESIGN.md` design system ("Nusantara Wellness").

**Live target:** `https://djaya-apps.vercel.app/`

## Tech

- Static `index.html` — no build step required to deploy.
- Tailwind CSS via CDN (same setup as the source `code.html`).
- Google Fonts: Playfair Display + Montserrat; Material Symbols icons.
- Real business photos served from `assets/img/` as WebP with JPEG fallback.
- SEO: semantic HTML, Open Graph / Twitter cards, `DaySpa` JSON-LD, `robots.txt`, `sitemap.xml`.

## Project structure

```
.
├── index.html                 # Production site (source of truth: code.html + DESIGN.md)
├── code.html                  # Original design reference (kept, unmodified)
├── DESIGN.md                  # Design system reference
├── vercel.json                # Static hosting config + security headers + asset caching
├── robots.txt / sitemap.xml   # SEO
├── assets/img/                # Optimized images (.webp + .jpg) + favicon.svg
├── scripts/optimize-images.mjs# One-off WebP optimizer (dev only)
├── Logo.pdf                   # Official logo (print source — see note below)
└── *.jpeg                     # Original source photos (kept as masters)
```

## Local preview

Any static server works, e.g.:

```bash
npx serve .
# or
python -m http.server 5173
```

Then open the printed URL.

## Re-optimizing images (optional, dev only)

```bash
npm install
npm run optimize:images
```

This regenerates `.webp` variants and the `og-card.jpg` social image from the `.jpg` files in `assets/img/`.

## Deploy to Vercel

### Option A — GitHub integration (recommended, auto-deploy)

1. Push this repo to GitHub (`https://github.com/adithyodw/djaya-apps`).
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: **Other**. Build command: _none_. Output directory: _root_.
4. Deploy. Every push to `main` → production; every branch/PR → preview.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel          # preview deploy
vercel --prod   # production deploy
```

## Booking

All booking CTAs open WhatsApp with a pre-filled message:

> Hello Djaya Massage Batam, I would like to book a treatment.

Number: **+62 852-7835-5590** · Instagram: **@djayamassage**

## Notes / to verify before launch

- **Operating hours** (`10:00–22:00 WIB`, daily) are carried over from `code.html` — confirm with the business and update both the Location section and the JSON-LD `openingHoursSpecification`.
- **Logo:** the official `Logo.pdf` is the print master. The web header uses the `DJAYA` wordmark (as in `code.html`); the favicon uses the brand cairn motif. To use the exact logo mark on the site, export `Logo.pdf` to PNG/SVG and drop it into `assets/img/`.
- **Canonical domain:** update the `https://djaya-apps.vercel.app/` URL in `index.html` (canonical + OG), `robots.txt`, and `sitemap.xml` once the final domain is known.

# Aksad Hossain — Portfolio

Personal portfolio site. Dark-green / rainy aesthetic with a video-backed hero.

## Stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Single-page composition
  globals.css       # Tailwind + rain/noise overlays + base styles
components/
  Nav.tsx           # Scroll-aware top nav
  Hero.tsx          # Full-viewport video hero w/ Musashi quote
  About.tsx         # Flow-state philosophy
  Stack.tsx         # Languages / frameworks / infra / AI tooling
  Projects.tsx      # Featured + more-work grid
  Contact.tsx       # Email + GitHub
public/
  hero.mp4          # Hero background video
```

## Deploying to Vercel

1. Push this repo to GitHub (already on `Aksaddd/Portfolio-Website`).
2. On [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Next.js** — no env vars needed.
4. Deploy. Vercel auto-builds on every push to `main`.

> Note: `public/hero.mp4` is ~19 MB. For production, consider hosting the
> video on a CDN (Cloudinary, Mux, or Vercel Blob) and swapping `/hero.mp4`
> for the CDN URL if you want faster first paint.

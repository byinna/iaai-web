# ia-ai.pro

Landing page for **Ingrid Ashida** — AI consultant &amp; builder. Live at **[ia-ai.pro](https://ia-ai.pro)**.

A single-page portfolio in a comic-book / risograph style, with a recurring red-ink
cloud motif whose hero is an animated loop. The site is both a portfolio and a
portfolio piece — it's meant to show the web design, not just describe it.

## Stack

- **[Next.js 16](https://nextjs.org/)** (App Router) · React 19 · TypeScript
- Fully **static** (no server runtime) — `next/font` for Rubik Mono One + Space Mono, `next/image` for photography
- Deployed on **[Vercel](https://vercel.com/)**; DNS at GoDaddy

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run start    # serve the production build
```

## Structure

```
app/
  layout.tsx     # fonts, metadata (SEO/OG), favicon
  page.tsx       # composes the sections + <RevealController/>
  globals.css    # design tokens (CSS vars), comic styling, keyframes, responsive
  icon.svg       # IA/AI favicon
components/
  Hero.tsx        About.tsx        Work.tsx / ProjectCard.tsx        Contact.tsx
  CloudHero.tsx        # animated hero cloud (video + static fallback)
  RevealController.tsx # scroll-reveal (IntersectionObserver, reduced-motion aware)
lib/projects.ts  # the four featured projects (typed data + copy)
public/          # headshot, project tiles (work/), cloud assets (clouds/), og.png
```

## The cloud motif

The hero cloud is generated art: a palette-matched risograph comic cloud
(Recraft V4.1) animated into a seamless loop (Kling 3.0 Turbo), then boomerang-looped
with ffmpeg → `public/clouds/cloud-hero.mp4`. Under `prefers-reduced-motion` (or if the
video fails), it falls back to a static still with a slow CSS drift. The work-section
and footer bands use static cloud stills with the same drift.

## Design system

| Token | Value | | Token | Value |
|---|---|---|---|---|
| cream (page) | `#d9d2c2` | | red (accent) | `#e4573d` |
| cerulean (panels) | `#3e88b4` | | red shadow | `#7e2013` |
| ink (borders) | `#26150f` | | paper (text) | `#f2e3d5` |

Type: **Rubik Mono One** (display) · **Space Mono** (body). Signatures: 3px ink borders,
hard offset comic text-shadows, desaturate→saturate project images on hover.

## Deploy

Connected to Vercel git integration — **push to `main` auto-builds and deploys to
production**. Manual deploys via `vercel deploy --prod` also work.

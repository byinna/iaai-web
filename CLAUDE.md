# CLAUDE.md

Guidance for Claude Code when editing this repo.

## What this is

The `ia-ai.pro` landing page — Ingrid Ashida's AI-consulting portfolio. Single-page
Next.js 16 (App Router, TS), fully static, comic/risograph aesthetic. It's a portfolio
*and* a portfolio piece, so **visual craft matters** — keep changes faithful to the
established design system.

## Commands

```bash
npm run dev            # local dev at :3000
npm run build          # static production build (must pass before deploy)
npm run start          # serve the build
```
No test suite. No `next lint` (removed in Next 16). Verify visually — drive the page
with Playwright at 375 / 768 / 1280 and check the browser console is clean.

## Deploy

- Vercel project `iaai-web`, connected to GitHub `byinna/iaai-web` via git integration.
- **Push to `main` → auto-deploys to production** (`ia-ai.pro`). Prefer this over CLI.
- Domains `ia-ai.pro` + `www` are live (HTTPS). DNS is at GoDaddy; do **not** touch the
  `gateway.ia-ai.pro` record (a separate app).

## Architecture / conventions

- **Server components by default.** Only `CloudHero.tsx` and `RevealController.tsx` are
  `"use client"` — keep it that way unless a change genuinely needs the client.
- **Design tokens** live as CSS custom properties in `app/globals.css` (`--cream`,
  `--blue`, `--ink`, `--red`, `--redshadow`, `--paper`, `--lightblue`). Use them; don't
  hardcode hex in components. Styling is class-based in `globals.css`, not inline.
- **Scroll reveal:** `RevealController` adds `.reveal-ready` and reveals `[data-reveal]`
  elements on scroll (staggering `[data-card]`), re-firing the `titleReg` animation on
  `[data-snap]` headings. Consequence: below-the-fold sections render at `opacity:0`
  until scrolled into view (or immediately if reduced-motion / no-JS). A full-page
  screenshot taken before scrolling will look blank below the fold — that's expected;
  scroll first.
- **Motion is always gated by `prefers-reduced-motion`** (see the media query at the end
  of `globals.css` and the checks in the two client components). Preserve this.
- **Responsive:** fixed desktop layout collapses at the `900px` breakpoint in
  `globals.css`; headings scale with `clamp()`. Re-check all three widths after layout
  changes.

## Content

- Featured projects are typed data in `lib/projects.ts`. Copy is **pre-vetted** from
  `~/Developer/iaai/Portfolio/projects/*.md` (an Obsidian vault, the source of truth) and
  must stay inside its do-not-overstate flags — e.g. AET is "27 issued patents" and its
  tile is an approved anonymized stand-in (no real patent imagery). When changing project
  copy, pull from those notes rather than inventing claims.
- Tile images: `public/work/`. Headshot: `public/headshot.jpg`. Contact links (email,
  LinkedIn `in/ingrid-ashida`, GitHub `byinna`) are in `components/Contact.tsx`.

## The cloud assets (regenerating)

Hero cloud pipeline: Higgsfield `recraft_v4_1` (palette-pinned image) → `kling3_0_turbo`
(image-to-video) → ffmpeg boomerang loop → `public/clouds/cloud-hero.mp4`, with
`cloud-hero.webp`/`-poster.webp` as fallbacks and `cloud-band.webp` for the section
bands. To regenerate, keep the palette pinned to the tokens above and re-encode small
(the mp4 is a decorative background — target a few MB, `-crf ~30`, scale ~1152w).

## Gotchas

- Next 16, React 19 — some Next 15 guidance is stale.
- The original design lives in a Claude Design project (`.dc.html`, custom `<x-dc>`
  runtime) — not the source of truth for code; this repo is. DesignSync `get_file`
  truncates files >256 KiB, which is why cloud art was generated rather than downloaded.

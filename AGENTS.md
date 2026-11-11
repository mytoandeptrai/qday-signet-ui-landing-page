# Signet landing page

One-page marketing site for Signet (Agentic Payments); the Trellis wallet is the supporting product. The mobile wallet preview that used to live here was removed. Recover it from `f984260` if needed.

## Routes

- `/`: the landing page (`src/modules/landing`).
- `/design-kit`: component catalogue, kept for review.
- Sub-pages, reached from the About menu: `/company`, `/community`, `/events`, `/blog`, `/blog/$slug`, `/whitepaper`, `/media`, `/brand-kit`. One module each in `src/modules/<page>`, shared frame in `src/modules/site-shell`, shared blocks in `src/components/site-blocks`.
- Everything else is a 404.

## Copy and links

- All landing copy lives in `src/content/landing.ts`. Change text there, not in components.
- Sub-page copy and sample data live in `src/content/pages/*.ts`; the About menu in `src/content/nav.ts`. Routes read lists through `src/lib/content.ts` (async), so swapping mock data for real data only touches that file.
- Use `AppLink` for any link from content: it routes `/paths` client side and sends `#anchors` to `/#anchor` off the landing page.
- Copy says "Signet" and "SignetPass"; never QPass or TrellisPass.
- Links with no destination yet are `#` (CTAs, Docs, GitHub, Discord, Terms, Privacy). Partner names and logos are invented placeholders.
- Nothing on the page implies a real transfer: figures and addresses are sample data.

## Design rules

- Use only tokens from `src/styles.css`; no new colours.
- Palette follows Trellis brand kit v5 (from `qday-trellis-ui-kit`): deep teal #06343a ground and cyan #60f2ff accent in dark, which is the default (`DEFAULT_THEME`, applied before paint by `themeInitScript`, stored under `trellis-theme-v5`); light uses #f4f7f8 with deep-teal primary. The Signet logo and icons stay blue and are not recoloured.
- Inter Tight for headlines (weight 500), Inter for body, JetBrains Mono only for machine data (amounts, CLI).
- No fade-in per section, no hover-lift cards, no numbered steps, no arrows in buttons.
- Motion not triggered by the user is limited to: hero lattice route, ledger rows, the three-layer diagram, nav hide on scroll, partner marquee. - User-triggered motion on sub-pages: `AnimationContainer` (`src/components/animation-container.tsx`): a short fade and slide when sub-page content scrolls into view, once, staggered for card grids, the About dropdown, and filter/tab changes on Events, Blog and Media. These also stop under `prefers-reduced-motion`.
- All of it must stop under `prefers-reduced-motion`.

## Review comments

`CommentLayer` stays mounted in the root so reviewers can pin comments. Without `GITHUB_TOKEN` it stores pins in localStorage; the token stays server-side (`.env.local`, never committed).

# Signet landing page

One-page marketing site for Signet (Agentic Payments); the Trellis wallet is the supporting product. The mobile wallet preview that used to live here was removed. Recover it from `f984260` if needed.

## Routes

- `/`: the landing page (`src/components/landing/*`).
- `/design-kit`: component catalogue, kept for review.
- Everything else is a 404.

## Copy and links

- All landing copy lives in `src/content/landing.ts`. Change text there, not in components.
- Copy says "Signet" and "SignetPass"; never QPass or TrellisPass.
- Links with no destination yet are `#` (CTAs, Docs, GitHub, Discord, Terms, Privacy). Partner names and logos are invented placeholders.
- Nothing on the page implies a real transfer: figures and addresses are sample data.

## Design rules

- Use only tokens from `src/styles.css`; no new colours.
- Inter Tight for headlines (weight 500), Inter for body, JetBrains Mono only for machine data (amounts, CLI).
- No fade-in per section, no hover-lift cards, no numbered steps, no arrows in buttons.
- Motion not triggered by the user is limited to: hero lattice route, ledger rows, the three-layer diagram, nav hide on scroll, partner marquee. All of it must stop under `prefers-reduced-motion`.

## Review comments

`CommentLayer` stays mounted in the root so reviewers can pin comments. Without `GITHUB_TOKEN` it stores pins in localStorage; the token stays server-side (`.env.local`, never committed).

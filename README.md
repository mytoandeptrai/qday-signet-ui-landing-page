# Signet landing page

A one-page website for Signet, a spending pass that lets AI agents pay within limits you set. The Trellis wallet is the supporting product. All text, numbers and partner names on the page are sample data.

The page is built with TanStack Start, React, TypeScript and Tailwind CSS.

## Requirements

- Node.js 20.19 or newer
- [pnpm](https://pnpm.io/). This project supports pnpm only, so please do not use npm, yarn or bun.

## Get started

```sh
git clone git@github.com:mytoandeptrai/qday-signet-ui-landing-page.git
cd qday-signet-ui-landing-page
pnpm install
pnpm dev
```

Then open the local address that `pnpm dev` prints.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview the production build |
| `pnpm lint` | Check the code with ESLint |
| `pnpm test` | Run the tests |

## Pages

- `/` is the landing page.
- `/design-kit` shows the UI components. It is for design review.

## Change the text

All landing page text is in `src/content/landing.ts`. Edit it there. You do not need to change the components. Links that have no destination yet use `#`.

## Review comments (optional)

Reviewers can pin comments on the page. Without a token, comments are saved only in the browser. To save them as GitHub Issues:

1. Copy `.env.example` to `.env.local`.
2. Set `GITHUB_TOKEN` (a fine-grained token with "Issues: Read and write") and `GITHUB_REPO`.

The token stays on the server. Never commit `.env.local`.

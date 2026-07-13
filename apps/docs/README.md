# Extraction UI Docs

This directory contains the documentation website for the `extraction-ui` system.

## What is included

- `apps/docs/app/` — custom app layout and Nextra integration
- `apps/docs/content/` — Markdown and MDX documentation content

## Getting started

From the repository root:

```bash
pnpm install
```

```bash
cd apps/docs
pnpm dev
```

Open `http://localhost:3000` to view the docs locally.

## Scripts

```bash
pnpm dev       # run the Next.js development server
pnpm build     # build the production site
pnpm start     # run the production server
pnpm postbuild # generate Pagefind search index after build
pnpm lint      # lint the docs app
pnpm lint:fix  # fix lint issues
pnpm lint:css  # lint CSS files
```

## Notes

- `next.config.mjs` configures `nextra` and the docs theme.
- `app/layout.tsx` defines the docs navigation, footer, and page layout.
- This package is part of a pnpm workspace and relies on shared local packages.

## Deploy

Build the site and generate the search index:

```bash
pnpm build
pnpm postbuild
```

Then deploy the built Next.js app with your hosting provider.

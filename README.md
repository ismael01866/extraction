# Extraction

A modern monorepo for React component library and demo applications, built with TypeScript, Tailwind CSS, and Turbo.

## Overview

This is a monorepo containing:

- **app/demos** — Demo templates to test the component library
- **app/docs** — Documentation site
- **packages/components** — Shared components
- **packages/extraction-ui** — Main component library
- **packages/utils** — Shared utilities

## Technology Stack

- **pnpm** — Fast, disk space efficient package manager
- **Node.js** >= 18.0.0
- **Turbo** — High-performance build system for monorepos
- **TypeScript** — Type safety across the entire project
- **React** 19.2.0 — UI library
- **Tailwind CSS** — Utility-first styling
- **Vite** — Fast build tool and dev server
- **ESLint** — Code linting

## Project Structure

```
extraction/
├── apps/
│   ├── demos/
│   │   ├── astro/          # Astro demo app
│   │   ├── gatsby/         # Gatsby demo app
│   │   ├── next/           # Next.js demo app
│   │   ├── vite/           # Vite demo app
│   │   └── docs/           # Documentation site
├── packages/
│   ├── components/         # Shared React components
│   ├── extraction-ui/      # Main component library
│   └── utils/              # Shared utilities
├── package.json            # Root workspace configuration
├── pnpm-workspace.yaml     # pnpm workspace setup
├── turbo.json              # Turbo build configuration
└── tsconfig.json           # Root TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 10.15.0

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ismael01866/extraction.git
cd extraction
```

2. Install dependencies:

```bash
pnpm install
```

3. Build all packages:

```bash
pnpm build
```

## Packages

### extraction-ui

The core component library

- **Location:** `packages/extraction-ui/`
- **Main exports:** Button, Card, Flex, Grid, Dialog, Modal, etc.
- **Read:** [packages/extraction-ui/README.md](packages/extraction-ui/README.md)

```bash
pnpm --filter=extraction-ui build
```

### Documentation

Full documentation site for the component library.

- **Location:** `apps/docs/`
- **Start:** `pnpm --filter=docs dev`
- **Build:** `pnpm --filter=docs build`
- **Features:** MDX content, live code examples, component showcase

## Development Workflow

### Making Changes

1. Install dependencies:

```bash
pnpm install
```

2. Make changes to component library:

```bash
# Edit files in packages/extraction-ui/src/
pnpm --filter=extraction-ui dev
```

3. Use in demo apps:

```bash
# Changes are immediately available in development
pnpm --filter=next dev
```

### Testing

Run tests in a specific package:

```bash
pnpm --filter=extraction-ui test
pnpm --filter=extraction-ui test:watch
```

### Type Checking

Check types across the workspace:

```bash
pnpm --filter=extraction-ui type-check
```

### Building

Build all packages in dependency order:

```bash
pnpm build
```

## Monorepo Configuration

### Turbo

Build orchestration is handled by Turbo. Configuration in `turbo.json`:

- **dev** task runs in watch mode, no caching
- **build** task has outputs in `dist/`, `.next/`, `public/`
- **lint** task runs ESLint

### pnpm Workspaces

Workspaces are defined in `pnpm-workspace.yaml`:

- All apps in `apps/**`
- All packages in `packages/**`
- Special dependency handling for build tools

### TypeScript

Root `tsconfig.json` contains base configuration extended by all packages.

## Styling

The monorepo uses **Tailwind CSS** for styling:

- Import main styles: `import 'extraction-ui/styles'`
- Styles are compiled during build

## License

Extraction UI
Copyright (c) 2026 Ismael Mariscal

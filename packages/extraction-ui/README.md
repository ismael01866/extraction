# extraction-ui

A comprehensive React + Tailwind component library focused on accessibility, composability, and semantic structure.

## Installation

```bash
pnpm add extraction-ui
```

## Quick Start

```tsx
import { Button, Card, Flex } from 'extraction-ui';

export function App() {
  return (
    <Card>
      <Flex>
        <h1>Hello, World!</h1>
        <Button>Click me</Button>
      </Flex>
    </Card>
  );
}
```

## Development

### Prerequisites

- Node.js >= 18.0.0
- pnpm

### Setup

```bash
pnpm install
```

### Scripts

- **`pnpm run build`** — Build the library
- **`pnpm run dev`** — Watch mode build
- **`pnpm run test`** — Run tests once
- **`pnpm run test:watch`** — Run tests in watch mode
- **`pnpm run type-check`** — Check TypeScript types
- **`pnpm run lint`** — Lint JavaScript and TypeScript
- **`pnpm run lint:css`** — Lint CSS files
- **`pnpm run generate-theme`** — Generate theme tokens
- **`pnpm run generate`** — Generate theme and build

## Project Structure

```
src/
├── components/     # Components
├── css/            # Styling and utilities
├── hooks/          # Custom React hooks
├── scripts/        # Build and generation scripts
├── tokens/         # Design tokens and theme
├── utils/          # Utility functions
```

## Configuration

The library uses:

- **Vite** — Fast build tool and development server
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Vitest** — Fast unit tests
- **ESLint** — Code linting

## Exports

### Main Entry Point

```tsx
import { Button, Card, Flex, ... } from 'extraction-ui'
```

## License

Extraction UI
Copyright (c) 2026 Ismael Mariscal

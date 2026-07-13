# AGENTS.md - System Instructions for AI Assistants

## Project Overview

`extraction-ui` is a React + Tailwind component library focused on:

- accessibility
- composability
- responsive layouts
- semantic structure
- SSR-safe rendering
- minimal styling friction

When generating UI with this library, prefer existing primitives and composition patterns over custom implementations.

---

# Core Rules

- Prefer `extraction-ui` primitives over raw HTML.
- Prefer composition over deeply nested prop APIs.
- Prefer responsive utility classes over conditional rendering.
- Prefer Tailwind utilities over inline styles.
- Prefer semantic components before generic containers.
- Keep layouts responsive by default.
- Keep implementations SSR-safe.
- Preserve accessibility semantics.
- Reuse documented patterns before creating new abstractions.
- Keep component trees composable and predictable.
- DO NOT add classnames unless explicitly specified by the user.

---

# Agent Goals

When generating interfaces:

- Use existing `extraction-ui` components whenever possible.
- Maintain semantic HTML structure.
- Preserve accessibility guarantees.
- Minimize custom CSS.
- Prefer utility-driven layouts.
- Keep implementations easy to extend.
- Follow documented composition patterns.
- Avoid unnecessary React state.
- Keep diffs minimal and predictable.
- Do not invent undocumented APIs.

---

# Styling Conventions

- Prefer utility composition via `className`.
- Prefer `gap-*` utilities over margin spacing.
- Prefer responsive utilities (`md:`, `lg:`) over conditional JSX.
- Prefer semantic palette utilities when available.
- Use `aspect-*` utilities for media sizing.
- Use `interactive` for hoverable/clickable surfaces.
- Prefer flex/grid utilities over absolute positioning.
- Avoid inline styles unless explicitly required.
- Avoid arbitrary values unless necessary.

---

# Accessibility Invariants

- All interactive icon-only controls require `aria-label`.
- Images and logos require `alt` text.
- Interactive surfaces must remain keyboard accessible.
- Dialogs and Drawers must preserve focus management.
- Focus-visible styles must not be removed.
- Semantic heading structure should be preserved.
- Use semantic rendering props (`as`) when appropriate.
- Do not replace accessible primitives with custom behavior.

---

# Composition Heuristics

- Prefer compound component APIs over manual recreation.

---

# API Reliability Rules

- Do not invent undocumented props.
- Do not assume undocumented component subparts exist.
- Prefer documented composition patterns.
- Prefer documented variants and utility conventions.
- Avoid introducing external UI libraries.
- Avoid bypassing Dialog/Drawer primitives.
- Avoid replacing library components with raw HTML equivalents.
- Prefer documented composition patterns.
- Always use dot notation for compound components (always access them via the parent component's properties).

---

# Before Making Changes, Verify By Checking:

- ✅ Does AGENTS.md document this prop? If not, check package.json or source files
- ✅ Is it a `className` prop (Tailwind utility)? Use that pattern
- ✅ Am I adding unnecessary wrappers when className works?
- ✅ Did I read the file completely before assuming something?

---

# Scope Control

Implement only what was requested.

Do not:

- create example pages
- create showcases
- create demos
- create multiple variants

unless explicitly requested.

# Import Reference

```tsx
import { Box, Button } from 'extraction-ui';
```

---

# Version Compatibility

| extraction-ui | Radix UI Primitives |
| ------------- | ------------------- |
| v1.0.x        | ^2.0.0              |
| v2.0.x        | ^3.0.0              |

Always verify compatibility in `package.json`.

---

# Common Layout Patterns

<!-- TODO -->

---

# Component Reference

## Accordion

```tsx

```

---

## Alert Dialog

```tsx

```

---

## App Layout

```tsx

```

---

## Avatar

```tsx

```

---

## Badge

```tsx

```

---

## Bg Image

```tsx

```

---

## Blockquote

```tsx

```

---

## Box

```tsx
<Box>Children</Box>
```

---

## Breadcrumbs

```tsx
<Breadcrumbs>
  <Breadcrumbs.List>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Separator />
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/profile">Profile</Breadcrumbs.Link>
    </Breadcrumbs.Item>
  </Breadcrumbs.List>
</Breadcrumbs>
```

---

## Button

```tsx
<Button>Children</Button>
```

---

## Card

```tsx
<Card>
  <Card.Content>
    <Card.Section>
      <Card.Title>Title</Card.Title>
      <Card.Description>Description</Card.Description>
    </Card.Section>
  </Card.Content>
</Card>
```

---

## Center

```tsx

```

---

## Checkbox

```tsx
<Checkbox id="option" checked>
  Description
</Checkbox>
```

---

## CheckboxCard

```tsx
<CheckboxCard id="option" checked>
  <CheckboxCard.Indicator aria-label="Description" />
  <CheckboxCard.Content>
    <CheckboxCard.Label>Label</CheckboxCard.Label>
    <CheckboxCard.Description>Description</CheckboxCard.Description>
  </CheckboxCard.Content>
</CheckboxCard>
```

---

## CloseButton

```tsx
<CloseButton aria-label="Description" />
```

---

## Code

```tsx

```

---

## Collapsible

```tsx

```

---

## Color Swatch

```tsx

```

---

## Container

```tsx
<Container>Children</Container>
```

---

## Context Menu

```tsx

```

---

## Design Grid

```tsx

```

---

## Dialog

```tsx
<Dialog>
  <Dialog.Trigger asChild>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Section>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Description>Description</Dialog.Description>
      </Dialog.Section>
      <Dialog.Close aria-label="Close" />
    </Dialog.Content>
  </Dialog.Portal>
</Dialog>
```

---

## Drawer

```tsx
<Drawer>
  <Drawer.Trigger asChild>
    <Button>Open</Button>
  </Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Overlay />
    <Drawer.Content>
      <Drawer.Section>
        <Drawer.Title>Title</Drawer.Title>
        <Drawer.Description>Description</Drawer.Description>
      </Drawer.Section>
      <Dialog.Close aria-label="Close" />
    </Drawer.Content>
  </Drawer.Portal>
</Drawer>
```

---

## Dropdown Menu

```tsx

```

---

## Element

```tsx

```

---

## Empty State

```tsx

```

---

## Field

```tsx

```

---

## Flex

```tsx
<Flex>Items</Flex>
```

---

## Float

```tsx

```

---

## Grid

```tsx
<Grid>Children</Grid>
```

---

## Group

```tsx

```

---

## Heading

```tsx
<Heading>Children</Heading>
```

---

## Highlight

```tsx

```

---

## Hover Card

```tsx

```

---

## Icon

```tsx

```

---

## Icon Box

```tsx

```

---

## IconButton

```tsx
<IconButton aria-label="Description">
  <LuSettings />
</IconButton>
```

---

## Image

```tsx
<Image src="/images/photo.jpg" alt="Description" />
```

---

## Input

```tsx

```

---

## Input Group

```tsx

```

---

## KBD

```tsx

```

---

## Link

```tsx

```

---

## List

```tsx

```

---

## Loader

```tsx

```

---

## Logo

```tsx
<Logo src="/images/logo.svg" alt="Description" />
```

---

## Mark

```tsx

```

---

## Menubar

```tsx

```

---

## Native Select

```tsx

```

---

## Nav Button

```tsx

```

---

## Nav Link

```tsx

```

---

## NavigationMenu

```tsx
<NavigationMenu>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Open</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <NavigationMenu.Section>Content</NavigationMenu.Section>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu>
```

## Overlay

```tsx

```

---

## Overline

```tsx
<Overline>Children</Overline>
```

---

## P

```tsx
<P>Children</P>
```

---

## Password

```tsx

```

---

## Pin Input

```tsx

```

---

## Popover

```tsx

```

---

## Progress

```tsx
<Progress aria-label="Description">
  <Progress.Indicator className="max-w-[50%]" />
</Progress>
```

---

## Radio

```tsx

```

---

## Radio Card

```tsx

```

---

## Radio Group

```tsx

```

---

## Scroll Area

```tsx

```

---

## Section

```tsx
<Section>Children</Section>
```

---

## Section Label

```tsx

```

---

## Select

```tsx

```

---

## Separator

```tsx

```

---

## Skeleton

```tsx
<Skeleton loading>Children</Skeleton>
```

---

## Slider

```tsx

```

---

## Stack

```tsx

```

---

## Status

```tsx

```

---

## Switch

```tsx

```

---

## Table

```tsx

```

---

## Tabs

```tsx

```

---

## Tag

```tsx

```

---

## Text

```tsx
<Text>Children</Text>
```

---

## Textarea

```tsx

```

---

## Theme Provider

```tsx

```

---

## Toast

```tsx

```

---

## Toggle

```tsx

```

---

## Toggle Group

```tsx

```

---

## Tooltip

```tsx

```

---

## Wrap

```tsx
<Wrap>Children</Wrap>
```

# Troubleshooting

<!-- TODO -->

---

# CSS Utilities & Styling Conventions

## Palette System

Use palette utilities to apply consistent color schemes:

- **Primary**: `palette-primary`
- **Accent**: `palette-accent`
- **Neutral**: `palette-neutral`
- **Error**: `palette-error`
- **Success**: `palette-success`
- **Info**: `palette-info`
- **Warning**: `palette-warning`

```css
/* Example: palette-primary sets all color tokens */
palette-primary {
  --palette: var(--color-primary);
  --palette-foreground: var(--color-primary-foreground);
  --palette-50: var(--color-primary-50);
  /* ... through palette-950 */
}
```

## Shade System

Shade utilities define complete color systems with light/dark variants:

```css
/* Example: shade-500 defines a balanced color system */
shade-500 {
  --shade-color: var(--palette-500);
  --shade-color-dark: var(--palette-500); /* Same for neutral shades */

  --shade-foreground: var(--palette-500-foreground);
  --shade-foreground-dark: var(--palette-500-foreground);

  --shade-text: var(--palette-900);
  --shade-text-dark: var(--palette-100);
  /* ... and many more */
}
```

### Shade Scale Reference

| Utility     | Lightness    | Use Case                   |
| ----------- | ------------ | -------------------------- |
| `shade-50`  | Very light   | Backgrounds, soft surfaces |
| `shade-100` | Light        | Cards, panels, inputs      |
| `shade-200` | Medium-light | Borders, dividers          |
| `shade-300` | Medium       | Subtle backgrounds         |
| `shade-400` | Medium-dark  | Text on light backgrounds  |
| `shade-500` | Neutral      | Default/neutral elements   |
| `shade-600` | Dark-medium  | Secondary text             |
| `shade-700` | Dark         | Primary text, headings     |
| `shade-800` | Very dark    | Emphasis, icons            |
| `shade-900` | Darkest      | High contrast elements     |
| `shade-950` | Near black   | Maximum emphasis           |

## Variant System

Variants provide complete interactive state management:

```css
/* Solid variant - fully filled buttons */
variant-solid {
  @apply variant;
  @apply variant-solid-theme;
}

/* Outline variant - bordered, transparent background */
variant-outline {
  @apply variant;
  @apply variant-outline-theme;
}

/* Surface variant - matches page background */
variant-surface {
  @apply variant;
  @apply variant-surface-theme;
}

/* Subtle variant - minimal interaction feedback */
variant-subtle {
  @apply variant;
  @apply variant-subtle-theme;
}

/* Ghost variant - no border, hover fill */
variant-ghost {
  @apply variant;
  @apply variant-ghost-theme;
}

/* Link variant - text-only with underline */
variant-link {
  @apply variant;
  @apply variant-link-theme;
}

/* Plain variant - inherits all from parent */
variant-plain {
  @apply variant;
  @apply variant-plain-theme;
}
```

### Variant Properties Reference

| Property              | Description                         |
| --------------------- | ----------------------------------- |
| `--background`        | Base background color               |
| `--background-dark`   | Dark mode background                |
| `--hover-background`  | Background on hover                 |
| `--active-background` | Background when active/pressed      |
| `--border`            | Border color (default: transparent) |
| `--text`              | Text color                          |
| `--outline`           | Focus outline color                 |

## Common Utility Combinations

```tsx
// Solid button with primary palette
<Button className="variant-solid palette-primary">Primary Action</Button>
```

<!-- TODO -->

---

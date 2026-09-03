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
<Accordion type="single" defaultValue="option-1">
  <Accordion.Item value="option-1">
    <Accordion.Header>
      <Accordion.Trigger>
        <Accordion.Title>Option 1</Accordion.Title>
        <Accordion.Icon />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      <Accordion.Section>
        <Accordion.Description>The quick brown fox jumps over the lazy dog</Accordion.Description>
      </Accordion.Section>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="option-2">
    <Accordion.Header>
      <Accordion.Trigger>
        <Accordion.Title>Option 2</Accordion.Title>
        <Accordion.Icon />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      <Accordion.Section>
        <Accordion.Description>The quick brown fox jumps over the lazy dog</Accordion.Description>
      </Accordion.Section>
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

Use the compound accordion API with `Accordion.Item`, `Accordion.Header`, `Accordion.Trigger`, `Accordion.Content`, `Accordion.Section`, `Accordion.Title`, `Accordion.Icon`, and `Accordion.Description`. `Accordion.Item` requires a `value`, and the root supports `type` (`single` or `multiple`) plus Radix-style controlled/uncontrolled state props like `defaultValue`.

---

## Alert Dialog

```tsx
<AlertDialog>
  <AlertDialog.Trigger asChild>
    <Button>Trigger</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialog.Content>
      <AlertDialog.Section>
        <AlertDialog.Title>The quick brown fox</AlertDialog.Title>
        <AlertDialog.Description>
          Alice was beginning to get very tired of sitting by her sister on the bank.
        </AlertDialog.Description>
      </AlertDialog.Section>
      <AlertDialog.Section className="flex-row justify-end">
        <AlertDialog.Cancel>
          <Button className="variant-outline palette-neutral">Cancel</Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action asChild>
          <Button>Confirm</Button>
        </AlertDialog.Action>
      </AlertDialog.Section>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog>
```

Use the compound alert dialog API with `AlertDialog.Trigger`, `AlertDialog.Portal`, `AlertDialog.Overlay`, `AlertDialog.Content`, `AlertDialog.Section`, `AlertDialog.Title`, `AlertDialog.Description`, `AlertDialog.Cancel`, and `AlertDialog.Action`. `AlertDialog.Trigger` typically renders as a button via `asChild`, and `AlertDialog.Action`/`Cancel` are used for destructive or secondary actions inside the dialog.

---

## App Layout

```tsx
<AppLayout className="min-h-80 text-sm">
  <AppLayout.Header>Header</AppLayout.Header>
  <AppLayout.Body>
    <AppLayout.Sidenav>Sidenav</AppLayout.Sidenav>
    <AppLayout.Main>
      <AppLayout.Section>Main</AppLayout.Section>
    </AppLayout.Main>
    <AppLayout.Aside>Aside</AppLayout.Aside>
  </AppLayout.Body>
  <AppLayout.Footer>Footer</AppLayout.Footer>
</AppLayout>
```

Use `AppLayout` as a semantic page shell composed of `Header`, `Body`, `Sidenav`, `Main`, `Aside`, `Footer`, and optional `Section` blocks. It is primarily used for dashboard and document-style layouts rather than ordinary page containers.

---

## Avatar

```tsx
<Avatar>
  <Avatar.Image src="/images/assets/avatar-0.webp" alt="avatar" />
</Avatar>
```

Use the compound avatar API with `Avatar.Image` and `Avatar.Fallback`. The image is the primary visual, and `Avatar.Fallback` is used as a text fallback when the image is unavailable or still loading. Keep `alt` text meaningful and concise.

---

## Badge

```tsx
<Badge>Badge</Badge>
```

Use `Badge` for compact status, labels, or metadata. It accepts normal children and can contain inline icon content. Prefer concise text and reuse the library’s sizing/variant utilities rather than custom styling.

---

## Bg Image

```tsx
<Box className="relative overflow-hidden">
  <BgImage src="/images/assets/espresso.webp" className="brightness-50" />
  <Center>
    <Description className="text-xl text-white drop-shadow-md">
      The quick brown fox jumps over the lazy dog
    </Description>
  </Center>
</Box>
```

Use `BgImage` as a background media layer with a `src` prop, typically paired with `Overlay` and text content inside a containing layout. It is meant for decorative hero or panel backgrounds, not for standard image rendering.

---

## Blockquote

```tsx
<Blockquote>
  <Blockquote.Icon />
  <Blockquote.Content>
    <Blockquote.Description>Good design is as little design as possible.</Blockquote.Description>
    <Blockquote.Caption>
      <Blockquote.Cite>— Dieter Rams</Blockquote.Cite>
    </Blockquote.Caption>
  </Blockquote.Content>
</Blockquote>
```

Use the compound blockquote API with `Blockquote.Icon`, `Blockquote.Content`, `Blockquote.Description`, `Blockquote.Caption`, and `Blockquote.Cite`. It is intended for quoted editorial or testimonial content, typically paired with a leading accent or icon treatment.

---

## Box

```tsx
<Box>Box</Box>
```

`Box` is the base layout primitive for generic wrapping content. Use it for spacing, borders, backgrounds, and simple structural containers without introducing custom styling when a utility class or variant already covers the need.

---

## Breadcrumbs

```tsx
<Breadcrumbs>
  <Breadcrumbs.List>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Separator />
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="#">Profile</Breadcrumbs.Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Separator />
    <Breadcrumbs.Item>
      <Breadcrumbs.CurrentLink href="#">Settings</Breadcrumbs.CurrentLink>
    </Breadcrumbs.Item>
  </Breadcrumbs.List>
</Breadcrumbs>
```

Use `Breadcrumbs` for hierarchical navigation with `List`, `Item`, `Link`, `CurrentLink`, and `Separator`. Keep labels short and maintain semantic navigation structure for accessibility.

---

## Button

```tsx
<Button>Button</Button>
```

`Button` is the primary action component. Use the library’s sizing and variant utilities (`size-*`, `variant-*`, `palette-*`) for consistent styling, and include icons only when they add clear meaning to the action.

---

## Card

```tsx
<Card>
  <Card.Content>
    <Card.Section>
      <Card.Title>Header</Card.Title>
      <Card.Description>
        Alice was beginning to get very tired of sitting by her sister on the bank.
      </Card.Description>
    </Card.Section>
  </Card.Content>
</Card>
```

Use `Card` for grouped content blocks with `Card.Content`, `Card.Section`, `Card.Title`, and `Card.Description`. It is ideal for media-rich panels, summaries, and action surfaces that should remain visually cohesive.

---

## Center

```tsx
<Center>The quick brown fox jumps over the lazy dog</Center>
```

````tsx
<Box className="relative">
  <AbsoluteCenter>
    The quick brown fox jumps over the lazy dog
  </AbsoluteCenter>
</Box>
```

Use `Center` to horizontally and vertically center a single child within its parent. For positioning inside a relative container, prefer `AbsoluteCenter` when you want the item centered by absolute positioning rather than normal layout flow.

---

## Checkbox

```tsx
<Checkbox>
  <Checkbox.Control id="ch1" aria-label="Accept terms" defaultChecked>
    <Checkbox.Indicator />
  </Checkbox.Control>
  <Checkbox.Label htmlFor="ch1">Accept terms</Checkbox.Label>
</Checkbox>
````

Use the compound checkbox API with `Checkbox.Control`, `Checkbox.Indicator`, and `Checkbox.Label`. For a controlled checkbox, pass `checked` and `onCheckedChange`; for an uncontrolled checkbox, use `defaultChecked` or a form `name` value.

---

## CheckboxCard

```tsx
<CheckboxCard>
  <CheckboxCard.Indicator />
  <CheckboxCard.Content>
    <CheckboxCard.Label>Accept Terms</CheckboxCard.Label>
    <CheckboxCard.Description>Agree to all terms and conditions</CheckboxCard.Description>
  </CheckboxCard.Content>
</CheckboxCard>
```

Use `CheckboxCard` for selectable list items or form choices that need a larger, card-style interaction surface. Keep the label and description concise and pair it with `CheckboxCard.Indicator` and a single `CheckboxCard.Content` block.

---

## CloseButton

```tsx
<CloseButton aria-label="Close" />
```

`CloseButton` is a compact dismiss control for dialogs, drawers, or notification surfaces. Always provide an accessible `aria-label` because it is an icon-only control.

---

## Code

```tsx
<Code>console.log()</Code>
```

Use `Code` for inline or block-level code snippets. Prefer the library’s text sizing and mono styling utilities to maintain consistency across examples, command lines, and small code fragments.

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
- **Neutral**: `palette-neutral`

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

## Common Utility Combinations

```tsx
// Solid button with primary palette
<Button className="variant-solid palette-primary">Primary Action</Button>
```

<!-- TODO -->

---

import { default as theme } from 'tailwindcss/defaultTheme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__, ...outlineOffset } = theme.outlineOffset;

export const outlineOffsets = outlineOffset;

export type OutlineOffsetToken = keyof typeof outlineOffsets;

export const outlineOffsetValues = Object.keys(
  outlineOffsets,
) as unknown as OutlineOffsetToken[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__: _, ...outlineWidth } = theme.outlineWidth;

export const outlineWidths = outlineWidth;

export type OutlineWidthToken = keyof typeof outlineWidths;

export const outlineWidthValues = Object.keys(
  outlineWidths,
) as unknown as OutlineWidthToken[];

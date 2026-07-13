import { default as theme } from 'tailwindcss/defaultTheme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__, ...ringOffsetWidth } = theme.ringOffsetWidth;

export const ringOffsetWidths = ringOffsetWidth;

export type RingOffsetWidthToken = keyof typeof ringOffsetWidths;

export const ringOffsetWidthValues = Object.keys(
  ringOffsetWidths,
) as unknown as RingOffsetWidthToken[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__: _, ...ringWidth } = theme.ringWidth;

export const ringWidths = ringWidth;

export type RingWidthToken = keyof typeof ringWidths;

export const ringWidthValues = Object.keys(
  ringWidths,
) as unknown as RingWidthToken[];

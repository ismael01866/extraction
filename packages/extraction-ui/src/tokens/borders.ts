import { default as theme } from 'tailwindcss/defaultTheme';

export const radius = theme.borderRadius;
export type RadiusToken = keyof typeof radius;

export const radiusValues = Object.keys(radius) as RadiusToken[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__, DEFAULT, ...widths } = theme.borderWidth;

export const borderWidths = widths;
export type BorderWidthToken = keyof typeof borderWidths;

export const borderWidthValues = Object.keys(
  borderWidths,
) as unknown as BorderWidthToken[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__: _, ...strokeWidth } = theme.strokeWidth;

export const strokeWidths = strokeWidth;
export type StrokeWidthToken = keyof typeof strokeWidths;

export const strokeWidthValues = Object.keys(
  strokeWidths,
) as unknown as StrokeWidthToken[];

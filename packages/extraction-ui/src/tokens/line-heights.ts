import { default as theme } from 'tailwindcss/defaultTheme';

export const lineHeights = theme.lineHeight;
export type LineHeightToken = keyof typeof lineHeights;

export const lineHeightValues = Object.keys(lineHeights) as LineHeightToken[];

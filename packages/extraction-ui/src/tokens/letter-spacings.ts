import { default as theme } from 'tailwindcss/defaultTheme';

export const letterSpacings = theme.letterSpacing;
export type LetterSpacingToken = keyof typeof letterSpacings;

export const letterSpacingValues = Object.keys(
  letterSpacings,
) as LetterSpacingToken[];

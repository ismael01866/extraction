import { default as theme } from 'tailwindcss/defaultTheme';

export const backgroundPositions = theme.backgroundPosition;
export type BackgroundPositionToken = keyof typeof backgroundPositions;

export const backgroundPositionValues = Object.keys(
  backgroundPositions,
) as BackgroundPositionToken[];

export const backgroundSizes = theme.backgroundSize;
export type BackgroundSizeToken = keyof typeof backgroundSizes;

export const backgroundSizeValues = Object.keys(
  backgroundSizes,
) as BackgroundSizeToken[];

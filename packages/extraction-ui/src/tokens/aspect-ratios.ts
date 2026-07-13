import { default as theme } from 'tailwindcss/defaultTheme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__, ...ratios } = theme.aspectRatio;

export const aspectRatios = ratios;
export type AspectRatioToken = keyof typeof aspectRatios;

export const aspectRatioValues = Object.keys(
  aspectRatios,
) as AspectRatioToken[];

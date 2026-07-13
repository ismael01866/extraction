import { default as theme } from 'tailwindcss/defaultTheme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__, ...opacity } = theme.opacity;

export const opacities = opacity;

export type OpacityToken = keyof typeof opacities;

export const opacityValues = Object.keys(
  opacities,
) as unknown as OpacityToken[];

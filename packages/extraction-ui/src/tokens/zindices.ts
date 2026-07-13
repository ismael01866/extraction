import { default as theme } from 'tailwindcss/defaultTheme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { __BARE_VALUE__, ...indices } = theme.zIndex;

export const zIndices = indices;
export type ZIndexToken = typeof zIndices;

export const zIndexValues = Object.keys(
  zIndices,
) as unknown as (keyof ZIndexToken)[];

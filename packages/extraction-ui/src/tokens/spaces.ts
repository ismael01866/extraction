import { default as theme } from 'tailwindcss/defaultTheme';

export const spacing = theme.spacing;
export type SpacingToken = typeof spacing;

export const spacingValues = Object.keys(spacing) as (keyof SpacingToken)[];

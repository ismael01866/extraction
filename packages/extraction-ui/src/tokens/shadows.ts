import { default as theme } from 'tailwindcss/defaultTheme';

export const boxShadows = theme.boxShadow;
export type BoxShadowToken = keyof typeof boxShadows;

export const boxShadowValues = Object.keys(boxShadows) as BoxShadowToken[];

export const dropShadows = theme.dropShadow;
export type DropShadowToken = keyof typeof dropShadows;

export const dropShadowValues = Object.keys(dropShadows) as DropShadowToken[];

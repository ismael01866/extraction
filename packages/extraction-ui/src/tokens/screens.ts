import { default as theme } from 'tailwindcss/defaultTheme';

export const screens = theme.screens;
export type ScreenToken = keyof typeof screens;

export const screenValues = Object.keys(screens) as ScreenToken[];

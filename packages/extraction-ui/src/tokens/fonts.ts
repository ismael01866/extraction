import { default as theme } from 'tailwindcss/defaultTheme';

export const fonts = theme.fontFamily;
export type FontToken = keyof typeof fonts;

export const fontValues = Object.keys(fonts) as FontToken[];

export const fontWeights = theme.fontWeight;
export type FontWeightToken = keyof typeof fontWeights;

export const fontWeightValues = Object.keys(fontWeights) as FontWeightToken[];

export const fontSize = { '2xs': '', ...theme.fontSize };
export type FontSizeToken = keyof typeof fontSize;

export const fontSizeValues = Object.keys(fontSize) as FontSizeToken[];

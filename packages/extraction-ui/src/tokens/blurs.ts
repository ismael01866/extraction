import { default as theme } from 'tailwindcss/defaultTheme';

export const blurs = theme.blur;
export type BlurToken = keyof typeof blurs;

export const blurValues = Object.keys(blurs) as BlurToken[];

export const colorPalette = {
  primary: 'oklch(0.5 0.22 267)',
  accent: 'oklch(0.5 0.22 280)',
  neutral: 'oklch(0.5 0.03 275)',
  error: 'oklch(0.5 0.22 25)',
  success: 'oklch(0.5 0.22 140)',
  info: 'oklch(0.5 0.22 255)',
  warning: 'oklch(0.7 0.22 95)',
};

export type ColorPaletteToken = typeof colorPalette;
export const colorPaletteValues = Object.keys(colorPalette) as (keyof ColorPaletteToken)[];

type ColorKeys<T extends string> =
  | `${T}`
  | `${T}50`
  | `${T}100`
  | `${T}200`
  | `${T}300`
  | `${T}400`
  | `${T}500`
  | `${T}600`
  | `${T}700`
  | `${T}800`
  | `${T}900`
  | `${T}950`;

export type ColorTokenKeys<T extends string = keyof ColorPaletteToken> = ColorKeys<T>;

export type ColorTokens = {
  [K in ColorTokenKeys]: string;
};

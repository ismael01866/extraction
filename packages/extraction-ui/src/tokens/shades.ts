export const shades = {
  50: '',
  100: '',
  200: '',
  300: '',
  400: '',
  500: '',
  600: '',
  700: '',
  800: '',
  900: '',
  950: '',
};

export type ShadeToken = keyof typeof shades;
export const shadesValues = Object.keys(shades) as (keyof ShadeToken)[];

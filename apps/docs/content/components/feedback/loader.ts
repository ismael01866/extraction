import { colorPaletteValues, fontSizeValues } from 'extraction-ui';

export const cfg = {
  class: 'loader',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'text',
  sizes: fontSizeValues,
  sizeClass: 'text',
  api: {
    as: {
      type: 'ElementType',
      default: 'span',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Loader: {
      default: 'ex-loader',
    },
  },
};

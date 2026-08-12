import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'loader',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'text',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'loader',
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

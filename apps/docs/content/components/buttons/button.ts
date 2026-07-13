import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'button',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg', 'xl'].includes(size as string),
  ),
  sizeClass: 'button',
  variants: variantsValues,
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    CloseButton: {
      default: 'ex-button',
    },
  },
};

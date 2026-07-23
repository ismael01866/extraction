import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'code',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'code',
  variants: variantsValues.filter((variant) => !['ghost', 'link'].includes(variant)),
  api: {
    as: {
      type: 'ElementType',
      default: 'code',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Code: {
      default: 'ex-code',
    },
  },
};

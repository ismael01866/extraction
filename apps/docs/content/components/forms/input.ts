import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'input',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'input',
  variants: variantsValues.filter((variant) => !['ghost', 'link'].includes(variant)),
  api: {
    as: {
      type: 'ElementType',
      default: 'input',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Input: {
      default: 'ex-input',
    },
  },
};

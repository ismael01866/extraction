import { colorPaletteValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'mark',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  variants: variantsValues.filter((variant) => !['ghost', 'plain'].includes(variant)),
  api: {
    as: {
      type: 'ElementType',
      default: 'mark',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Mark: {
      default: 'ex-mark',
    },
  },
};

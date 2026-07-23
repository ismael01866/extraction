import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'textarea',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'textarea',
  variants: variantsValues.filter((variant) => !['ghost', 'link'].includes(variant)),
  api: {
    as: {
      type: 'ElementType',
      default: 'textarea',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Textarea: {
      default: 'ex-textarea',
    },
  },
};

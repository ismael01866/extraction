import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'badge',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'badge',
  variants: variantsValues.filter(
    (variant) => !['ghost', 'link'].includes(variant),
  ),
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Badge: {
      default: 'ex-badge',
    },
  },
};

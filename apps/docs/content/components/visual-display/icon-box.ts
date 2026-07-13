import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'icon-box',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg', 'xl'].includes(size as string),
  ),
  sizeClass: 'icon-box',
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
    IconBox: {
      default: 'ex-icon-box',
    },
  },
};

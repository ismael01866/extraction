import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'nav-link',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'nav-link',
  variants: variantsValues.filter((variant) => !['plain'].includes(variant)),
  api: {
    as: {
      type: 'ElementType',
      default: 'a',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    NavLink: {
      default: 'ex-nav-link',
    },
  },
};

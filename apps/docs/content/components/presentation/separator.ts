import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'separator',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['xs', 'sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'separator',
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    decorative: {
      type: 'boolean',
      default: 'false',
    },
    orientation: {
      type: 'enum of ["horizontal", "vertical"]',
      default: 'horizontal',
    },
  },
  selectors: {
    Separator: {
      default: 'ex-separator',
    },
  },
};

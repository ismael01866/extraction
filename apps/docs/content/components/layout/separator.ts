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
    align: {
      type: 'enum of ["start", "center", "end"]',
      default: 'center',
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

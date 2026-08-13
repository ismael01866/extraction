import { colorPaletteValues } from 'extraction-ui';

export const cfg = {
  class: 'link',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
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
    Link: {
      default: 'ex-link',
    },
  },
};

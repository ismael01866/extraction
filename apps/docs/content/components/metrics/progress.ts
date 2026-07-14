import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'progress',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'progress',
};

export const progressCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    max: {
      type: 'number',
      default: '',
    },
    value: {
      type: 'number|null',
      default: '',
    },
  },
  selectors: {
    Progress: {
      default: 'ex-progress',
    },
  },
};

export const progressIndicatorCfg = {
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
    'Progress.Indicator': {
      default: 'ex-progress-indicator',
    },
  },
};

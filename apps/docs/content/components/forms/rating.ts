import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'rating',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'text',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'rating',
};

export const ratingCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    count: {
      type: 'number',
      default: '',
    },
    defaultValue: {
      type: 'string',
      default: '',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    fractions: {
      type: 'number',
      default: '',
    },
    loop: {
      type: 'boolean',
      default: 'true',
    },
    name: {
      type: 'string',
      default: '',
    },
    readOnly: {
      type: 'boolean',
      default: 'false',
    },
    required: {
      type: 'boolean',
      default: 'false',
    },
    single: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    Rating: {
      default: 'ex-rating',
    },
  },
};

export const ratingControlCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    required: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
  },
  selectors: {
    'Rating.Control': {
      default: 'ex-rating-control',
    },
  },
};

export const ratingIndicatorCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    forceMount: {
      type: 'boolean',
      default: 'true',
    },
  },
  selectors: {
    'Rating.Indicator': {
      default: 'ex-rating-indicator',
    },
  },
};

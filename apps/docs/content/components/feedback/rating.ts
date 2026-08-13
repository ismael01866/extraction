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
  },
  selectors: {
    Rating: {
      default: 'ex-rating',
    },
  },
};

export const ratingItemCfg = {
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
    'Rating.Indicator': {
      default: 'ex-rating-item',
    },
  },
};

export const ratingIconCfg = {
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
    'Rating.Icon': {
      default: 'ex-rating-icon',
    },
  },
};

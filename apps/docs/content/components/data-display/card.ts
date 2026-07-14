import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'card',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'card',
  variants: variantsValues.filter((variant) => !['ghost', 'link'].includes(variant)),
};

export const cardCfg = {
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
    Card: {
      default: 'ex-card',
    },
  },
};

export const cardContentCfg = {
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
    'Card.Content': {
      default: 'ex-card-content',
    },
  },
};

export const cardSectionCfg = {
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
    'Card.Section': {
      default: 'ex-card-section',
    },
  },
};

export const cardTitleCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'h2',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Card.Title': {
      default: 'ex-card-title',
    },
  },
};

export const cardDescriptionCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'p',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Card.Description': {
      default: 'ex-card-description',
    },
  },
};

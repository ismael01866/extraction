import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'callout',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'callout',
  variants: variantsValues.filter((v) => v !== 'ghost'),
};

export const calloutCfg = {
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
    Callout: {
      default: 'ex-callout',
    },
  },
};

export const calloutIndicatorCfg = {
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
    'Callout.Indicator': {
      default: 'ex-callout-indicator',
    },
  },
};

export const calloutContentCfg = {
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
    'Callout.Content': {
      default: 'ex-callout-content',
    },
  },
};

export const calloutTitleCfg = {
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
    'Callout.Title': {
      default: 'ex-callout-title',
    },
  },
};

export const calloutDescriptionCfg = {
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
    'Callout.Description': {
      default: 'ex-callout-description',
    },
  },
};

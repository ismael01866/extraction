import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'list',
  colorPalette: colorPaletteValues,
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'list',
};

export const listCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'ul',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    List: {
      default: 'ex-list',
    },
  },
};

export const listItemCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'li',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'List.Item': {
      default: 'ex-list-item',
    },
  },
};

export const listIndicatorCfg = {
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
    'List.Indicator': {
      default: 'ex-list-indicator',
    },
  },
};

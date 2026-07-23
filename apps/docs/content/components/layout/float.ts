import { positionValues } from 'extraction-ui';

export const cfg = {
  class: 'float',
  positions: positionValues,
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
    Float: {
      default: 'ex-float',
    },
  },
};

import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'box',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg', 'xl'].includes(size as string),
  ),
  sizeClass: 'box',
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
    Box: {
      default: 'ex-box',
    },
  },
};

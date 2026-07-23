import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'container',
  sizes: sizeValues.filter((size) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'container',
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
    Container: {
      default: 'ex-container',
    },
  },
};

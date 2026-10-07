import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'prose',
  sizes: ['sm', 'base', ...sizeValues.filter((size) => ['lg', 'xl'].includes(size as string))],
  sizeClass: 'prose',
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
    Prose: {
      default: 'ex-prose',
    },
  },
};

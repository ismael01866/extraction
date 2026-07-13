import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'section',
  sizes: sizeValues.filter((size) =>
    ['xs', 'sm', 'md', 'lg', 'xl'].includes(size as string),
  ),
  sizeClass: 'section',
  api: {
    as: {
      type: 'ElementType',
      default: 'section',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Section: {
      default: 'ex-section',
    },
  },
};

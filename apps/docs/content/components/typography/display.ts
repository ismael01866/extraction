import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'display',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg', 'xl'].includes(size as string),
  ),
  sizeClass: 'display',
  api: {
    as: {
      type: 'ElementType',
      default: 'h1',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Headline: {
      default: 'ex-display',
    },
  },
};

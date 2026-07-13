import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'lead',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg', 'xl'].includes(size as string),
  ),
  sizeClass: 'lead',
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
    Headline: {
      default: 'ex-lead',
    },
  },
};

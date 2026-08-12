import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'title',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'title',
  api: {
    as: {
      type: 'ElementType',
      default: 'h3',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Title: {
      default: 'ex-title',
    },
  },
};

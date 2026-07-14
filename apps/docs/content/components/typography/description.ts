import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'description',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'description',
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
    Description: {
      default: 'ex-description',
    },
  },
};

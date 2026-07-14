import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'headline',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'headline',
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
      default: 'ex-headline',
    },
  },
};

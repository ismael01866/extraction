import { sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'image',
  sizes: sizeValues.filter((size) =>
    ['xs', 'sm', 'md', 'lg', 'xl'].includes(size as string),
  ),
  sizeClass: 'image',
  variants: variantsValues,
  api: {
    as: {
      type: 'ElementType',
      default: 'image',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Image: {
      default: 'ex-image',
    },
  },
};

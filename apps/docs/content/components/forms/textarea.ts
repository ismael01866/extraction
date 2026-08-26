import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'textarea',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'textarea',
  variants: variantsValues.filter((variant) => !['plain', 'ghost', 'link'].includes(variant)),
};

export const textareaCfg = {
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
    Textarea: {
      default: 'ex-textarea',
    },
  },
};

export const textareaFieldCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'textarea',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Textarea.Field': {
      default: 'ex-textarea-field',
    },
  },
};

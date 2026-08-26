import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'number-input',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'number-input',
  variants: variantsValues.filter((variant) => !['plain', 'ghost', 'link'].includes(variant)),
};

export const numberInputCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    defaultValue: {
      type: 'number',
      default: '',
    },
    min: {
      type: 'number',
      default: '',
    },
    max: {
      type: 'number',
      default: '',
    },
    step: {
      type: 'number',
      default: '1',
    },
    value: {
      type: 'number',
      default: '',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    NumberInput: {
      default: 'ex-number-input',
    },
  },
};

export const numberInputFieldCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'input',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'NumberInput.Field': {
      default: 'ex-number-input-field',
    },
  },
};

export const numberInputIncrementButtonCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'NumberInput.IncrementButton': {
      default: 'ex-number-input-button',
    },
  },
};

export const numberInputDecrementButtonCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'NumberInput.DecrementButton': {
      default: 'ex-number-input-button',
    },
  },
};

import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'pin-input',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'pin-input',
  variants: variantsValues.filter(
    (variant) => !['ghost', 'link'].includes(variant),
  ),
};

export const pinInputCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    autoComplete: {
      type: 'enum of ["off", "one-time-code"]',
      default: 'one-time-code',
    },
    autoFocus: {
      type: 'boolean',
      default: 'false',
    },
    autoSubmit: {
      type: 'boolean',
      default: 'false',
    },
    defaultValue: {
      type: 'string',
      default: '',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    form: {
      type: 'string',
      default: '',
    },
    name: {
      type: 'string',
      default: '',
    },
    orientation: {
      type: 'enum of ["horizontal", "vertical"]',
      default: 'vertical',
    },
    placeholder: {
      type: 'string',
      default: '',
    },
    readOnly: {
      type: 'boolean',
      default: 'false',
    },
    sanitizeValue: {
      type: 'function',
      default: '',
    },
    type: {
      type: 'enum of ["text", "password"]',
      default: 'text',
    },
    validationType: {
      type: 'enum of ["none" | "numeric" | "alpha" | "alphanumeric"]',
      default: 'numeric',
    },
    onAutoSubmit: {
      type: 'function',
      default: '',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    PinInput: {
      default: 'ex-pin-input',
    },
  },
};

export const pinInputFieldCfg = {
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
    'PinInput.Field': {
      default: 'ex-pin-input-field',
    },
  },
};

export const pinInputHiddenCfg = {
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
    'PinInput.Hidden': {
      default: 'ex-pin-input-hidden',
    },
  },
};

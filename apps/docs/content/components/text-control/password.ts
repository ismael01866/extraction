import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'password',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'password',
  variants: variantsValues.filter(
    (variant) => !['ghost', 'link'].includes(variant),
  ),
};

export const passwordCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    defaultVisible: {
      type: 'boolean',
      default: '',
    },
    id: {
      type: 'string',
      default: '',
    },
    visible: {
      type: 'boolean',
      default: '',
    },
    onVisibilityChange: {
      type: 'function',
      default: '',
    },
  },
};

export const passwordInputCfg = {
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
    'Password.Input': {
      default: 'ex-password-input',
    },
  },
};

export const passwordToggleCfg = {
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
    'Password.Toggle': {
      default: 'ex-password-toggle',
    },
  },
};

export const passwordIconCfg = {
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
    'Password.Icon': {
      default: 'ex-password-icon',
    },
  },
};

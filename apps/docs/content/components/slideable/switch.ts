import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'switch',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'switch',
};

export const switchCfg = {
  api: {
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    checked: {
      type: 'boolean',
      default: 'false',
    },
    defaultChecked: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    name: {
      type: 'string',
      default: '',
    },
    required: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
    onCheckedChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    Switch: {
      default: 'ex-switch',
    },
  },
};

export const switchThumbCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'span',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Switch.Thumb': {
      default: 'ex-switch-thumb',
    },
  },
};

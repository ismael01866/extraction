import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'checkbox',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'checkbox',
  variants: variantsValues.filter(
    (variant) => !['ghost', 'plain'].includes(variant),
  ),
};

export const checkboxCfg = {
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
    Checkbox: {
      default: 'ex-checkbox',
    },
  },
};

export const checkboxControlCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
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
    Checkbox: {
      default: 'ex-checkbox-control',
    },
  },
};

export const checkboxIndicatorCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    forceMount: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Checkbox: {
      default: 'ex-checkbox-indicator',
    },
  },
};

export const checkboxLabelCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'label',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Checkbox: {
      default: 'ex-checkbox-label',
    },
  },
};

import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'radio',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'radio-group',
  variants: variantsValues.filter(
    (variant) => !['ghost', 'plain'].includes(variant),
  ),
};

export const radioGroupCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    checked: {
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
    loop: {
      type: 'boolean',
      default: 'true',
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
    onValueChange: {
      type: 'function',
      default: 'false',
    },
  },
  selectors: {
    RadioGroup: {
      default: 'ex-radio-group',
    },
  },
};

export const radioCfg = {
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
      default: 'ex-radio',
    },
  },
};

export const radioControlCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    required: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
  },
  selectors: {
    Checkbox: {
      default: 'ex-radio-control',
    },
  },
};

export const radioIndicatorCfg = {
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
      default: 'ex-radio-indicator',
    },
  },
};

export const radioLabelCfg = {
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
      default: 'ex-radio-label',
    },
  },
};

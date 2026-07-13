import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'radio-card',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'radio-group',
  variants: variantsValues.filter(
    (variant) => !['ghost', 'link'].includes(variant),
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
      default: '',
    },
  },
  selectors: {
    Radiogroup: {
      default: 'ex-radio-group',
    },
  },
};

export const radioCardCfg = {
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
    'RadioCard.Indicator': {
      default: 'ex-radio-card',
    },
  },
};

export const radioCardIndicatorCfg = {
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
      default: 'true',
    },
  },
  selectors: {
    'RadioCard.Indicator': {
      default: 'ex-radio-card-indicator',
    },
  },
};

export const radioCardContentCfg = {
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
    'RadioCard.Content': {
      default: 'ex-radio-card-content',
    },
  },
};

export const radioCardLabelCfg = {
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
    'RadioCard.Label': {
      default: 'ex-radio-card-label',
    },
  },
};

export const radioCardDescriptionCfg = {
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
    'RadioCard.Description': {
      default: 'ex-radio-card-description',
    },
  },
};

import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'checkbox-card',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'checkbox-card',
  variants: variantsValues.filter((variant) => !['ghost', 'link'].includes(variant)),
};

export const checkboxCardCfg = {
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
    CheckboxCard: {
      default: 'ex-checkbox-card',
    },
  },
};

export const checkboxCardIndicatorCfg = {
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
    'CheckboxCard.Indicator': {
      default: 'ex-checkbox-card-indicator',
    },
  },
};

export const checkboxCardContentCfg = {
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
    'CheckboxCard.Content': {
      default: 'ex-checkbox-card-content',
    },
  },
};

export const checkboxCardLabelCfg = {
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
    'CheckboxCard.Label': {
      default: 'ex-checkbox-card-label',
    },
  },
};

export const checkboxCardDescriptionCfg = {
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
    'CheckboxCard.Description': {
      default: 'ex-checkbox-card-description',
    },
  },
};

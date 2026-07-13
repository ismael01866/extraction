import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'field',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'field',
};

export const fieldCfg = {
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
    Field: {
      default: 'ex-field',
    },
  },
};

export const fieldLabelCfg = {
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
    'Field.Label': {
      default: 'ex-field-label',
    },
  },
};

export const fieldHelperCfg = {
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
    'Field.Helper': {
      default: 'ex-field-helper',
    },
  },
};

export const fieldErrorCfg = {
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
    'Field.Error': {
      default: 'ex-field-error',
    },
  },
};

export const fieldSuccessCfg = {
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
    'Field.Success': {
      default: 'ex-field-success',
    },
  },
};

export const fieldRequiredIndicatorCfg = {
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
    'Field.RequiredIndicator': {
      default: 'ex-field-required-indicator',
    },
  },
};

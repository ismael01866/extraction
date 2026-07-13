export const cfg = {
  class: 'toggle-group',
};

export const toggleGroupCfg = {
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
      type: 'string | string[]',
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
    orientation: {
      type: 'enum of ["horizontal", "vertical"]',
      default: 'horizontal',
    },
    rovingFocus: {
      type: 'boolean',
      default: 'true',
    },
    type: {
      type: 'enum of ["single", "multiple"]',
      default: '',
    },
    value: {
      type: 'string | string[]',
      default: '',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    Toggle: {
      default: 'ex-toggle-group',
    },
  },
};

export const toggleGroupItemCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
  },
  selectors: {
    Toggle: {
      default: 'ex-toggle-group-item',
    },
  },
};

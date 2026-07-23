export const cfg = {
  class: 'toggle',
};

export const toggleCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    defaultPressed: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    pressed: {
      type: 'boolean',
      default: 'false',
    },
    onPressedChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    Toggle: {
      default: 'ex-toggle',
    },
  },
};

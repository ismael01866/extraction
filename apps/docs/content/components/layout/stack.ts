export const stackCfg = {
  class: 'stack',
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
    Stack: {
      default: 'ex-stack',
    },
  },
};

export const hStackCfg = {
  class: 'hstack',
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
    HStack: {
      default: 'ex-hstack',
    },
  },
};

export const vStackCfg = {
  class: 'vstack',
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
    VStack: {
      default: 'ex-vstack',
    },
  },
};

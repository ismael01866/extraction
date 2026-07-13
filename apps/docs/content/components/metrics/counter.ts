export const cfg = {
  class: 'counter',
  api: {
    as: {
      type: 'ElementType',
      default: 'span',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    decimals: {
      type: 'number',
      default: '0',
    },
    delay: {
      type: 'number',
      default: '0',
    },
    duration: {
      type: 'number',
      default: '1000',
    },
    initialValue: {
      type: 'number',
      default: '0',
    },
    value: {
      type: 'number',
      default: '',
    },
    formatter: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    Counter: {
      default: 'ex-counter',
    },
  },
};

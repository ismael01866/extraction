export const cfg = {
  class: 'progressive-blur',
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    layers: {
      type: 'number',
      default: '6',
    },
    side: {
      type: 'enum of ["top", "bottom", "left", "right"]',
      default: 'bottom',
    },
  },
  selectors: {
    ProgressiveBlur: {
      default: 'ex-progressive-blur',
    },
  },
};

export const cfg = {
  class: 'in-view',
  api: {
    as: {
      type: 'ElementType',
      default: 'span',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    activeClassName: {
      type: 'string',
      default: '',
    },
    inactiveClassName: {
      type: 'string',
      default: '',
    },
    initialInView: {
      type: 'boolean',
      default: 'false',
    },
    once: {
      type: 'boolean',
      default: 'false',
    },
    root: {
      type: 'Element | Document | null',
      default: '',
    },
    rootMargin: {
      type: 'string',
      default: '',
    },
    threshold: {
      type: 'number | number[]',
      default: '',
    },
  },
  selectors: {
    InView: {
      default: 'ex-in-view',
    },
  },
};

export const cfg = {
  class: 'group',
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    orientation: {
      type: 'enum of ["horizontal", "vertical"]',
      default: 'horizontal',
    },
  },
  selectors: {
    Group: {
      default: 'ex-group',
    },
  },
};

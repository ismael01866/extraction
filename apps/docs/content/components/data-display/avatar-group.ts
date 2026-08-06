export const avatarGroupCfg = {
  class: 'avatar-group',
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
    Avatar: {
      default: 'ex-avatar-group',
    },
  },
};

export const cfg = {
  class: 'marquee',
};

export const marqueeCfg = {
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
    Marquee: {
      default: 'ex-marquee',
    },
  },
};

export const marqueeTrackCfg = {
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
    'Marquee.Track': {
      default: 'ex-marquee-track',
    },
  },
};

export const marqueeItemCfg = {
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
    'Marquee.Item': {
      default: 'ex-marquee-item',
    },
  },
};

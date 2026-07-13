export const cfg = {
  class: 'text-slide',
};

export const textSlideCfg = {
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
    TextSlide: {
      default: 'ex-text-slide',
    },
  },
};

export const textSlideTrackCfg = {
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
    'TextSlide.Track': {
      default: 'ex-text-slide-track',
    },
  },
};

export const textSlideItemCfg = {
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
    'TextSlide.Item': {
      default: 'ex-text-slide-item',
    },
  },
};

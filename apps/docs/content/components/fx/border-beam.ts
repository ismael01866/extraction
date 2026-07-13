export const cfg = {
  class: 'border-beam',
};

export const borderBeamCfg = {
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
    BorderBeam: {
      default: 'ex-border-beam',
    },
  },
};

export const borderBeamTrackCfg = {
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
    'BorderBeam.Track': {
      default: 'ex-border-beam-track',
    },
  },
};

export const borderBeamPulseCfg = {
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
    'BorderBeam.Pulse': {
      default: 'ex-border-beam-pulse',
    },
  },
};

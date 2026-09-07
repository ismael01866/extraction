export const bentoGridCfg = {
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
    BentiGrid: {
      default: 'ex-bento-grid',
    },
  },
};

export const bentoGridItemCfg = {
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
    'BentiGrid.Item': {
      default: 'ex-bento-grid-item',
    },
  },
};

import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'empty-state',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'empty-state',
};

export const emptyStateCfg = {
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
    EmptyState: {
      default: 'ex-empty-state',
    },
  },
};

export const emptyStateContentCfg = {
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
    'EmptyState.Content': {
      default: 'ex-empty-state-content',
    },
  },
};

export const emptyStateIndicatorCfg = {
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
    'EmptyState.Indicator': {
      default: 'ex-empty-state-indicator',
    },
  },
};

export const emptyStateTitleCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'h2',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'EmptyState.Title': {
      default: 'ex-empty-state-title',
    },
  },
};

export const emptyStateDescriptionCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'p',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'EmptyState.Description': {
      default: 'ex-empty-state-description',
    },
  },
};

export const cfg = {
  class: 'collapsible',
};

export const collapsibleCfg = {
  api: {
    defaultOpen: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    open: {
      type: 'boolean',
      default: 'false',
    },
    onOpenChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    Collapsible: {
      default: 'ex-collapsible',
    },
  },
};

export const collapsibleTriggerCfg = {
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
    'Collapsible.Trigger': {
      default: 'ex-collapsible-trigger',
    },
  },
};

export const collapsibleContentCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    forceMount: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Collapsible.Content': {
      default: 'ex-collapsible-content',
    },
  },
};

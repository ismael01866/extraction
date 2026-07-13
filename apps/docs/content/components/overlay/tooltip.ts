import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'tooltip',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'tooltip-content',
};

export const tooltipProviderCfg = {
  api: {
    delayDuration: {
      type: 'number',
      default: '700',
    },
    skipDelayDuration: {
      type: 'number',
      default: '300',
    },
    disableHoverableContent: {
      type: 'boolean',
      default: 'false',
    },
  },
};

export const tooltipCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    defaultOpen: {
      type: 'boolean',
      default: 'false',
    },
    delayDuration: {
      type: 'number',
      default: '700',
    },
    disableHoverableContent: {
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
};

export const tooltipTriggerCfg = {
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
    'Tooltip.Trigger': {
      default: 'ex-tooltip-trigger',
    },
  },
};

export const tooltipPortalCfg = {
  api: {
    container: {
      type: 'HTMLElement',
      default: 'document.body',
    },
    forceMount: {
      type: 'boolean',
      default: 'false',
    },
  },
};

export const tooltipContentCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    align: {
      type: 'enum of ["start", "center", "end"]',
      default: 'center',
    },
    alignOffset: {
      type: 'number',
      default: '0',
    },
    arrowPadding: {
      type: 'number',
      default: '0',
    },
    forceMount: {
      type: 'boolean',
      default: 'false',
    },
    hideWhenDetached: {
      type: 'boolean',
      default: 'false',
    },
    side: {
      type: 'enum of ["top", "right", "bottom", "left"]',
      default: 'bottom',
    },
    sideOffset: {
      type: 'number',
      default: '0',
    },
    sticky: {
      type: 'enum of ["always", "partial"]',
      default: 'partial',
    },
  },
  selectors: {
    'Tooltip.Content': {
      default: 'ex-tooltip-content',
    },
  },
};

export const tooltipArrowCfg = {
  api: {
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Tooltip.Arrow': {
      default: 'ex-tooltip-arrow',
    },
  },
};

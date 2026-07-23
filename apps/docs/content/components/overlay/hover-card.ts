import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'hover-card',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'hover-card-content',
};

export const hoverCardCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    closeDelay: {
      type: 'number',
      default: '300',
    },
    defaultOpen: {
      type: 'boolean',
      default: 'false',
    },
    open: {
      type: 'boolean',
      default: 'false',
    },
    openDelay: {
      type: 'number',
      default: '700',
    },
    onOpenChange: {
      type: 'function',
      default: '',
    },
  },
};

export const hoverCardTriggerCfg = {
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
    'HoverCard.Trigger': {
      default: 'ex-hover-card-trigger',
    },
  },
};

export const hoverCardPortalCfg = {
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

export const hoverCardContentCfg = {
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
    'HoverCard.Content': {
      default: 'ex-hover-card-content',
    },
  },
};

export const hoverCardSectionCfg = {
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
    'HoverCard.Section': {
      default: 'ex-hover-card-section',
    },
  },
};

export const hoverCardArrowCfg = {
  api: {
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'HoverCard.Arrow': {
      default: 'ex-hover-card-arrow',
    },
  },
};

export const hoverCardTitleCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'h4',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'HoverCard.Title': {
      default: 'ex-hover-card-title',
    },
  },
};

export const hoverCardDescriptionCfg = {
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
    'HoverCard.Description': {
      default: 'ex-hover-card-description',
    },
  },
};

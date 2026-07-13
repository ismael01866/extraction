import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'navigation-menu',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'navigation-menu',
};

export const navigationMenuCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'nav',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    defaultValue: {
      type: 'string',
      default: 'false',
    },
    delayDuration: {
      type: 'number',
      default: '200',
    },
    orientation: {
      type: 'enum of ["horizontal", "vertical"]',
      default: 'horizontal',
    },
    skipDelayDuration: {
      type: 'number',
      default: '300',
    },
    value: {
      type: 'string',
      default: 'false',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    NavigationMenu: {
      default: 'ex-navigation-menu',
    },
  },
};

export const navigationMenuListCfg = {
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
    'NavigationMenu.List': {
      default: 'ex-navigation-menu-list',
    },
  },
};

export const navigationMenuItemCfg = {
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
    'NavigationMenu.Item': {
      default: 'ex-navigation-menu-item',
    },
  },
};

export const navigationMenuTriggerCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'NavigationMenu.Trigger': {
      default: 'ex-navigation-menu-trigger',
    },
  },
};

export const navigationMenuLinkCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'a',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    active: {
      type: 'boolean',
      default: 'false',
    },
    onSelect: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    'NavigationMenu.Link': {
      default: 'ex-navigation-menu-link',
    },
  },
};

export const navigationMenuContentCfg = {
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
    onFocusOutside: {
      type: 'function',
      default: '',
    },
    onInteractOutside: {
      type: 'function',
      default: '',
    },
    onPointerDownOutside: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    'NavigationMenu.Content': {
      default: 'ex-navigation-menu-content',
    },
  },
};

export const navigationMenuSectionCfg = {
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
    'NavigationMenu.Section': {
      default: 'ex-navigation-menu-section',
    },
  },
};

export const navigationMenuSubCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    defaultValue: {
      type: 'string',
      default: 'false',
    },
    orientation: {
      type: 'enum of ["horizontal", "vertical"]',
      default: 'horizontal',
    },
    value: {
      type: 'string',
      default: 'false',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    'NavigationMenu.Sub': {
      default: 'ex-navigation-menu-sub',
    },
  },
};

export const navigationMenuIndicatorCfg = {
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
    'NavigationMenu.Indicator': {
      default: 'ex-navigation-menu-indicator',
    },
  },
};

export const navigationMenuViewportCfg = {
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
    'NavigationMenu.Viewport': {
      default: 'ex-navigation-menu-viewport',
    },
  },
};

export const navigationMenuViewportAnchorCfg = {
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
    'NavigationMenu.ViewportAnchor': {
      default: 'ex-navigation-menu-viewport-anchor',
    },
  },
};

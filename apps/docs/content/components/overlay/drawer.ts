import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'drawer',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'drawer-content',
};

export const drawerCfg = {
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
};

export const drawerTriggerCfg = {
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
    'Drawer.Trigger': {
      default: 'ex-drawer-trigger',
    },
  },
};

export const drawerContentCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    side: {
      type: 'enum of ["start", "end", "top", "bottom"]',
      default: 'end',
    },
  },
  selectors: {
    'Drawer.Content': {
      default: 'ex-drawer-content',
    },
  },
};

export const drawerCloseCfg = {
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
    'Drawer.Close': {
      default: 'ex-drawer-close',
    },
  },
};

export const drawerSectionCfg = {
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
    'Drawer.Section': {
      default: 'ex-drawer-section',
    },
  },
};

export const drawerTitleCfg = {
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
    'Drawer.Title': {
      default: 'ex-drawer-title',
    },
  },
};

export const drawerDescriptionCfg = {
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
    'Drawer.Description': {
      default: 'ex-drawer-description',
    },
  },
};

export const drawerOverlayCfg = {
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
    'Drawer.Overlay': {
      default: 'ex-drawer-overlay',
    },
  },
};

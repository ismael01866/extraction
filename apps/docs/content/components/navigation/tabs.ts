import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'tabs',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'tabs',
  variants: variantsValues.filter((variant) => !['link'].includes(variant)),
};

export const tabsCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    activationMode: {
      type: 'enum of ["automatic", "manual"]',
      default: 'automatic',
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
      default: '',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
  },
};

export const tabsListCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    loop: {
      type: 'boolean',
      default: 'true',
    },
  },
  selectors: {
    'Tabs.List': {
      default: 'ex-tabs-list',
    },
  },
};

export const tabsTriggerCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
  },
  selectors: {
    'Tabs.Trigger': {
      default: 'ex-tabs-trigger',
    },
  },
};

export const tabsContentCfg = {
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
    value: {
      type: 'string',
      default: '',
    },
  },
  selectors: {
    'Tabs.Content': {
      default: 'ex-tabs-content',
    },
  },
};

export const tabsSectionCfg = {
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
    'ContextMenu.Section': {
      default: 'ex-tabs-body',
    },
  },
};

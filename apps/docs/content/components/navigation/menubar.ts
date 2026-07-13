import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'menubar',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'menubar',
};

export const menubarCfg = {
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
      default: '',
    },
    loop: {
      type: 'boolean',
      default: 'false',
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
  selectors: {
    Menubar: {
      default: 'ex-menubar',
    },
  },
};

export const menubarMenuCfg = {
  api: {
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
  },
};

export const menubarTriggerCfg = {
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
    'Menubar.Trigger': {
      default: 'ex-menubar-trigger',
    },
  },
};

export const menubarPortalCfg = {
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

export const menubarContentCfg = {
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
      default: '-8',
    },
    arrowPadding: {
      type: 'number',
      default: '0',
    },
    avoidCollisions: {
      type: 'boolean',
      default: 'true',
    },
    forceMount: {
      type: 'boolean',
      default: 'false',
    },
    hideWhenDetached: {
      type: 'boolean',
      default: 'false',
    },
    loop: {
      type: 'boolean',
      default: 'false',
    },
    side: {
      type: 'enum of ["top", "right", "bottom", "left"]',
      default: 'bottom',
    },
    sideOffset: {
      type: 'number',
      default: '6',
    },
    sticky: {
      type: 'enum of ["always", "partial"]',
      default: 'partial',
    },
    onCloseAutoFocus: {
      type: 'function',
      default: '',
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
    'Menubar.Content': {
      default: 'ex-menubar-content',
    },
  },
};

export const menubarSectionCfg = {
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
      default: 'ex-menubar-section',
    },
  },
};

export const menubarArrowCfg = {
  api: {
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Menubar.Arrow': {
      default: 'ex-menubar-arrow',
    },
  },
};

export const menubarItemCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    textValue: {
      type: 'string',
      default: '',
    },
    onSelect: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    'Menubar.Item': {
      default: 'ex-menubar-item',
    },
  },
};

export const menubarItemIndicatorCfg = {
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
      default: 'true',
    },
  },
  selectors: {
    'Menubar.ItemIndicator': {
      default: 'ex-menubar-indicator',
    },
  },
};

export const menubarLabelCfg = {
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
    'Menubar.Label': {
      default: 'ex-menubar-label',
    },
  },
};

export const menubarCommandCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'kbd',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Menubar.Command': {
      default: 'ex-menubar-command',
    },
  },
};

export const menubarSeparatorCfg = {
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
    'Menubar.Separator': {
      default: 'ex-menubar-separator',
    },
  },
};

export const menubarRadioGroupCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
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
  selectors: {
    'Menubar.RadioGroup': {
      default: 'ex-menubar-radio-group',
    },
  },
};

export const menubarRadioItemCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    textValue: {
      type: 'string',
      default: '',
    },
    value: {
      type: 'string',
      default: '',
    },
    onSelect: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    'Menubar.RadioItem': {
      default: 'ex-menubar-radio-item',
    },
  },
};

export const menubarCheckboxItemCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    checked: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    textValue: {
      type: 'string',
      default: '',
    },
    onCheckedChange: {
      type: 'function',
      default: '',
    },
    onSelect: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    'Menubar.CheckboxItem': {
      default: 'ex-menubar-checkbox-item',
    },
  },
};

export const menubarSubCfg = {
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
    'Menubar.Sub': {
      default: 'ex-menubar-sub',
    },
  },
};

export const menubarSubTriggerCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    textValue: {
      type: 'string',
      default: '',
    },
  },
  selectors: {
    'Menubar.SubTrigger': {
      default: 'ex-menubar-sub-trigger',
    },
  },
};

export const menubarSubContentCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    alignOffset: {
      type: 'number',
      default: '-8',
    },
    arrowPadding: {
      type: 'number',
      default: '0',
    },
    avoidCollisions: {
      type: 'boolean',
      default: 'true',
    },
    forceMount: {
      type: 'boolean',
      default: 'false',
    },
    hideWhenDetached: {
      type: 'boolean',
      default: 'false',
    },
    loop: {
      type: 'boolean',
      default: 'false',
    },
    sideOffset: {
      type: 'number',
      default: '8',
    },
    sticky: {
      type: 'enum of ["always", "partial"]',
      default: 'partial',
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
    'Menubar.SubContent': {
      default: 'ex-menubar-sub-content',
    },
  },
};

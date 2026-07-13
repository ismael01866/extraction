import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'context-menu',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'context-menu-content',
};

export const contextMenuCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    modal: {
      type: 'boolean',
      default: 'true',
    },
    onOpenChange: {
      type: 'function',
      default: '',
    },
  },
};

export const contextMenuTriggerCfg = {
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
  },
  selectors: {
    'ContextMenu.Trigger': {
      default: 'ex-context-menu-trigger',
    },
  },
};

export const contextMenuPortalCfg = {
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

export const contextMenuContentCfg = {
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
    'ContextMenu.Content': {
      default: 'ex-context-menu-content',
    },
  },
};

export const contextMenuSectionCfg = {
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
      default: 'ex-context-menu-body',
    },
  },
};

export const contextMenuItemCfg = {
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
    'ContextMenu.Item': {
      default: 'ex-context-menu-item',
    },
  },
};

export const contextMenuItemIndicatorCfg = {
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
    'ContextMenu.ItemIndicator': {
      default: 'ex-context-menu-item-indicator',
    },
  },
};

export const contextMenuLabelCfg = {
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
    'ContextMenu.Label': {
      default: 'ex-context-menu-label',
    },
  },
};

export const contextMenuCommandCfg = {
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
    'ContextMenu.Command': {
      default: 'ex-context-menu-command',
    },
  },
};

export const contextMenuSeparatorCfg = {
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
    'ContextMenu.Separator': {
      default: 'ex-context-menu-separator',
    },
  },
};

export const contextMenuRadioGroupCfg = {
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
    'ContextMenu.RadioGroup': {
      default: 'ex-context-menu-radio-group',
    },
  },
};

export const contextMenuRadioItemCfg = {
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
    'ContextMenu.RadioItem': {
      default: 'ex-context-menu-radio-item',
    },
  },
};

export const contextMenuCheckboxItemCfg = {
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
    'ContextMenu.CheckboxItem': {
      default: 'ex-context-menu-checkbox-item',
    },
  },
};

export const contextMenuSubCfg = {
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
    'ContextMenu.Sub': {
      default: 'ex-context-menu-sub',
    },
  },
};

export const contextMenuSubTriggerCfg = {
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
    'ContextMenu.SubTrigger': {
      default: 'ex-context-menu-sub-trigger',
    },
  },
};

export const contextMenuSubContentCfg = {
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
      default: '0',
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
    'ContextMenu.SubContent': {
      default: 'ex-context-menu-sub-content',
    },
  },
};

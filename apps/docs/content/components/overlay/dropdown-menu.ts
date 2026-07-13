import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'dropdown-menu',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'dropdown-menu-content',
};

export const dropdownMenuCfg = {
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
    modal: {
      type: 'boolean',
      default: 'true',
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

export const dropdownMenuTriggerCfg = {
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
    'DropdownMenu.Trigger': {
      default: 'ex-dropdown-menu-trigger',
    },
  },
};

export const dropdownMenuPortalCfg = {
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

export const dropdownMenuContentCfg = {
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
      default: '0',
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
    'DropdownMenu.Content': {
      default: 'ex-dropdown-menu-content',
    },
  },
};

export const dropdownMenuSectionCfg = {
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
      default: 'ex-dropdown-menu-body',
    },
  },
};

export const dropdownMenuArrowCfg = {
  api: {
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'DropdownMenu.Arrow': {
      default: 'ex-dropdown-menu-arrow',
    },
  },
};

export const dropdownMenuItemCfg = {
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
    'DropdownMenu.Item': {
      default: 'ex-dropdown-menu-item',
    },
  },
};

export const dropdownMenuItemIndicatorCfg = {
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
    'DropdownMenu.ItemIndicator': {
      default: 'ex-dropdown-menu-item-indicator',
    },
  },
};

export const dropdownMenuLabelCfg = {
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
    'DropdownMenu.Label': {
      default: 'ex-dropdown-menu-label',
    },
  },
};

export const dropdownMenuCommandCfg = {
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
    'DropdownMenu.Command': {
      default: 'ex-dropdown-menu-command',
    },
  },
};

export const dropdownMenuSeparatorCfg = {
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
    'DropdownMenu.Separator': {
      default: 'ex-dropdown-menu-separator',
    },
  },
};

export const dropdownMenuRadioGroupCfg = {
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
    'DropdownMenu.RadioGroup': {
      default: 'ex-dropdown-menu-radio-group',
    },
  },
};

export const dropdownMenuRadioItemCfg = {
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
    'DropdownMenu.RadioItem': {
      default: 'ex-dropdown-menu-radio-item',
    },
  },
};

export const dropdownMenuCheckboxItemCfg = {
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
    'DropdownMenu.CheckboxItem': {
      default: 'ex-dropdown-menu-checkbox-item',
    },
  },
};

export const dropdownMenuSubCfg = {
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
    'DropdownMenu.Sub': {
      default: 'ex-dropdown-menu-sub',
    },
  },
};

export const dropdownMenuSubTriggerCfg = {
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
    'DropdownMenu.SubTrigger': {
      default: 'ex-dropdown-menu-sub-trigger',
    },
  },
};

export const dropdownMenuSubContentCfg = {
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
    'DropdownMenu.SubContent': {
      default: 'ex-dropdown-menu-sub-content',
    },
  },
};

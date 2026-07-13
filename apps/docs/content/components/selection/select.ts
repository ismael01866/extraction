import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'select',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  variants: variantsValues.filter(
    (variant) => !['ghost', 'link'].includes(variant),
  ),
};

export const selectCfg = {
  api: {
    defaultOpen: {
      type: 'boolean',
      default: 'false',
    },
    defaultValue: {
      type: 'string',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    name: {
      type: 'string',
      default: '',
    },
    open: {
      type: 'boolean',
      default: 'false',
    },
    required: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
    onOpenChange: {
      type: 'function',
      default: '',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
  },
};

export const selectTriggerCfg = {
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
    'Select.Trigger': {
      default: 'ex-select-trigger',
    },
  },
};

export const selectValueCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    placeholder: {
      type: 'React.Node',
      default: '',
    },
  },
  selectors: {
    'Select.Value': {
      default: 'ex-select-value',
    },
  },
};

export const selectIconCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    placeholder: {
      type: 'React.Node',
      default: '',
    },
  },
  selectors: {
    'Select.Icon': {
      default: 'ex-select-icon',
    },
  },
};

export const selectPortalCfg = {
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

export const selectContentCfg = {
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
      default: 'start',
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
    hideWhenDetached: {
      type: 'boolean',
      default: 'false',
    },
    position: {
      type: 'enum of ["item-aligned", "popper"]',
      default: 'item-aligned',
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
    onPointerDownOutside: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    'Select.Content': {
      default: 'ex-select-content',
    },
  },
};

export const selectSectionCfg = {
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
      default: 'ex-select-body',
    },
  },
};

export const selectArrowCfg = {
  api: {
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Select.Arrow': {
      default: 'ex-select-arrow',
    },
  },
};

export const selectGroupCfg = {
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
    'Select.Group': {
      default: 'ex-select-group',
    },
  },
};

export const selectItemCfg = {
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
  },
  selectors: {
    'Select.Item': {
      default: 'ex-select-item',
    },
  },
};

export const selectItemTextCfg = {
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
    'Select.ItemText': {
      default: 'ex-select-item-text',
    },
  },
};

export const selectItemIndicatorCfg = {
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
    'Select.ItemIndicator': {
      default: 'ex-select-item-indicator',
    },
  },
};

export const selectLabelCfg = {
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
    'Select.Label': {
      default: 'ex-select-label',
    },
  },
};

export const selectSeparatorCfg = {
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
    'Select.Separator': {
      default: 'ex-select-separator',
    },
  },
};

export const selectViewportCfg = {
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
    'Select.Viewport': {
      default: 'ex-select-viewport',
    },
  },
};

export const selectScrollUpButtonCfg = {
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
    'Select.ScrollUpButton': {
      default: 'ex-select-scroll-up-button',
    },
  },
};

export const selectScrollDownButtonCfg = {
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
    'Select.ScrollDownButton': {
      default: 'ex-select-scroll-down-button',
    },
  },
};

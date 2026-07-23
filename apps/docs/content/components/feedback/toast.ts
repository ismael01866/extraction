import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'toast',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'toast',
  variants: variantsValues.filter((variant) => !['ghost', 'link'].includes(variant)),
};

export const toastProviderCfg = {
  api: {
    duration: {
      type: 'number',
      default: '5000',
    },
    swipeDirection: {
      type: 'enum of ["up", "down", "left", "right"]',
      default: 'right',
    },
    swipeThreshold: {
      type: 'number',
      default: '50',
    },
  },
};

export const toastCfg = {
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
      default: 'true',
    },
    duration: {
      type: 'number',
      default: '',
    },
    forceMount: {
      type: 'boolean',
      default: 'false',
    },
    open: {
      type: 'boolean',
      default: '',
    },
    type: {
      type: 'enum of ["background", "foreground"]',
      default: 'foreground',
    },
    onPause: {
      type: 'function',
      default: '',
    },
    onResume: {
      type: 'function',
      default: '',
    },
    onSwipeStart: {
      type: 'function',
      default: '',
    },
    onSwipeMove: {
      type: 'function',
      default: '',
    },
    onSwipeEnd: {
      type: 'function',
      default: '',
    },
    onSwipeCancel: {
      type: 'function',
      default: '',
    },
    onOpenChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    Toast: {
      default: 'ex-toast',
    },
  },
};

export const toastViewportCfg = {
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
    'Toast.Viewport': {
      default: 'ex-toast-viewport',
    },
  },
};

export const toastContentCfg = {
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
    'Toast.Content': {
      default: 'ex-toast-content',
    },
  },
};

export const toastTitleCfg = {
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
    'Toast.Title': {
      default: 'ex-toast-title',
    },
  },
};

export const toastDescriptionCfg = {
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
    'Toast.Description': {
      default: 'ex-toast-description',
    },
  },
};

export const toastActionCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    altText: {
      type: 'string',
      default: 'action',
    },
  },
  selectors: {
    'Toast.Action': {
      default: 'ex-toast-action',
    },
  },
};

export const toastCloseCfg = {
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
    'Toast.Close': {
      default: 'ex-toast-close',
    },
  },
};

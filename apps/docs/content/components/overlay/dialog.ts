import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'dialog',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg', 'xl'].includes(size as string),
  ),
  sizeClass: 'dialog-content',
};

export const dialogCfg = {
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

export const dialogTriggerCfg = {
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
    'Dialog.Trigger': {
      default: 'ex-dialog-trigger',
    },
  },
};

export const dialogContentCfg = {
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
    'Dialog.Content': {
      default: 'ex-dialog-content',
    },
  },
};

export const dialogCloseCfg = {
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
    'Dialog.Close': {
      default: 'ex-dialog-close',
    },
  },
};

export const dialogSectionCfg = {
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
    'Dialog.Section': {
      default: 'ex-dialog-section',
    },
  },
};

export const dialogTitleCfg = {
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
    'Dialog.Title': {
      default: 'ex-dialog-title',
    },
  },
};

export const dialogDescriptionCfg = {
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
    'Dialog.Description': {
      default: 'ex-dialog-description',
    },
  },
};

export const dialogOverlayCfg = {
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
    'Dialog.Overlay': {
      default: 'ex-dialog-overlay',
    },
  },
};

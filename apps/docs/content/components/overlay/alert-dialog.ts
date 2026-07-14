import { sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'alert-dialog',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'alert-dialog-content',
};

export const alertDialogCfg = {
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

export const alertDialogTriggerCfg = {
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
    'AlertDialog.Trigger': {
      default: 'ex-alert-dialog-trigger',
    },
  },
};

export const alertDialogContentCfg = {
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
    'AlertDialog.Content': {
      default: 'ex-alert-dialog-content',
    },
  },
};

export const alertDialogTitleCfg = {
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
    'AlertDialog.Title': {
      default: 'ex-alert-dialog-title',
    },
  },
};

export const alertDialogDescriptionCfg = {
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
    'AlertDialog.Description': {
      default: 'ex-alert-dialog-description',
    },
  },
};

export const alertDialogActionCfg = {
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
    'AlertDialog.Action': {
      default: 'ex-alert-dialog-action',
    },
  },
};

export const alertDialogCancelCfg = {
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
    'AlertDialog.Cancel': {
      default: 'ex-alert-dialog-cancel',
    },
  },
};

export const alertDialogSectionCfg = {
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
    'AlertDialog.Section': {
      default: 'ex-alert-dialog-section',
    },
  },
};

export const alertDialogOverlayCfg = {
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
    'AlertDialog.Overlay': {
      default: 'ex-alert-dialog-overlay',
    },
  },
};

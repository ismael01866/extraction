export const browserFrameCfg = {
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
    BrowserFrame: {
      default: 'ex-browser-frame',
    },
  },
};

export const browserFrameToolbarCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'section',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'BrowserFrame.Toolbar': {
      default: 'ex-browser-frame-toolbar',
    },
  },
};

export const browserFrameControlsCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'section',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'BrowserFrame.Controls': {
      default: 'ex-browser-frame-controls',
    },
  },
};

export const browserFrameActionsCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'section',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'BrowserFrame.Actions': {
      default: 'ex-browser-frame-actions',
    },
  },
};

export const browserFrameAddressCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'section',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'BrowserFrame.Address': {
      default: 'ex-browser-frame-address',
    },
  },
};

export const browserFrameContentCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'section',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'BrowserFrame.Content': {
      default: 'ex-browser-frame-content',
    },
  },
};

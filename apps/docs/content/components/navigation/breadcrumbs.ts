import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'breadcrumbs',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'text',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'breadcrumbs',
};

export const breadcrumbsCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'nav',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Breadcrumbs: {
      default: 'ex-breadcrumbs',
    },
  },
};

export const breadcrumbsListCfg = {
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
    'Breadcrumbs.List': {
      default: 'ex-breadcrumbs-list',
    },
  },
};

export const breadcrumbsItemCfg = {
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
    'Breadcrumbs.Item': {
      default: 'ex-breadcrumbs-item',
    },
  },
};

export const breadcrumbsLinkCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'a',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Breadcrumbs.Link': {
      default: 'ex-breadcrumbs-link',
    },
  },
};

export const breadcrumbsCurrentLinkCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'a',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Breadcrumbs.CurrentLink': {
      default: 'ex-breadcrumbs-current-link',
    },
  },
};

export const breadcrumbsSeparatorCfg = {
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
    'Breadcrumbs.Separator': {
      default: 'ex-breadcrumbs-separator',
    },
  },
};

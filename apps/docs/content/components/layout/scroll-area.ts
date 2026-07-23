import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'scroll-area',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'scroll-area',
  variants: variantsValues.filter((variant) => !['ghost', 'link'].includes(variant)),
};

export const scrollAreaCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    scrollHideDelay: {
      type: 'number',
      default: '600',
    },
    type: {
      type: 'enum of ["auto", "always", "hover", "scroll"]',
      default: 'hover',
    },
  },
  selectors: {
    ScrollArea: {
      default: 'ex-scroll-area',
    },
  },
};

export const scrollAreaViewportCfg = {
  api: {
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'ScrollArea.Viewport': {
      default: 'ex-scroll-area-viewport',
    },
  },
};

export const scrollAreaContentCfg = {
  api: {
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'ScrollArea.Content': {
      default: 'ex-scroll-area-content',
    },
  },
};

export const scrollAreaScrollbarCfg = {
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
  },
  selectors: {
    'ScrollArea.Scrollbar': {
      default: 'ex-scroll-area-scrollbar',
    },
  },
};

export const scrollAreaThumbCfg = {
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
    'ScrollArea.Thumb': {
      default: 'ex-scroll-area-thumb',
    },
  },
};

export const scrollAreaCornerCfg = {
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
    'ScrollArea.Corner': {
      default: 'ex-scroll-area-corner',
    },
  },
};

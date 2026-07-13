import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'blockquote',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'blockquote',
  variants: variantsValues.filter((v) => v !== 'ghost'),
};

export const blockquoteCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'figure',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Blockquote: {
      default: 'ex-blockquote',
    },
  },
};

export const blockquoteContentCfg = {
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
    'Blockquote.Content': {
      default: 'ex-blockquote-content',
    },
  },
};

export const blockquoteDescriptionCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'blockquote',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Blockquote.Description': {
      default: 'ex-blockquote-description',
    },
  },
};

export const blockquoteCaptionCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'figcaption',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Blockquote.Caption': {
      default: 'ex-blockquote-caption',
    },
  },
};

export const blockquoteCiteCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'cite',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Blockquote.Cite': {
      default: 'ex-blockquote-cite',
    },
  },
};

export const blockquoteIconCfg = {
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
    'Blockquote.Icon': {
      default: 'ex-blockquote-icon',
    },
  },
};

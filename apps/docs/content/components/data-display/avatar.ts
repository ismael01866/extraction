import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'avatar',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg', 'xl'].includes(size as string)),
  sizeClass: 'avatar',
  variants: variantsValues.filter((variant) => !['ghost', 'link'].includes(variant)),
};

export const avatarCfg = {
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
    Avatar: {
      default: 'ex-avatar',
    },
  },
};

export const avatarImageCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'img',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Avatar.Image': {
      default: 'ex-avatar-image',
    },
  },
};

export const avatarFallbackCfg = {
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
    'Avatar.Fallback': {
      default: 'ex-avatar-fallback',
    },
  },
};

export const avatarGroupCfg = {
  class: 'avatar-group',
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    orientation: {
      type: 'enum of ["horizontal", "vertical"]',
      default: 'horizontal',
    },
  },
  selectors: {
    Avatar: {
      default: 'ex-avatar-group',
    },
  },
};

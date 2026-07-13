import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'select',
  colorPalette: [...colorPaletteValues],
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'native-select',
  variants: variantsValues.filter(
    (variant) => !['ghost', 'link'].includes(variant),
  ),
};

export const nativeSelectCfg = {
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
    NativeSelect: {
      default: 'ex-native-select',
    },
  },
};

export const nativeSelectFieldCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'select',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'NativeSelect.Field': {
      default: 'ex-native-select-field',
    },
  },
};

export const nativeSelectIconCfg = {
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
    'NativeSelect.Icon': {
      default: 'ex-native-select-icon',
    },
  },
};

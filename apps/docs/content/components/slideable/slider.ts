import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'slider',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'slider',
};

export const sliderCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    defaultValue: {
      type: 'number[]',
      default: '',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    max: {
      type: 'number',
      default: '',
    },
    min: {
      type: 'number',
      default: '',
    },
    name: {
      type: 'string',
      default: '',
    },
    orientation: {
      type: 'enum of ["horizontal", "vertical"]',
      default: 'horizontal',
    },
    step: {
      type: 'number',
      default: '',
    },
    value: {
      type: 'number[]',
      default: '',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
    onValueCommit: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    Slider: {
      default: 'ex-slider',
    },
  },
};

export const sliderTrackCfg = {
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
    'Slider.Track': {
      default: 'ex-slider-track',
    },
  },
};

export const sliderRangeCfg = {
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
    'Slider.Range': {
      default: 'ex-slider-range',
    },
  },
};

export const sliderThumbCfg = {
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
    'Slider.Thumb': {
      default: 'ex-slider-thumb',
    },
  },
};

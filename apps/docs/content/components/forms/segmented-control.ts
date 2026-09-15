import { colorPaletteValues, sizeValues } from 'extraction-ui';

export const cfg = {
  class: 'segmented-control',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md', 'lg'].includes(size as string)),
  sizeClass: 'segmented-control',
};

export const segmentedControlCfg = {
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
      type: 'string',
      default: '',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    items: {
      type: 'Array<string | { value: string; label: React.ReactNode }>',
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
    readOnly: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
    onValueChange: {
      type: 'function',
      default: '',
    },
  },
  selectors: {
    SegmentedControl: {
      default: 'ex-segmented-control',
    },
  },
};

export const segmentedControlItemCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
  },
  selectors: {
    'SegmentedControl.Item': {
      default: 'ex-segmented-control-item',
    },
  },
};

export const segmentedControlIndicatorCfg = {
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
    'SegmentedControl.Indicator': {
      default: 'ex-segmented-control-indicator',
    },
  },
};

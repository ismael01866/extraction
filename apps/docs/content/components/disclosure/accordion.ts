import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'accordion',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) =>
    ['sm', 'md', 'lg'].includes(size as string),
  ),
  sizeClass: 'accordion',
  variants: variantsValues.filter(
    (variant) => !['ghost', 'link'].includes(variant),
  ),
};
export const accordionCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    collapsible: {
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
    type: {
      type: 'enum of ["single", "multiple"]',
      default: '',
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
    Accordion: {
      default: 'ex-accordion',
    },
  },
};

export const accordionHeaderCfg = {
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
    'Accordion.Header': {
      default: 'ex-accordion-header',
    },
  },
};

export const accordionTriggerCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'button',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Accordion.Trigger': {
      default: 'ex-accordion-trigger',
    },
  },
};

export const accordionItemCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'div',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
    disabled: {
      type: 'boolean',
      default: 'false',
    },
    value: {
      type: 'string',
      default: '',
    },
  },
  selectors: {
    'Accordion.Item': {
      default: 'ex-accordion-item',
    },
  },
};

export const accordionContentCfg = {
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
    'Accordion.Field': {
      default: 'ex-accordion-content',
    },
  },
};

export const accordionSectionCfg = {
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
    'Accordion.Section': {
      default: 'ex-accordion-section',
    },
  },
};

export const accordionIconCfg = {
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
    'Accordion.Icon': {
      default: 'ex-accordion-icon',
    },
  },
};

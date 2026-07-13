import { colorPaletteValues, sizeValues, variantsValues } from 'extraction-ui';

export const cfg = {
  class: 'table',
  colorPalette: colorPaletteValues,
  colorPaletteClass: 'palette',
  sizes: sizeValues.filter((size) => ['sm', 'md'].includes(size as string)),
  sizeClass: 'table',
  variants: variantsValues.filter(
    (variant) => !['surface', 'ghost'].includes(variant),
  ),
};

export const tableCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'table',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    Table: {
      default: 'ex-table',
    },
  },
};

export const tableCaptionCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'caption',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Table.Caption': {
      default: 'ex-table-caption',
    },
  },
};

export const tableHeadCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'thead',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Table.Head': {
      default: 'ex-table-head',
    },
  },
};

export const tableBodyCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'tbody',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Table.Body': {
      default: 'ex-table-body',
    },
  },
};

export const tableFootCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'tfoot',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Table.Foot': {
      default: 'ex-table-foot',
    },
  },
};

export const tableHeaderCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'th',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Table.Header': {
      default: 'ex-table-header',
    },
  },
};

export const tableRowCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'tr',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Table.Row': {
      default: 'ex-table-row',
    },
  },
};

export const tableCellCfg = {
  api: {
    as: {
      type: 'ElementType',
      default: 'td',
    },
    asChild: {
      type: 'boolean',
      default: 'false',
    },
  },
  selectors: {
    'Table.Cell': {
      default: 'ex-table-cell',
    },
  },
};

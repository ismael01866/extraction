import React, { ElementType } from 'react';

import { Element } from '../element';
import {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFootProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from './table.types';

export const TableRoot = <T extends ElementType = 'table'>(props: TableProps<T>) => {
  const { as = 'table', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-table" {...rest}>
      {children}
    </Element>
  );
};

TableRoot.displayName = 'Table';

export const TableCaption = <T extends ElementType = 'caption'>(props: TableCaptionProps<T>) => {
  const { as = 'caption', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-table-caption" {...rest}>
      {children}
    </Element>
  );
};

TableCaption.displayName = 'Table.Caption';

export const TableHead = <T extends ElementType = 'thead'>(props: TableHeadProps<T>) => {
  const { as = 'thead', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-table-head" {...rest}>
      {children}
    </Element>
  );
};

TableHead.displayName = 'Table.Head';

export const TableBody = <T extends ElementType = 'tbody'>(props: TableBodyProps<T>) => {
  const { as = 'tbody', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-table-body" {...rest}>
      {children}
    </Element>
  );
};

TableBody.displayName = 'Table.Body';

export const TableFoot = <T extends ElementType = 'tfoot'>(props: TableFootProps<T>) => {
  const { as = 'tfoot', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-table-foot" {...rest}>
      {children}
    </Element>
  );
};

TableFoot.displayName = 'Table.Foot';

export const TableRow = <T extends ElementType = 'tr'>(props: TableRowProps<T>) => {
  const { as = 'tr', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-table-row" {...rest}>
      {children}
    </Element>
  );
};

TableRow.displayName = 'Table.Row';

export const TableHeader = <T extends ElementType = 'th'>(props: TableHeaderProps<T>) => {
  const { as = 'th', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-table-header" {...rest}>
      {children}
    </Element>
  );
};

TableHeader.displayName = 'Table.Header';

export const TableCell = <T extends ElementType = 'td'>(props: TableCellProps<T>) => {
  const { as = 'td', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-table-cell" {...rest}>
      {children}
    </Element>
  );
};

TableCell.displayName = 'Table.Cell';

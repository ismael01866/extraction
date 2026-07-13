import {
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from './table';

export type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFootProps,
  TableHeaderProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from './table.types';

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Foot: TableFoot,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
});

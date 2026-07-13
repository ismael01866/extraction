import { ListIndicator, ListItem, ListRoot } from './list';

export type { ListIndicatorProps, ListItemProps, ListProps } from './list.types';

export const List = Object.assign(ListRoot, {
  Item: ListItem,
  Indicator: ListIndicator,
});

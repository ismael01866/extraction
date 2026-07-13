import { ToggleGroupItem, ToggleGroupRoot } from './toggle-group';

export type { ToggleGroupRootProps, ToggleGroupItemProps } from './toggle-group.types';

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: ToggleGroupItem,
});

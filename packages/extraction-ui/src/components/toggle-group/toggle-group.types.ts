import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as ToggleGroup from '@radix-ui/react-toggle-group';

export type ToggleGroupRootProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof ToggleGroup.Root>, 'as' | 'asChild' | 'className' | 'children'> & {
    name?: string;
  }
>;

export type ToggleGroupItemProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof ToggleGroup.Item>, 'as' | 'asChild' | 'className' | 'children'>
>;

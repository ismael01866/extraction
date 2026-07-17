import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as ToggleGroup from '@radix-ui/react-toggle-group';

export type ToggleGroupRootProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ToggleGroup.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type ToggleGroupItemProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof ToggleGroup.Item>, 'as' | 'asChild' | 'className' | 'children'>;

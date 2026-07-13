import { ComponentProps, ElementType } from 'react';

import { ToggleGroup } from 'radix-ui';

import { ElementProps } from '../element';

export type ToggleGroupRootProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof ToggleGroup.Root>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type ToggleGroupItemProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof ToggleGroup.Item>,
    'as' | 'asChild' | 'className' | 'children'
  >;

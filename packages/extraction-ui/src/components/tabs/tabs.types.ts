import { ComponentProps, ElementType } from 'react';

import { Tabs } from 'radix-ui';

import { ElementProps } from '../element';

export type TabsProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Tabs.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type TabsListProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Tabs.List>, 'as' | 'asChild' | 'className' | 'children'>;

export type TabsTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Tabs.Trigger>,
    'as' | 'asChild' | 'className' | 'children'
  >;
export type TabsContentProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Tabs.Content>,
    'as' | 'asChild' | 'className' | 'children'
  >;

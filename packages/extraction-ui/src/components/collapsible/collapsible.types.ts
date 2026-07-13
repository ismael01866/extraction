import { ComponentProps, ElementType } from 'react';

import { Collapsible } from 'radix-ui';

import { ElementProps } from '../element';

export type CollapsibleProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Collapsible.Root>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type CollapsibleTriggerProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Collapsible.Trigger>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type CollapsibleContentProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Collapsible.Content>,
    'as' | 'asChild' | 'className' | 'children'
  >;

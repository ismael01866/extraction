import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as Collapsible from '@radix-ui/react-collapsible';

export type CollapsibleProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Collapsible.Root>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type CollapsibleTriggerProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Collapsible.Trigger>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type CollapsibleContentProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Collapsible.Content>, 'as' | 'asChild' | 'className' | 'children'>
>;

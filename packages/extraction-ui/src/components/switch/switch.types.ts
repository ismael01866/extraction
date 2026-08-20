import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as Switch from '@radix-ui/react-switch';

export type SwitchProps<T extends ElementType> = MergeElementProps<
  Omit<ElementProps<T>, 'as'>,
  Omit<ComponentProps<typeof Switch.Root>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type SwitchThumbProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Switch.SwitchThumb>, 'as' | 'asChild' | 'className' | 'children'>
>;

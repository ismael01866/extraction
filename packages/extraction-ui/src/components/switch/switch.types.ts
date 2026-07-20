import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Switch from '@radix-ui/react-switch';

export type SwitchProps<T extends ElementType> = Omit<ElementProps<T>, 'as'> &
  Omit<ComponentProps<typeof Switch.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type SwitchThumbProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Switch.SwitchThumb>, 'as' | 'asChild' | 'className' | 'children'>;

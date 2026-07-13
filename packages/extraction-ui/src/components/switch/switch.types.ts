import { ComponentProps, ElementType } from 'react';

import { Switch } from 'radix-ui';

import { ElementProps } from '../element';

export type SwitchProps<T extends ElementType> = Omit<ElementProps<T>, 'as'> &
  Omit<ComponentProps<typeof Switch.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type SwitchThumbProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Switch.SwitchThumb>,
    'as' | 'asChild' | 'className' | 'children'
  >;

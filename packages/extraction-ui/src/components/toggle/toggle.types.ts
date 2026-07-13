import { ComponentProps, ElementType } from 'react';

import { Toggle } from 'radix-ui';

import { ElementProps } from '../element';

export type ToggleProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Toggle.Root>, 'as' | 'asChild' | 'className' | 'children'>;

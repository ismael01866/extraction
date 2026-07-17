import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Toggle from '@radix-ui/react-toggle';

export type ToggleProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Toggle.Root>, 'as' | 'asChild' | 'className' | 'children'>;

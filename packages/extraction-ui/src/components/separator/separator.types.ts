import { ComponentProps, ElementType } from 'react';

import { Separator } from 'radix-ui';

import { ElementProps } from '../element';

export type SeparatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Separator.Root>,
    'as' | 'asChild' | 'className' | 'children'
  >;

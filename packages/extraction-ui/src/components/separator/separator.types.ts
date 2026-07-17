import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Separator from '@radix-ui/react-separator';

export type SeparatorProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Separator.Root>, 'as' | 'asChild' | 'className' | 'children'>;

import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Progress from '@radix-ui/react-progress';

export type ProgressProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Progress.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type ProgressIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Progress.Indicator>, 'as' | 'asChild' | 'className' | 'children'>;

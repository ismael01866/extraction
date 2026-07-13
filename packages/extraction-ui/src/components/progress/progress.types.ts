import { ComponentProps, ElementType } from 'react';

import { Progress } from 'radix-ui';

import { ElementProps } from '../element';

export type ProgressProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Progress.Root>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type ProgressIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Progress.Indicator>,
    'as' | 'asChild' | 'className' | 'children'
  >;

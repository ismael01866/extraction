import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as Progress from '@radix-ui/react-progress';

export type ProgressProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Progress.Root>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type ProgressIndicatorProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Progress.Indicator>, 'as' | 'asChild' | 'className' | 'children'>
>;

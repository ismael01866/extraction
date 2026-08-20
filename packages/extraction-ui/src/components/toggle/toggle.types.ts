import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as Toggle from '@radix-ui/react-toggle';

export type ToggleProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Toggle.Root>, 'as' | 'asChild' | 'className' | 'children'>
>;

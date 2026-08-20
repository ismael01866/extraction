import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as Separator from '@radix-ui/react-separator';

export type SeparatorProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof Separator.Root>, 'as' | 'asChild' | 'className' | 'children'>
>;

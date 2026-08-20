import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as RadioGroup from '@radix-ui/react-radio-group';

export type RadioGroupRootProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof RadioGroup.Root>, 'as' | 'asChild' | 'className' | 'children'>
>;

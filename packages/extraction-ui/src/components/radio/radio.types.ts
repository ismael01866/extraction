import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as RadioGroup from '@radix-ui/react-radio-group';

export type RadioItemProps<T extends ElementType> = ElementProps<T>;

export type RadioControlProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof RadioGroup.Item>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type RadioIndicatorProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof RadioGroup.Indicator>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type RadioLabelProps<T extends ElementType> = ElementProps<T>;

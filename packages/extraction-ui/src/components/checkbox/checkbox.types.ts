import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Checkbox from '@radix-ui/react-checkbox';

export type CheckboxRootProps<T extends ElementType> = ElementProps<T>;

export type CheckboxControlProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Checkbox.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type CheckboxIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Checkbox.Indicator>, 'as' | 'asChild' | 'className' | 'children'>;

export type CheckboxLabelProps<T extends ElementType> = ElementProps<T>;

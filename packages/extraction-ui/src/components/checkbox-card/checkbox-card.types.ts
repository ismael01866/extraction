import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Checkbox from '@radix-ui/react-checkbox';

export type CheckboxCardRootProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Checkbox.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type CheckboxCardIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Checkbox.Indicator>, 'as' | 'asChild' | 'className' | 'children'>;

export type CheckboxCardContentProps<T extends ElementType> = ElementProps<T>;

export type CheckboxCardLabelProps<T extends ElementType> = ElementProps<T>;
export type CheckboxCardDescriptionProps<T extends ElementType> = ElementProps<T>;

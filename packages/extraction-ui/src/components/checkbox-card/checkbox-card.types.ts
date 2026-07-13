import { ComponentProps, ElementType } from 'react';

import { Checkbox } from 'radix-ui';

import { ElementProps } from '../element';

export type CheckboxCardRootProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Checkbox.Root>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type CheckboxCardIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Checkbox.Indicator>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type CheckboxCardContentProps<T extends ElementType> = ElementProps<T>;

export type CheckboxCardLabelProps<T extends ElementType> = ElementProps<T>;
export type CheckboxCardDescriptionProps<T extends ElementType> = ElementProps<T>;

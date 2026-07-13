import { ComponentProps, ElementType } from 'react';

import { RadioGroup } from 'radix-ui';

import { ElementProps } from '../element';

export type RadioCardRootProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof RadioGroup.Item>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type RadioCardIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof RadioGroup.Indicator>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type RadioCardContentProps<T extends ElementType> = ElementProps<T>;

export type RadioCardLabelProps<T extends ElementType> = ElementProps<T>;
export type RadioCardDescriptionProps<T extends ElementType> = ElementProps<T>;

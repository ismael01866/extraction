import { ComponentProps, ElementType } from 'react';

import { RadioGroup } from 'radix-ui';

import { ElementProps } from '../element';

export type RadioItemProps<T extends ElementType> = ElementProps<T>;

export type RadioControlProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof RadioGroup.Item>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type RadioIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof RadioGroup.Indicator>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type RadioLabelProps<T extends ElementType> = ElementProps<T>;

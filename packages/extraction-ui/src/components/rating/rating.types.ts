import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as RadioGroup from '@radix-ui/react-radio-group';

export type RatingProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof RadioGroup.Root>,
    'as' | 'asChild' | 'className' | 'children' | 'value' | 'defaultValue' | 'onValueChange'
  > & {
    readOnly?: boolean;
    defaultValue?: number;
    value?: number;
    onValueChange?: (value: number) => void;
  };

export type RatingItemProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof RadioGroup.Item>,
    'as' | 'asChild' | 'className' | 'children' | 'value'
  > & {
    value: number;
  };

export type RatingIconProps<T extends ElementType> = ElementProps<T>;

export type RatingContextValue = {
  readOnly: boolean;
  activeValue: number;
  hoveredValue: number | null;
  setHoveredValue: (value: number | null) => void;
};

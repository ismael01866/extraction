import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as RadioGroup from '@radix-ui/react-radio-group';

export type RatingProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof RadioGroup.Root>, 'as' | 'asChild' | 'className' | 'children'> & {
    count?: number;
    readOnly?: boolean;
    single?: boolean;
  };

export type RatingControlProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof RadioGroup.Item>, 'as' | 'asChild' | 'className' | 'children'>;

export type RatingIndicatorProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof RadioGroup.Indicator>, 'as' | 'asChild' | 'className' | 'children'>;

export type RatingContextValue = {
  activeValue?: string | null;
  hoveredValue?: string | null;
  readOnly: boolean;
  single: boolean;
  setHoveredValue: (value?: string | null) => void;
};

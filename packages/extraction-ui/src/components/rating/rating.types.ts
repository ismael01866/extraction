import React, { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as RadioGroup from '@radix-ui/react-radio-group';

export type RatingProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof RadioGroup.Root>, 'as' | 'asChild' | 'className' | 'children'> & {
    count?: number;
    single?: boolean;
    fractions?: number;
    readOnly?: boolean;
  }
>;

export type RatingControlProps<T extends React.ElementType = 'button'> = MergeElementProps<
  ElementProps<T>,
  Omit<RadioGroup.RadioGroupItemProps, 'as' | 'asChild' | 'value'> & {
    value?: string;
  }
>;

export type RatingIndicatorProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof RadioGroup.Indicator>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type RatingContextValue = {
  activeValue?: string | null;
  setActiveValue: (value?: string) => void;
  hoveredValue?: string | null;
  setHoveredValue: React.Dispatch<React.SetStateAction<string | null>>;
  single: boolean;
  fractions?: number;
  readOnly: boolean;
};

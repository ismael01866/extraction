import React, { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as RadioGroup from '@radix-ui/react-radio-group';

export type SegmentedControlItemDefinition =
  | string
  | {
      value: string;
      label: React.ReactNode;
    };

export type SegmentedControlProps<T extends ElementType = 'div'> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof RadioGroup.Root>, 'as' | 'asChild' | 'className' | 'children'> & {
    orientation?: 'horizontal' | 'vertical';
    items?: SegmentedControlItemDefinition[];
    readOnly?: boolean;
  }
>;

export type SegmentedControlItemProps<T extends React.ElementType = 'button'> = MergeElementProps<
  ElementProps<T>,
  Omit<RadioGroup.RadioGroupItemProps, 'as' | 'asChild' | 'value'> & {
    value: string;
  }
>;

export type SegmentedControlItemsProps = Omit<SegmentedControlItemProps, 'value' | 'children'> & {
  items: SegmentedControlItemDefinition[];
};

export type SegmentedControlIndicatorProps<T extends ElementType = 'div'> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof RadioGroup.Indicator>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type SegmentedControlIndicatorState = React.CSSProperties;

export type SegmentedControlContextValue = {
  activeValue?: string | null;
  setActiveValue: (value: string) => void;
  orientation: 'horizontal' | 'vertical';
  indicator: SegmentedControlIndicatorState;
  ready: boolean;
  itemRefs: React.RefObject<Record<string, HTMLElement | null>>;
  measure: () => void;
  readOnly: boolean;
};

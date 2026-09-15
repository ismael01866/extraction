import {
  SegmentedControlIndicator,
  SegmentedControlItem,
  SegmentedControlRoot,
} from './segmented-control';

export type {
  SegmentedControlContextValue,
  SegmentedControlIndicatorProps,
  SegmentedControlItemProps,
  SegmentedControlProps,
} from './segmented-control.types';

export const SegmentedControl = Object.assign(SegmentedControlRoot, {
  Item: SegmentedControlItem,
  Indicator: SegmentedControlIndicator,
});

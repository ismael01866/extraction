import React from 'react';

import { SegmentedControlItem, SegmentedControlItems } from './segmented-control';
import {
  SegmentedControlItemProps,
  SegmentedControlItemsProps,
  SegmentedControlProps,
} from './segmented-control.types';

export function getFirstItemValue(
  items: SegmentedControlProps['items'],
  children: React.ReactNode,
) {
  if (items?.length) {
    const first = items[0];
    return typeof first === 'string' ? first : first.value;
  }

  let found: string | undefined;

  React.Children.forEach(children, (child) => {
    if (found !== undefined || !React.isValidElement(child)) return;

    if (child.type === SegmentedControlItem) {
      found = String((child.props as SegmentedControlItemProps).value);
      return;
    }

    if (child.type === SegmentedControlItems) {
      const childItems = (child.props as SegmentedControlItemsProps).items;
      if (childItems?.length) {
        const first = childItems[0];
        found = typeof first === 'string' ? first : first.value;
      }
    }
  });

  return found;
}

import { ElementType } from 'react';

import { ElementProps } from '../element';

export type StickyProps<T extends ElementType> = ElementProps<T> & {
  onStuckChange?: (stuck: boolean) => void;
};

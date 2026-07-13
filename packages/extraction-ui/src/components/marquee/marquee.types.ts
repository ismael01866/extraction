import { ElementType } from 'react';

import { ElementProps } from '../element';

export type MarqueeProps<T extends ElementType> = ElementProps<T> & {
  orientation?: 'horizontal' | 'vertical';
};
export type MarqueeTrackProps<T extends ElementType> = ElementProps<T>;
export type MarqueeItemProps<T extends ElementType> = ElementProps<T>;

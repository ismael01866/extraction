import { ElementType } from 'react';

import { ElementProps } from '../element';

export type CounterProps<T extends ElementType> = ElementProps<T> & {
  value: number;
  delay?: number;
  duration?: number;
  decimals?: number;
  initialValue?: number;
  formatter?: (value: number) => string;
};

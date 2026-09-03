import { ElementType } from 'react';

import { ElementProps } from '../element';

export type SimpleGridProps<T extends ElementType> = ElementProps<T> & {
  fit?: 'auto-fit' | 'auto-fill' | number;
  minChildWidth?: string;
};

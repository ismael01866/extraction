import { ElementType } from 'react';

import { ElementProps } from '../element';

export type SimpleGridProps<T extends ElementType> = ElementProps<T> & {
  minChildWidth?: string;
};

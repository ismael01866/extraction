import { ElementType } from 'react';

import { ElementProps } from '../element';

export type SkeletonProps<T extends ElementType> = ElementProps<T> & {
  loading?: boolean;
};

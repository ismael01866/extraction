import { ElementType } from 'react';

import { ElementProps } from '../element';

export type GroupProps<T extends ElementType> = ElementProps<T> & {
  orientation?: 'horizontal' | 'vertical';
};

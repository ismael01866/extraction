import { ElementType } from 'react';

import { ElementProps } from '../element';

export type AvatarGroupProps<T extends ElementType> = ElementProps<T> & {
  orientation?: 'horizontal' | 'vertical';
};

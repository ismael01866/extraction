import { ElementType, ReactNode } from 'react';

import { ElementProps } from '../element';

export type FlexProps<T extends ElementType> = ElementProps<T> & {
  separator?: ReactNode;
};

import { ElementType, ReactNode } from 'react';

import { FlexProps } from '../flex';

export type StackProps<T extends ElementType> = FlexProps<T> & {
  separator?: ReactNode;
};

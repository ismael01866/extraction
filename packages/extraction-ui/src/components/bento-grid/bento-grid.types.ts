import { ElementType } from 'react';

import { ElementProps } from '../element';

export type BentoGridProps<T extends ElementType> = ElementProps<T> & {
  minChildWidth?: string;
};

export type BentoGridColProps<T extends ElementType> = ElementProps<T>;
export type BentoGridRowProps<T extends ElementType> = ElementProps<T>;
export type BentoGridItemProps<T extends ElementType> = ElementProps<T>;

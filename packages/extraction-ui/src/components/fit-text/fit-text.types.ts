import { ElementType, RefObject } from 'react';

import { ElementProps } from '../element';

export type FitTextProps<T extends ElementType> = ElementProps<T>;
export type FitTextContentProps<T extends ElementType> = ElementProps<T>;
export type FitTextTargetProps<T extends ElementType> = ElementProps<T>;

export type FitTextContextValue = {
  textRef: RefObject<HTMLElement | null> | null;
  dimensions: { width: number; height: number };
  hasMeasured: boolean;
};

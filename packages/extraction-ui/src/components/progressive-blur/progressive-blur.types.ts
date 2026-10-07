import { ElementType } from 'react';

import { ElementProps } from '../element';

export type ProgressiveBlurProps<T extends ElementType> = ElementProps<T> & {
  side?: 'top' | 'bottom' | 'left' | 'right';
  layers?: number;
};

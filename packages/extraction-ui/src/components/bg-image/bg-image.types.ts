import { ElementType } from 'react';

import { ElementProps } from '../element';

export type BgImageProps<T extends ElementType> = ElementProps<T> & {
  src?: string;
};

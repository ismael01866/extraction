import { ElementType } from 'react';

import { ElementProps } from '../element';
import { IconProps } from '../icon';

export type ListProps<T extends ElementType> = ElementProps<T>;
export type ListItemProps<T extends ElementType> = ElementProps<T>;
export type ListIndicatorProps<T extends ElementType> = IconProps<T>;

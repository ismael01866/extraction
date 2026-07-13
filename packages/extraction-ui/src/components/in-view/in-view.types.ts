import React, { ElementType, ReactNode } from 'react';

import { UseInViewOptions } from '../../hooks';
import { ElementProps } from '../element';

export type InViewProps<T extends ElementType> = ElementProps<T> &
  UseInViewOptions & {
    children?: ReactNode | ((props: { isInView: boolean }) => ReactNode);
    activeClassName?: React.HTMLAttributes<HTMLElement>['className'];
    inactiveClassName?: React.HTMLAttributes<HTMLElement>['className'];
  };

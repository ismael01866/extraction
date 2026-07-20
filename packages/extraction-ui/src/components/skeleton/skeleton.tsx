import React, { ElementType } from 'react';

import './skeleton.css';

import { cn } from '../../utils';
import { Element } from '../element';
import { SkeletonProps } from './skeleton.types';

export const Skeleton = <T extends ElementType = 'div'>(props: SkeletonProps<T>) => {
  const { as = 'div', children, loading = true, ...rest } = props;

  const classes = cn('ex-skeleton', loading && 'ex-skeleton-loading');

  return (
    <Element as={as as ElementType<any>} cssClassName={classes} {...rest}>
      {children}
    </Element>
  );
};

Skeleton.displayName = 'Skeleton';

'use client';

import React, { ElementType } from 'react';

import './in-view.css';

import { useInView } from '../../hooks';
import { cn } from '../../utils';
import { Element } from '../element';
import { InViewProps } from './in-view.types';

export const InView = <T extends ElementType = 'div'>(props: InViewProps<T>) => {
  const {
    as = 'div',
    children,
    className,
    activeClassName,
    inactiveClassName,
    ...inViewOptions
  } = props;

  const {
    root,
    rootMargin,
    threshold,
    once = false,
    initialInView = false,
    ...rest
  } = inViewOptions;

  const { ref, isInView } = useInView({
    root,
    rootMargin,
    threshold,
    once,
    initialInView,
  });

  const classes = cn(className, isInView ? activeClassName : inactiveClassName);

  const content =
    typeof children === 'function'
      ? (children as (props: { isInView: boolean }) => React.ReactNode)({ isInView })
      : children;

  return (
    <Element
      ref={ref}
      as={as as ElementType<any>}
      className={classes}
      cssClassName="ex-in-view"
      {...rest}
    >
      {content}
    </Element>
  );
};

InView.displayName = 'InView';

'use client';

import React, { ElementType } from 'react';

import './sticky.css';

import { Element } from '../element';
import { useStuck } from './sticky.hooks';
import { StickyProps } from './sticky.types';

export const Sticky = <T extends ElementType = 'div'>(props: StickyProps<T>) => {
  const { as = 'div', children, onStuckChange, ...rest } = props;
  const { elRef, sentinelRef } = useStuck<HTMLElement>(onStuckChange);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="ex-sticky-sentinel" />
      <Element as={as as ElementType<any>} cssClassName="ex-sticky" ref={elRef} {...rest}>
        {children}
      </Element>
    </>
  );
};

Sticky.displayName = 'Sticky';

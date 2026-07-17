import React, { ElementType } from 'react';

import './scroll-area.css';

import { cn } from '../../utils';
import { Element } from '../element';
import {
  ScrollAreaContentProps,
  ScrollAreaCornerProps,
  ScrollAreaProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from './scroll-area.types';

import * as ScrollArea from '@radix-ui/react-scroll-area';

export const ScrollAreaRoot = <T extends ElementType = 'div'>(props: ScrollAreaProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ScrollArea.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-scroll-area">
        {children}
      </Element>
    </ScrollArea.Root>
  );
};

ScrollAreaRoot.displayName = 'ScrollArea';

export const ScrollAreaViewport = (props: ScrollAreaViewportProps) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-scroll-area-viewport', className);

  return (
    <ScrollArea.Viewport className={classes} {...rest}>
      {children}
    </ScrollArea.Viewport>
  );
};

ScrollAreaViewport.displayName = 'ScrollArea.Viewport';

export const ScrollAreaScrollbar = <T extends ElementType = 'div'>(
  props: ScrollAreaScrollbarProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ScrollArea.Scrollbar asChild {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-scroll-area-scrollbar"
      >
        {children}
      </Element>
    </ScrollArea.Scrollbar>
  );
};

ScrollAreaScrollbar.displayName = 'ScrollArea.Scrollbar';

export const ScrollAreaThumb = <T extends ElementType = 'div'>(props: ScrollAreaThumbProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ScrollArea.Thumb asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-scroll-area-thumb">
        {children}
      </Element>
    </ScrollArea.Thumb>
  );
};

ScrollAreaThumb.displayName = 'ScrollArea.Thumb';

export const ScrollAreaCorner = <T extends ElementType = 'div'>(
  props: ScrollAreaCornerProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ScrollArea.Corner asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-scroll-area-corner">
        {children}
      </Element>
    </ScrollArea.Corner>
  );
};

ScrollAreaCorner.displayName = 'ScrollArea.Corner';

export const ScrollAreaContent = <T extends ElementType = 'div'>(
  props: ScrollAreaContentProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-scroll-area-content" {...rest}>
      {children}
    </Element>
  );
};

ScrollAreaContent.displayName = 'ScrollArea.Content';

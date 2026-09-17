'use client';

import React, { ElementType, useContext, useRef } from 'react';

import './marquee.css';

import { Element } from '../element';
import { MarqueeContext } from './marquee.context';
import {
  MarqueeContextValue,
  MarqueeItemProps,
  MarqueeProps,
  MarqueeTrackProps,
} from './marquee.types';
import { useMarqueeDrag } from './use-marquee-drag';

export const MarqueeRoot = <T extends ElementType = 'div'>(props: MarqueeProps<T>) => {
  const { as = 'div', children, draggable = false, orientation = 'horizontal', ...rest } = props;

  const context: MarqueeContextValue = React.useMemo(
    () => ({
      draggable,
      orientation,
    }),
    [draggable, orientation],
  );

  return (
    <MarqueeContext.Provider value={context}>
      <Element
        as={as as ElementType<any>}
        cssClassName="ex-marquee"
        data-orientation={orientation}
        {...rest}
      >
        {children}
      </Element>
    </MarqueeContext.Provider>
  );
};

MarqueeRoot.displayName = 'Marquee';
export const MarqueeTrack = <T extends ElementType = 'div'>(props: MarqueeTrackProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  const context = useContext(MarqueeContext);

  if (!context) {
    throw new Error('Marquee.Track must be used within Marquee');
  }

  const { draggable, orientation } = context;

  const trackRef = useRef<HTMLDivElement>(null);

  const dragHandlers = useMarqueeDrag(trackRef, {
    orientation,
    enabled: draggable,
  });

  const duplicatedChildren = React.Children.map(children, (child, index) =>
    React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<any>, {
          'aria-hidden': true,
          key: child.key ? `${child.key}-duplicate` : `marquee-dup-${index}`,
        })
      : child,
  );

  const handleDragStart = (e: React.DragEvent) => {
    const target = e.target;

    if (target instanceof globalThis.Element && target.closest('img, a')) {
      e.preventDefault();
    }
  };

  return (
    <Element
      ref={trackRef}
      as={as as ElementType<any>}
      cssClassName="ex-marquee-track"
      data-draggable={draggable || undefined}
      onDragStart={handleDragStart}
      {...(draggable ? dragHandlers : {})}
      {...rest}
    >
      {children}
      {duplicatedChildren}
    </Element>
  );
};

MarqueeTrack.displayName = 'Marquee.Track';

export const MarqueeItem = <T extends ElementType = 'div'>(props: MarqueeItemProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-marquee-item" {...rest}>
      {children}
    </Element>
  );
};

MarqueeItem.displayName = 'Marquee.Item';

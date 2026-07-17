import React, { ElementType } from 'react';

import './marquee.css';

import { Element } from '../element';
import { MarqueeItemProps, MarqueeProps, MarqueeTrackProps } from './marquee.types';

export const MarqueeRoot = <T extends ElementType = 'div'>(props: MarqueeProps<T>) => {
  const { as = 'div', children, orientation = 'horizontal', ...rest } = props;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-marquee"
      data-orientation={orientation}
      {...rest}
    >
      {children}
    </Element>
  );
};

MarqueeRoot.displayName = 'Marquee';

export const MarqueeTrack = <T extends ElementType = 'div'>(props: MarqueeTrackProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  const duplicatedChildren = React.Children.map(children, (child, index) =>
    React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<any>, {
          'aria-hidden': true,
          key: child.key ? `${child.key}-duplicate` : `marquee-dup-${index}`,
        })
      : child,
  );

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-marquee-track" {...rest}>
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

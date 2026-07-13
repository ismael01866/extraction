import React, { ElementType } from 'react';

import { Element } from '../element';
import { BadgeProps } from './badge.types';

export const Badge = <T extends ElementType = 'div'>(props: BadgeProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-badge" {...rest}>
      {children}
    </Element>
  );
};

Badge.displayName = 'Badge';

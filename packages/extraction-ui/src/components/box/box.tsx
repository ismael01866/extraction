import React, { ElementType } from 'react';

import './box.css';

import { Element } from '../element';
import { BoxProps } from './box.types';

export const Box = <T extends ElementType = 'div'>(props: BoxProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-box" {...rest}>
      {children}
    </Element>
  );
};

Box.displayName = 'Box';

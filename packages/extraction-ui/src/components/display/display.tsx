import React, { ElementType } from 'react';

import './display.css';

import { Element } from '../element';
import { DisplayProps } from './display.types';

export const Display = <T extends ElementType = 'p'>(props: DisplayProps<T>) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-display" {...rest}>
      {children}
    </Element>
  );
};

Display.displayName = 'Display';

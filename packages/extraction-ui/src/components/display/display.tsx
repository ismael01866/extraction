import React, { ElementType } from 'react';

import { Element } from '../element';
import { DisplayProps } from './display.types';

export const Display = <T extends ElementType = 'h1'>(props: DisplayProps<T>) => {
  const { as = 'h1', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-display" {...rest}>
      {children}
    </Element>
  );
};

Display.displayName = 'Display';

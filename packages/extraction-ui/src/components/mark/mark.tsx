import React, { ElementType } from 'react';

import './mark.css';

import { Element } from '../element';
import { MarkProps } from './mark.types';

export const Mark = <T extends ElementType = 'mark'>(props: MarkProps<T>) => {
  const { as = 'mark', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-mark" {...rest}>
      {children}
    </Element>
  );
};

Mark.displayName = 'Mark';

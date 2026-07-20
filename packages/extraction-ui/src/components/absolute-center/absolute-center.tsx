import React, { ElementType } from 'react';

import './absolute-center.css';

import { Element } from '../element';
import { AbsoluteCenterProps } from './absolute-center.types';

export const AbsoluteCenter = <T extends ElementType = 'div'>(props: AbsoluteCenterProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-absolute-center" {...rest}>
      {children}
    </Element>
  );
};

AbsoluteCenter.displayName = 'AbsoluteCenter';

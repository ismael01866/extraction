import React, { ElementType } from 'react';

import './flex.css';

import { Element } from '../element';
import { FlexProps } from './flex.types';

export const Flex = <T extends ElementType = 'div'>(props: FlexProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-flex" {...rest}>
      {children}
    </Element>
  );
};

Flex.displayName = 'Flex';

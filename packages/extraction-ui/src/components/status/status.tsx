import React, { ElementType } from 'react';

import './status.css';

import { Element } from '../element';
import { StatusProps } from './status.types';

export const Status = <T extends ElementType = 'div'>(props: StatusProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-status" {...rest}>
      {children}
    </Element>
  );
};

Status.displayName = 'Status';

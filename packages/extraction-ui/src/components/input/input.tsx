import React, { ElementType } from 'react';

import { Element } from '../element';
import { InputProps } from './input.types';

export const Input = <T extends ElementType = 'input'>(props: InputProps<T>) => {
  const { as = 'input', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-input" {...rest}>
      {children}
    </Element>
  );
};

Input.displayName = 'Input';

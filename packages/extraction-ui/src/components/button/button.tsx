import React, { ElementType } from 'react';

import { Element } from '../element';
import { ButtonProps } from './button.types';

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as = 'button', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-button" {...rest}>
      {children}
    </Element>
  );
};

Button.displayName = 'Button';

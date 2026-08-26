import React, { ElementType } from 'react';

import './input.css';

import { Element } from '../element';
import { InputFieldProps, InputProps } from './input.types';

export const InputRoot = <T extends ElementType = 'input'>(props: InputProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-input" {...rest}>
      {children}
    </Element>
  );
};

InputRoot.displayName = 'Input';

export const InputField = <T extends ElementType = 'input'>(props: InputFieldProps<T>) => {
  const { as = 'input', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-input-field" {...rest}>
      {children}
    </Element>
  );
};

InputField.displayName = 'Input.Field';

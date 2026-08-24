import React, { ElementType } from 'react';

import './textarea.css';

import { Element } from '../element';
import { TextareaFieldProps, TextareaProps } from './textarea.types';

export const TextareaRoot = <T extends ElementType = 'textarea'>(props: TextareaProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-textarea" {...rest}>
      {children}
    </Element>
  );
};

TextareaRoot.displayName = 'Textarea';

export const TextareaField = <T extends ElementType = 'textarea'>(props: TextareaFieldProps<T>) => {
  const { as = 'textarea', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-textarea-field" {...rest}>
      {children}
    </Element>
  );
};

TextareaField.displayName = 'Textarea.Field';

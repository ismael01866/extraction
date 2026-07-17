import React, { ElementType } from 'react';

import './textarea.css';

import { Element } from '../element';
import { TextareaProps } from './textarea.types';

export const Textarea = <T extends ElementType = 'textarea'>(props: TextareaProps<T>) => {
  const { as = 'textarea', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-textarea" {...rest}>
      {children}
    </Element>
  );
};

Textarea.displayName = 'Textarea';

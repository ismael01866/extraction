import React, { ElementType } from 'react';

import './text.css';

import { Element } from '../element';
import { TextProps } from './text.types';

export const Text = <T extends ElementType = 'span'>(props: TextProps<T>) => {
  const { as = 'span', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-text" {...rest}>
      {children}
    </Element>
  );
};

Text.displayName = 'Text';

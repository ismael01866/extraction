import React, { ElementType } from 'react';

import './highlight.css';

import { Element } from '../element';
import { HighlightProps } from './highlight.types';

export const Highlight = <T extends ElementType = 'mark'>(props: HighlightProps<T>) => {
  const { as = 'mark', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-highlight" {...rest}>
      {children}
    </Element>
  );
};

Highlight.displayName = 'Highlight';

import React, { ElementType } from 'react';

import './prose.css';

import { Element } from '../element';
import { ProseProps } from './prose.types';

export const Prose = <T extends ElementType = 'div'>(props: ProseProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-prose prose" {...rest}>
      {children}
    </Element>
  );
};

Prose.displayName = 'Prose';

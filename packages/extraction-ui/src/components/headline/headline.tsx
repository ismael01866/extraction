import React, { ElementType } from 'react';

import './headline.css';

import { Element } from '../element';
import { HeadlineProps } from './headline.types';

export const Headline = <T extends ElementType = 'p'>(props: HeadlineProps<T>) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-headline" {...rest}>
      {children}
    </Element>
  );
};

Headline.displayName = 'Headline';

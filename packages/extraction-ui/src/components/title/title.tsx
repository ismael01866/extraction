import React, { ElementType } from 'react';

import './title.css';

import { Element } from '../element';
import { TitleProps } from './title.types';

export const Title = <T extends ElementType = 'p'>(props: TitleProps<T>) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-title" {...rest}>
      {children}
    </Element>
  );
};

Title.displayName = 'Title';

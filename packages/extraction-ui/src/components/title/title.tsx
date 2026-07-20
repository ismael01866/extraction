import React, { ElementType } from 'react';

import './title.css';

import { Element } from '../element';
import { TitleProps } from './title.types';

export const Title = <T extends ElementType = 'h4'>(props: TitleProps<T>) => {
  const { as = 'h4', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-title" {...rest}>
      {children}
    </Element>
  );
};

Title.displayName = 'Title';

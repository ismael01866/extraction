import React, { ElementType } from 'react';

import './description.css';

import { Element } from '../element';
import { DescriptionProps } from './description.types';

export const Description = <T extends ElementType = 'p'>(props: DescriptionProps<T>) => {
  const { as = 'p', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-description" {...rest}>
      {children}
    </Element>
  );
};

Description.displayName = 'Description';

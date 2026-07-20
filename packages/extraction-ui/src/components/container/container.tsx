import React, { ElementType } from 'react';

import './container.css';

import { Element } from '../element';
import { ContainerProps } from './container.types';

export const Container = <T extends ElementType = 'div'>(props: ContainerProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-container" {...rest}>
      {children}
    </Element>
  );
};

Container.displayName = 'Container';

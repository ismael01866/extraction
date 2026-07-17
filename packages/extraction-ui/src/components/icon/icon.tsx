import React, { ElementType } from 'react';

import './icon.css';

import { Element } from '../element';
import { IconProps } from './icon.types';

export const Icon = <T extends ElementType = 'span'>(props: IconProps<T>) => {
  const { as = 'span', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-icon" {...rest}>
      {children}
    </Element>
  );
};

Icon.displayName = 'Icon';

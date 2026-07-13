import React, { ElementType } from 'react';

import { Element } from '../element';
import { LogoProps } from './logo.types';

export const Logo = <T extends ElementType = 'img'>(props: LogoProps<T>) => {
  const { as = 'img', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-logo" {...rest}>
      {children}
    </Element>
  );
};

Logo.displayName = 'Logo';

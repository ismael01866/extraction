import React, { ElementType } from 'react';

import { Element } from '../element';
import { CenterProps } from './center.types';

export const Center = <T extends ElementType = 'div'>(props: CenterProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-center" {...rest}>
      {children}
    </Element>
  );
};

Center.displayName = 'Center';

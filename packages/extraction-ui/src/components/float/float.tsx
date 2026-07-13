import React, { ElementType } from 'react';

import { Element } from '../element';
import { FloatProps } from './float.types';

export const Float = <T extends ElementType = 'div'>(props: FloatProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-float" {...rest}>
      {children}
    </Element>
  );
};

Float.displayName = 'Float';

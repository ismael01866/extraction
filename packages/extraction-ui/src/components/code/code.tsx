import React, { ElementType } from 'react';

import { Element } from '../element';
import { CodeProps } from './code.types';

export const Code = <T extends ElementType = 'code'>(props: CodeProps<T>) => {
  const { as = 'code', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-code" {...rest}>
      {children}
    </Element>
  );
};

Code.displayName = 'Code';

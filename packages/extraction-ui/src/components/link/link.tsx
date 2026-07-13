import React, { ElementType } from 'react';

import { Element } from '../element';
import { LinkProps } from './link.types';

export const Link = <T extends ElementType = 'a'>(props: LinkProps<T>) => {
  const { as = 'a', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-link" {...rest}>
      {children}
    </Element>
  );
};

Link.displayName = 'Link';

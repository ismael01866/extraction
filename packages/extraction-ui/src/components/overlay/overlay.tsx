import React, { ElementType } from 'react';

import { Element } from '../element';
import { OverlayProps } from './overlay.types';

export const Overlay = <T extends ElementType = 'div'>(props: OverlayProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-overlay" {...rest}>
      {children}
    </Element>
  );
};

Overlay.displayName = 'Overlay';

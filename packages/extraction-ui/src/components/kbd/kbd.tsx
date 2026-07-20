import React, { ElementType } from 'react';

import './kbd.css';

import { Element } from '../element';
import { KbdProps } from './kbd.types';

export const Kbd = <T extends ElementType = 'div'>(props: KbdProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-kbd" {...rest}>
      {children}
    </Element>
  );
};

Kbd.displayName = 'Kbd';

import React, { ElementType } from 'react';

import './nav-button.css';

import { Element } from '../element';
import { NavButtonProps } from './nav-button.types';

export const NavButton = <T extends ElementType = 'button'>(props: NavButtonProps<T>) => {
  const { as = 'button', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-nav-button" {...rest}>
      {children}
    </Element>
  );
};

NavButton.displayName = 'NavButton';

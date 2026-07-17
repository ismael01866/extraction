import React, { ElementType } from 'react';

import './nav-link.css';

import { Element } from '../element';
import { NavLinkProps } from './nav-link.types';

export const NavLink = <T extends ElementType = 'a'>(props: NavLinkProps<T>) => {
  const { as = 'a', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-nav-link" {...rest}>
      {children}
    </Element>
  );
};

NavLink.displayName = 'NavLink';

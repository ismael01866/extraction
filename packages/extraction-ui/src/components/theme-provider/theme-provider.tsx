import React, { ElementType } from 'react';

import './theme-provider.css';

import { Element } from '../element';
import { ThemeProviderProps } from './theme-provider.types';

export const ThemeProvider = <T extends ElementType = 'div'>(props: ThemeProviderProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-theme-provider" {...rest}>
      {children}
    </Element>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

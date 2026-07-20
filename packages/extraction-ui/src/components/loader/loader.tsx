import React, { ElementType } from 'react';

import './loader.css';

import { Element } from '../element';
import { LoaderProps } from './loader.types';

export const Loader = <T extends ElementType = 'span'>(props: LoaderProps<T>) => {
  const { as = 'span', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-loader" {...rest}>
      {children ?? (
        <svg className="ex-loader-icon" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="7" />
        </svg>
      )}
    </Element>
  );
};

Loader.displayName = 'Loader';

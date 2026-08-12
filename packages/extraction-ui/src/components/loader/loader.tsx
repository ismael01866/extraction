import React, { ElementType } from 'react';

import './loader.css';

import { Element } from '../element';
import { LoaderProps } from './loader.types';

export const Loader = <T extends ElementType = 'span'>(props: LoaderProps<T>) => {
  const { as = 'span', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-loader" {...rest}>
      {children ?? (
        <svg className="ex-loader-svg" viewBox="0 0 24 24">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
      )}
    </Element>
  );
};

Loader.displayName = 'Loader';

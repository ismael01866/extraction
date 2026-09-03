import React, { ElementType } from 'react';

import './simple-grid.css';

import { Element } from '../element';
import { SimpleGridProps } from './simple-grid.types';

export const SimpleGrid = <T extends ElementType = 'div'>(props: SimpleGridProps<T>) => {
  const { as = 'div', children, minChildWidth, fit, style, ...rest } = props;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-simple-grid"
      style={{
        ...(fit && { '--ex-simple-grid-fit': fit }),
        ...(minChildWidth && { '--ex-simple-grid-min-child-width': minChildWidth }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Element>
  );
};

SimpleGrid.displayName = 'SimpleGrid';

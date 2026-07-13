import React, { ElementType } from 'react';

import { Element } from '../element';
import { GridProps } from './grid.types';

export const Grid = <T extends ElementType = 'div'>(props: GridProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-grid" {...rest}>
      {children}
    </Element>
  );
};

Grid.displayName = 'Grid';

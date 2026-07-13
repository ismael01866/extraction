import React, { ElementType } from 'react';

import { Element } from '../element';
import type { DesignGridProps } from './design-grid.types';

export const DesignGrid = <T extends ElementType = 'div'>(props: DesignGridProps<T>) => {
  const { as = 'div', className = '', ...rest } = props;

  let cols = 12;
  let rows;

  const colsMatch = className.match(/grid-cols-(\d+)/);
  if (colsMatch) cols = parseInt(colsMatch[1], 10);

  const rowsMatch = className.match(/grid-rows-(\d+)/);
  if (rowsMatch) rows = parseInt(rowsMatch[1], 10);

  const totalCells = cols * (rows || 1);

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-design-grid"
      className={className}
      {...rest}
    >
      {Array.from({ length: totalCells }).map((_, index) => (
        <div key={index} className="ex-design-grid-cell" aria-hidden />
      ))}
    </Element>
  );
};

DesignGrid.displayName = 'DesignGrid';

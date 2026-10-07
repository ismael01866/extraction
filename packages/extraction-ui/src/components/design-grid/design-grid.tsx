import React, { ElementType } from 'react';

import './design-grid.css';

import { Element } from '../element';
import type { DesignGridProps } from './design-grid.types';

export const DesignGrid = <T extends ElementType = 'div'>(props: DesignGridProps<T>) => {
  const { as = 'div', className = '', ...rest } = props;

  let cols = 12;
  let rows;

  const colsMatch = /grid-cols-(\d+)/.exec(className);
  if (colsMatch) cols = Number.parseInt(colsMatch[1], 10);

  const rowsMatch = /grid-rows-(\d+)/.exec(className);
  if (rowsMatch) rows = Number.parseInt(rowsMatch[1], 10);

  const totalCells = cols * (rows || 1);

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-design-grid"
      className={className}
      {...rest}
    >
      {Array.from({ length: totalCells }).map((_, index) => (
        <div
          key={`cell-${Math.floor(index / cols)}-${index % cols}`}
          className="ex-design-grid-cell"
          aria-hidden
        />
      ))}
    </Element>
  );
};

DesignGrid.displayName = 'DesignGrid';

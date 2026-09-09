import React, { ElementType } from 'react';

import './bento-grid.css';

import { Element } from '../element';
import {
  BentoGridColProps,
  BentoGridItemProps,
  BentoGridProps,
  BentoGridRowProps,
} from './bento-grid.types';

export const BentoGridRoot = <T extends ElementType = 'div'>(props: BentoGridProps<T>) => {
  const { as = 'div', children, minChildWidth, style, ...rest } = props;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-bento-grid"
      style={{
        ...(minChildWidth && { '--ex-bento-grid-min-child-width': minChildWidth }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Element>
  );
};

BentoGridRoot.displayName = 'BentoGrid';

export const BentoGridCol = <T extends ElementType = 'div'>(props: BentoGridColProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-bento-grid-col" {...rest}>
      {children}
    </Element>
  );
};

BentoGridCol.displayName = 'BentoGrid.Col';

export const BentoGridRow = <T extends ElementType = 'div'>(props: BentoGridRowProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-bento-grid-row" {...rest}>
      {children}
    </Element>
  );
};

BentoGridRow.displayName = 'BentoGrid.Row';

export const BentoGridItem = <T extends ElementType = 'div'>(props: BentoGridItemProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-bento-grid-item" {...rest}>
      {children}
    </Element>
  );
};

BentoGridItem.displayName = 'BentoGrid.Item';

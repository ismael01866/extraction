import React, { ElementType } from 'react';

import './color-swatch.css';

import { Element } from '../element';
import { ColorSwatchProps } from './color-swatch.types';

export const ColorSwatch = <T extends ElementType = 'div'>(props: ColorSwatchProps<T>) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-color-swatch" {...rest}>
      {children}
    </Element>
  );
};

ColorSwatch.displayName = 'ColorSwatch';

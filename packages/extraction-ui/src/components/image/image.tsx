import React, { ElementType } from 'react';

import './image.css';

import { Element } from '../element';
import { ImageProps } from './image.types';

export const Image = <T extends ElementType = 'img'>(props: ImageProps<T>) => {
  const { as = 'img', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-image" {...rest}>
      {children}
    </Element>
  );
};

Image.displayName = 'Image';

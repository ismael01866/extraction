import React, { ElementType } from 'react';

import './bg-image.css';

import { Element } from '../element';
import { BgImageProps } from './bg-image.types';

export const BgImage = <T extends ElementType = 'div'>(props: BgImageProps<T>) => {
  const { as = 'div', children, style = {}, src, ...rest } = props;

  const combinedStyle = src ? { ...style, backgroundImage: `url('${src}')` } : style;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName={`ex-bg-image`}
      style={combinedStyle}
      {...rest}
    >
      {children}
    </Element>
  );
};

BgImage.displayName = 'BgImage';

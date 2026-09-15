import React, { ElementType } from 'react';

import './noise-overlay.css';

import { Element } from '../element';
import noisePng from './noise-overlay.png';
import { NoiseOverlayProps } from './noise-overlay.types';

export const NoiseOverlay = <T extends ElementType = 'div'>(props: NoiseOverlayProps<T>) => {
  const { as = 'div', children, style, ...rest } = props;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-noise-overlay"
      style={{ '--ex-bg-image-url': `url(${noisePng})`, ...style }}
      {...rest}
    >
      {children}
    </Element>
  );
};

NoiseOverlay.displayName = 'NoiseOverlay';

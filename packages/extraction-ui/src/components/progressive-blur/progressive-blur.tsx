import React, { ElementType } from 'react';

import './progressive-blur.css';

import { Element } from '../element';
import { ProgressiveBlurProps } from './progressive-blur.types';

export const ProgressiveBlur = <T extends ElementType = 'div'>(props: ProgressiveBlurProps<T>) => {
  const { as = 'div', side = 'bottom', layers = 6, style, ...rest } = props;

  return (
    <Element
      as={as as ElementType<any>}
      aria-hidden
      cssClassName="ex-progressive-blur"
      data-side={side}
      style={{
        ...(layers && { '--ex-layers': layers }),
        ...style,
      }}
      {...rest}
    >
      {Array.from({ length: layers }, (_, i) => (
        <div key={i} style={{ '--ex-i': i } as React.CSSProperties} />
      ))}
    </Element>
  );
};

ProgressiveBlur.displayName = 'ProgressiveBlur';

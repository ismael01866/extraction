import React, { ElementType } from 'react';

import './icon-button.css';

import { Element } from '../element';
import { IconButtonProps } from './icon-button.types';

export const IconButton = <T extends ElementType = 'button'>(props: IconButtonProps<T>) => {
  const { as = 'button', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-icon-button" {...rest}>
      {children}
    </Element>
  );
};

IconButton.displayName = 'IconButton';

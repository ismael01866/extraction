import React, { ElementType } from 'react';

import './close-button.css';

import { Element } from '../element';
import { CloseButtonProps } from './close-button.types';

export const CloseButton = <T extends ElementType = 'button'>(props: CloseButtonProps<T>) => {
  const { as = 'button', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-close-button" {...rest}>
      {children ?? (
        <svg className="ex-close-button-svg" viewBox="0 0 24 24">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      )}
    </Element>
  );
};

CloseButton.displayName = 'CloseButton';

import React, { ElementType } from 'react';

import './close-button.css';

import { cn } from '../../utils';
import { Element } from '../element';
import { CloseButtonProps } from './close-button.types';

export const CloseButton = <T extends ElementType = 'button'>(props: CloseButtonProps<T>) => {
  const { as = 'button', children, cssClassName, ...rest } = props;

  const cssClassNames = cn('ex-close-button', cssClassName);

  return (
    <Element as={as as ElementType<any>} cssClassName={cssClassNames} {...rest}>
      {children ?? (
        <svg className="ex-close-icon" viewBox="0 0 24 24">
          <path d="M18 6L6 18" />
          <path d="M6 6L18 18" />
        </svg>
      )}
    </Element>
  );
};

CloseButton.displayName = 'CloseButton';

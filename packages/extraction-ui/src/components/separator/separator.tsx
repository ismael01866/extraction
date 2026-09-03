import React, { ElementType } from 'react';

import './separator.css';

import { Element } from '../element';
import { SeparatorProps } from './separator.types';

import * as Separator from '@radix-ui/react-separator';

export const SeparatorRoot = <T extends ElementType = 'div'>(props: SeparatorProps<T>) => {
  const {
    as = 'div',
    asChild = false,
    children,
    align = 'center',
    orientation = 'horizontal',
    ...rest
  } = props;

  const hasChildren = Boolean(children);

  return (
    <Separator.Root asChild orientation={orientation} {...rest}>
      <Element
        as={as as ElementType<any>}
        asChild={asChild}
        cssClassName="ex-separator"
        data-align={hasChildren ? align : undefined}
        data-has-content={hasChildren || undefined}
      >
        {hasChildren ? (
          <>
            <span className="ex-separator-line" data-orientation={orientation} />
            <span className="ex-separator-content">{children}</span>
            <span className="ex-separator-line" data-orientation={orientation} />
          </>
        ) : (
          children
        )}
      </Element>
    </Separator.Root>
  );
};

SeparatorRoot.displayName = 'Separator';

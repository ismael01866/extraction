import React, { ElementType } from 'react';

import { Separator } from 'radix-ui';

import { Element } from '../element';
import { SeparatorProps } from './separator.types';

export const SeparatorRoot = <T extends ElementType = 'div'>(props: SeparatorProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Separator.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-separator">
        {children}
      </Element>
    </Separator.Root>
  );
};

SeparatorRoot.displayName = 'Separator';

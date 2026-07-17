import React, { ElementType } from 'react';

import { Element } from '../element';
import { ToggleProps } from './toggle.types';

import * as Toggle from '@radix-ui/react-toggle';

export const ToggleRoot = <T extends ElementType = 'div'>(props: ToggleProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Toggle.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-toggle">
        {children}
      </Element>
    </Toggle.Root>
  );
};

ToggleRoot.displayName = 'Toggle';

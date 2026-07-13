import React, { ElementType } from 'react';

import { RadioGroup } from 'radix-ui';

import { Element } from '../element';
import { RadioGroupRootProps } from './radio-group.types';

export const RadioGroupRoot = <T extends ElementType = 'div'>(props: RadioGroupRootProps<T>) => {
  const { asChild = false, children, ...rest } = props;

  return (
    <RadioGroup.Root asChild {...rest}>
      <Element asChild={asChild} cssClassName="ex-radio-group">
        {children}
      </Element>
    </RadioGroup.Root>
  );
};

RadioGroupRoot.displayName = 'RadioGroup';

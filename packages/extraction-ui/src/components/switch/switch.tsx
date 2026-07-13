import React, { ElementType } from 'react';

import { Switch } from 'radix-ui';

import { cn } from '../../utils';
import { Element } from '../element';
import { SwitchProps, SwitchThumbProps } from './switch.types';

export const SwitchRoot = <T extends ElementType = 'button'>(props: SwitchProps<T>) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-switch', className);

  return (
    <Switch.Root className={classes} {...rest}>
      {children}
    </Switch.Root>
  );
};

SwitchRoot.displayName = 'Switch';

export const SwitchThumb = <T extends ElementType = 'span'>(props: SwitchThumbProps<T>) => {
  const { as = 'span', asChild = false, children, ...rest } = props;

  return (
    <Switch.Thumb asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-switch-thumb">
        {children}
      </Element>
    </Switch.Thumb>
  );
};

SwitchThumb.displayName = 'Switch.Thumb';

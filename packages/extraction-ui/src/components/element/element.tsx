import React, { ElementType } from 'react';

import { cn } from '../../utils';
import { ElementProps } from './element.types';

import * as Slot from '@radix-ui/react-slot';

export const Element = <T extends ElementType = 'div'>(props: ElementProps<T>) => {
  const {
    as = 'div',
    asChild = false,
    children,
    className,
    cssClassName = '',
    ref,
    ...rest
  } = props;

  const classes = cn(cssClassName, className);
  const Component = asChild ? Slot.Root : as;

  return (
    <Component className={classes} ref={ref} {...rest}>
      {Component === 'img' ? null : children}
    </Component>
  );
};

Element.displayName = 'Element';

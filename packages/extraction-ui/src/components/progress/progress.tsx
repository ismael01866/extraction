import React, { ElementType } from 'react';

import { Progress } from 'radix-ui';

import { Element } from '../element';
import { ProgressIndicatorProps, ProgressProps } from './progress.types';

export const ProgressRoot = <T extends ElementType = 'div'>(props: ProgressProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Progress.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-progress">
        {children}
      </Element>
    </Progress.Root>
  );
};

ProgressRoot.displayName = 'Progress';

export const ProgressIndicator = <T extends ElementType = 'div'>(
  props: ProgressIndicatorProps<T>,
) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Progress.Indicator asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-progress-indicator">
        {children}
      </Element>
    </Progress.Indicator>
  );
};

ProgressIndicator.displayName = 'Progress.Indicator';

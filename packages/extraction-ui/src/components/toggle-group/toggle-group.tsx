import React, { ElementType } from 'react';

import { ToggleGroup } from 'radix-ui';

import { Element } from '../element';
import { ToggleGroupItemProps, ToggleGroupRootProps } from './toggle-group.types';

export const ToggleGroupRoot = <T extends ElementType = 'div'>(props: ToggleGroupRootProps<T>) => {
  const { asChild = false, children, ...rest } = props;

  return (
    <ToggleGroup.Root asChild {...rest}>
      <Element asChild={asChild} cssClassName="ex-toggle-group">
        {children}
      </Element>
    </ToggleGroup.Root>
  );
};

ToggleGroupRoot.displayName = 'ToggleGroup';

export const ToggleGroupItem = <T extends ElementType = 'div'>(props: ToggleGroupItemProps<T>) => {
  const { asChild = false, children, ...rest } = props;

  return (
    <ToggleGroup.Item asChild {...rest}>
      <Element asChild={asChild} cssClassName="ex-toggle-group-item">
        {children}
      </Element>
    </ToggleGroup.Item>
  );
};

ToggleGroupItem.displayName = 'ToggleGroup.Item';

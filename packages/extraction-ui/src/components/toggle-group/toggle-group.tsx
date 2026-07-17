import React, { ElementType } from 'react';

import './toggle-group.css';

import { Element } from '../element';
import { ToggleGroupItemProps, ToggleGroupRootProps } from './toggle-group.types';

import * as ToggleGroup from '@radix-ui/react-toggle-group';

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

'use client';

import React, { ElementType } from 'react';

import './toggle-group.css';

import { Element } from '../element';
import { ToggleGroupItemProps, ToggleGroupRootProps } from './toggle-group.types';

import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const ToggleGroupRoot = <T extends ElementType = 'div'>(props: ToggleGroupRootProps<T>) => {
  const { as = 'div', children, defaultValue, name, value, onValueChange, ...rest } = props;

  const [internalValue, setInternalValue] = React.useState(defaultValue);

  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  const setActiveValue = React.useCallback(
    (value: string | string[]) => {
      if (!isControlled) {
        setInternalValue(value);
      }

      (onValueChange as ((value: string | string[]) => void) | undefined)?.(value);
    },
    [isControlled, onValueChange],
  );

  return (
    <>
      <ToggleGroup.Root
        asChild
        {...({
          ...rest,
          value,
          defaultValue,
          onValueChange: setActiveValue,
        } as React.ComponentProps<typeof ToggleGroup.Root>)}
      >
        <Element as={as as ElementType<any>} cssClassName="ex-toggle-group">
          {children}
        </Element>
      </ToggleGroup.Root>

      {name && activeValue ? (
        <input
          type="hidden"
          name={name}
          value={Array.isArray(activeValue) ? activeValue.join(',') : activeValue}
        />
      ) : null}
    </>
  );
};

ToggleGroupRoot.displayName = 'ToggleGroup';

export const ToggleGroupItem = <T extends ElementType = 'div'>(props: ToggleGroupItemProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <ToggleGroup.Item asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-toggle-group-item">
        {children}
      </Element>
    </ToggleGroup.Item>
  );
};

ToggleGroupItem.displayName = 'ToggleGroup.Item';

'use client';

import React, { ElementType } from 'react';

import { Element } from '../element';
import { ToggleProps } from './toggle.types';

import * as Toggle from '@radix-ui/react-toggle';

export const ToggleRoot = <T extends ElementType = 'div'>(props: ToggleProps<T>) => {
  const {
    as = 'div',
    asChild = false,
    children,
    defaultPressed,
    name,
    value = 'on',
    pressed,
    onPressedChange,
    ...rest
  } = props;

  const [internalPressed, setInternalPressed] = React.useState(defaultPressed);

  const isControlled = pressed !== undefined;
  const activePressed = isControlled ? pressed : internalPressed;

  const setActiveValue = React.useCallback(
    (value: boolean) => {
      if (!isControlled) {
        setInternalPressed(value);
      }

      onPressedChange?.(value);
    },
    [isControlled, onPressedChange],
  );

  return (
    <>
      <Toggle.Root
        asChild
        pressed={pressed}
        defaultPressed={defaultPressed}
        onPressedChange={setActiveValue}
        {...rest}
      >
        <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-toggle">
          {children}
        </Element>
      </Toggle.Root>
      {name && activePressed ? <input type="hidden" name={name} value={value} /> : null}
    </>
  );
};

ToggleRoot.displayName = 'Toggle';

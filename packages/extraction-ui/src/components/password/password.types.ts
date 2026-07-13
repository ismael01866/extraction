import { ComponentProps, ElementType } from 'react';

import { unstable_PasswordToggleField as Password } from 'radix-ui';

import { ElementProps } from '../element';

export type PasswordProps = ComponentProps<typeof Password.Root> & ElementProps<'div'>;

export type PasswordInputProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Password.Input>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type PasswordToggleProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Password.Toggle>,
    'as' | 'asChild' | 'className' | 'children'
  >;

export type PasswordIconProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Password.Icon>,
    'as' | 'asChild' | 'className' | 'children' | 'hidden' | 'visible'
  >;

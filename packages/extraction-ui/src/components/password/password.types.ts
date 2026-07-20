import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Password from '@radix-ui/react-password-toggle-field';

export type PasswordProps = ComponentProps<typeof Password.Root> & ElementProps<'div'>;

export type PasswordInputProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Password.Input>, 'as' | 'asChild' | 'className' | 'children'>;

export type PasswordToggleProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Password.Toggle>, 'as' | 'asChild' | 'className' | 'children'>;

export type PasswordIconProps<T extends ElementType> = ElementProps<T> &
  Omit<
    ComponentProps<typeof Password.Icon>,
    'as' | 'asChild' | 'className' | 'children' | 'hidden' | 'visible'
  >;

import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as PinInput from '@radix-ui/react-one-time-password-field';

export type PinInputProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof PinInput.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type PinInputFieldProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof PinInput.Input>, 'as' | 'asChild' | 'className' | 'children'>;

export type PinInputHiddenProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof PinInput.HiddenInput>, 'as' | 'asChild' | 'className' | 'children'>;

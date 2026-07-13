import { ComponentProps, ElementType } from 'react';

import { unstable_OneTimePasswordField as PinInput } from 'radix-ui';

import { ElementProps } from '../element';

export type PinInputProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof PinInput.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type PinInputFieldProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof PinInput.Input>, 'as' | 'asChild' | 'className' | 'children'>;

export type PinInputHiddenProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof PinInput.HiddenInput>, 'as' | 'asChild' | 'className' | 'children'>;

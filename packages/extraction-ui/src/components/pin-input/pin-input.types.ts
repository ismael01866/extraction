import { ComponentProps, ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

import * as PinInput from '@radix-ui/react-one-time-password-field';

export type PinInputProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof PinInput.Root>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type PinInputFieldProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof PinInput.Input>, 'as' | 'asChild' | 'className' | 'children'>
>;

export type PinInputHiddenProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ComponentProps<typeof PinInput.HiddenInput>, 'as' | 'asChild' | 'className' | 'children'>
>;

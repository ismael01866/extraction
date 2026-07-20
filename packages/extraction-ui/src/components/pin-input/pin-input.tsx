import React, { ElementType } from 'react';

import './pin-input.css';

import { cn } from '../../utils';
import { PinInputFieldProps, PinInputHiddenProps, PinInputProps } from './pin-input.types';

import * as PinInput from '@radix-ui/react-one-time-password-field';

export const PinInputRoot = <T extends ElementType = 'div'>(props: PinInputProps<T>) => {
  const { children, className, ...rest } = props;

  const classes = cn('ex-pin-input', className);

  return (
    <PinInput.Root className={classes} {...rest}>
      {children}
    </PinInput.Root>
  );
};

PinInputRoot.displayName = 'PinInput';

export const PinInputField = <T extends ElementType = 'input'>(props: PinInputFieldProps<T>) => {
  const { autoCapitalize = 'none', className, ...rest } = props;

  const classes = cn('ex-pin-input-field', className);

  return (
    <PinInput.Input autoCapitalize={autoCapitalize} className={classes} {...rest}></PinInput.Input>
  );
};

PinInputField.displayName = 'PinInput.Field';

export const PinInputHidden = <T extends ElementType = 'input'>(props: PinInputHiddenProps<T>) => {
  const { autoCapitalize = 'none', className, ...rest } = props;

  const classes = cn('ex-pin-input-hidden', className);

  return (
    <PinInput.HiddenInput
      autoCapitalize={autoCapitalize}
      className={classes}
      {...rest}
    ></PinInput.HiddenInput>
  );
};

PinInputHidden.displayName = 'PinInput.Hidden';

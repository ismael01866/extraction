'use client';

import React, { ChangeEvent, ElementType, FocusEvent, KeyboardEvent } from 'react';

import './number-input.css';

import { Element } from '../element';
import { NumberInputContext } from './number-input.context';
import {
  NumberInputContextValue,
  NumberInputFieldProps,
  NumberInputProps,
  NumberInputTriggerProps,
} from './number-input.types';

// import { useControllableState } from '@radix-ui/react-use-controllable-state';

const clamp = (value: number, min?: number, max?: number) => {
  let next = value;
  if (min !== undefined) next = Math.max(min, next);
  if (max !== undefined) next = Math.min(max, next);
  return next;
};

export const NumberInputRoot = <T extends ElementType = 'div'>(props: NumberInputProps<T>) => {
  const {
    as = 'div',
    children,
    defaultValue,
    min,
    max,
    step = 1,
    value: valueProp,
    onValueChange,
    ...rest
  } = props;

  const [value, setValue] = useControllableState<number | undefined>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const commit = (next?: number) => {
    setValue(next === undefined ? undefined : clamp(next, min, max));
  };

  const increment = () => commit((value ?? min ?? 0) + step);
  const decrement = () => commit((value ?? min ?? 0) - step);

  const context: NumberInputContextValue = React.useMemo(
    () => ({
      min,
      max,
      step,
      increment,
      decrement,
      value,
      setValue: commit,
    }),
    [min, max, step, increment, decrement, value, setValue],
  );

  return (
    <NumberInputContext.Provider value={context}>
      <Element as={as as ElementType<any>} cssClassName="ex-number-input" {...rest}>
        {children}
      </Element>
    </NumberInputContext.Provider>
  );
};

NumberInputRoot.displayName = 'NumberInput';

export const NumberInputField = <T extends ElementType = 'input'>(
  props: NumberInputFieldProps<T>,
) => {
  const { as = 'input', onKeyDown, onBlur, onChange, ...rest } = props;

  const context = React.useContext(NumberInputContext);

  if (!context) {
    throw new Error('NumberInput.Field must be used within NumberInput');
  }

  const { value, setValue, min, max, increment, decrement } = context;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;
    if (raw === '') {
      setValue(undefined);
    } else if (/^-?\d*\.?\d*$/.test(raw)) {
      const parsed = Number(raw);
      if (!Number.isNaN(parsed)) setValue(parsed);
    }
    onChange?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      increment();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      decrement();
    }
    onKeyDown?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (value !== undefined) setValue(value);
    onBlur?.(event);
  };

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-number-input-field"
      inputMode="decimal"
      // aria-valuenow={value}
      // aria-valuemin={min}
      // aria-valuemax={max}
      role="spinbutton"
      value={value ?? ''}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      {...rest}
    />
  );
};

NumberInputField.displayName = 'NumberInput.Field';

export const NumberInputIncrementTrigger = <T extends ElementType = 'button'>(
  props: NumberInputTriggerProps<T>,
) => {
  const { as = 'button', onClick, ...rest } = props as any;

  const context = React.useContext(NumberInputContext);

  if (!context) {
    throw new Error('NumberInput.IncrementTrigger must be used within NumberInput');
  }

  const { increment, max, value } = context;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-number-input-button"
      tabIndex={-1}
      type="button"
      // aria-label="Increment"
      disabled={max !== undefined && value !== undefined && value >= max}
      onClick={(event) => {
        increment();
        onClick?.(event);
      }}
      {...rest}
    />
  );
};

NumberInputIncrementTrigger.displayName = 'NumberInput.IncrementTrigger';

export const NumberInputDecrementTrigger = <T extends ElementType = 'button'>(
  props: NumberInputTriggerProps<T>,
) => {
  const { as = 'button', onClick, ...rest } = props as any;
  // const { decrement, disabled, value, min } = useNumberInputContext();

  const context = React.useContext(NumberInputContext);

  if (!context) {
    throw new Error('NumberInput.DecrementTrigger must be used within NumberInput');
  }

  const { decrement, min, value } = context;

  return (
    <Element
      as={as as ElementType<any>}
      cssClassName="ex-number-input-button"
      tabIndex={-1}
      type="button"
      // aria-label="Decrement"
      disabled={min !== undefined && value !== undefined && value <= min}
      onClick={(event) => {
        decrement();
        onClick?.(event);
      }}
      {...rest}
    />
  );
};

NumberInputDecrementTrigger.displayName = 'NumberInput.DecrementTrigger';

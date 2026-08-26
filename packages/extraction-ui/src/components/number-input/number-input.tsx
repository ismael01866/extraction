'use client';

import React, {
  ChangeEvent,
  ElementType,
  FocusEvent,
  KeyboardEvent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import './number-input.css';

import { Element } from '../element';
import { NumberInputContext } from './number-input.context';
import {
  NumberInputButtonProps,
  NumberInputContextValue,
  NumberInputControlProps,
  NumberInputFieldProps,
  NumberInputProps,
} from './number-input.types';
import { add, clamp, subtract } from './number-input.utils';

import { useControllableState } from '@radix-ui/react-use-controllable-state';

const NUMBER_PATTERN = /^-?(?:\d+(?:\.\d*)?|\.\d*)$/;

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

  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const commit = useCallback(
    (next?: number) => {
      setValue(next === undefined ? undefined : clamp(next, min, max));
    },
    [setValue, min, max],
  );

  const increment = useCallback(() => {
    const current = value ?? min ?? 0;

    commit(add(current, step));
  }, [commit, value, min, step]);

  const decrement = useCallback(() => {
    const current = value ?? min ?? 0;

    commit(subtract(current, step));
  }, [commit, value, min, step]);

  const context = useMemo<NumberInputContextValue>(
    () => ({
      decrement,
      increment,
      min,
      max,
      step,
      value,
      setValue: commit,
    }),
    [min, max, step, value, increment, decrement, commit],
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

  const context = useContext(NumberInputContext);

  if (!context) {
    throw new Error('NumberInput.Field must be used within NumberInput');
  }

  const { value, setValue, min, max, increment, decrement } = context;

  const [inputValue, setInputValue] = useState<string | null>(null);

  const displayValue = inputValue ?? value ?? '';

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;

    if (raw === '' || raw === '-') {
      setInputValue(raw);
      setValue(undefined);
    } else if (NUMBER_PATTERN.test(raw)) {
      setInputValue(raw);
      setValue(Number(raw));
    }

    onChange?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setInputValue(null);
      increment();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setInputValue(null);
      decrement();
    }

    onKeyDown?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setInputValue(null);
    if (value !== undefined) setValue(value);

    onBlur?.(event);
  };

  return (
    <Element
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      as={as as ElementType<any>}
      cssClassName="ex-number-input-field"
      inputMode="decimal"
      role="spinbutton"
      value={displayValue}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
};

NumberInputField.displayName = 'NumberInput.Field';

export const NumberInputControl = <T extends ElementType = 'div'>(
  props: NumberInputControlProps<T>,
) => {
  const { as = 'div', children, ...rest } = props;

  return (
    <Element as={as as ElementType<any>} cssClassName="ex-number-input-control" {...rest}>
      {children}
    </Element>
  );
};

NumberInputControl.displayName = 'NumberInput.Control';

export const NumberInputIncrementButton = <T extends ElementType = 'button'>(
  props: NumberInputButtonProps<T>,
) => {
  const { as = 'button', children, onClick, ...rest } = props as any;

  const context = useContext(NumberInputContext);

  if (!context) {
    throw new Error('NumberInput.IncrementButton must be used within NumberInput');
  }

  const { increment, max, value } = context;

  const disabled = max !== undefined && value !== undefined && value >= max;

  return (
    <Element
      as={as as ElementType<any>}
      aria-label="increment"
      cssClassName="ex-number-input-increment-button"
      disabled={disabled}
      tabIndex={-1}
      type="button"
      onClick={(event) => {
        increment();
        onClick?.(event);
      }}
      {...rest}
    >
      {children ?? (
        <svg
          className="ex-number-input-increment-button-svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="m12.354 8.854 5.792 5.792a.5.5 0 0 1-.353.854H6.207a.5.5 0 0 1-.353-.854l5.792-5.792a.5.5 0 0 1 .708 0Z" />
        </svg>
      )}
    </Element>
  );
};

NumberInputIncrementButton.displayName = 'NumberInput.IncrementButton';

export const NumberInputDecrementButton = <T extends ElementType = 'button'>(
  props: NumberInputButtonProps<T>,
) => {
  const { as = 'button', children, onClick, ...rest } = props as any;

  const context = useContext(NumberInputContext);

  if (!context) {
    throw new Error('NumberInput.DecrementButton must be used within NumberInput');
  }

  const { decrement, min, value } = context;

  const disabled = min !== undefined && value !== undefined && value <= min;

  return (
    <Element
      as={as as ElementType<any>}
      aria-label="decrement"
      cssClassName="ex-number-input-decrement-button"
      disabled={disabled}
      tabIndex={-1}
      type="button"
      onClick={(event) => {
        decrement();
        onClick?.(event);
      }}
      {...rest}
    >
      {children ?? (
        <svg
          className="ex-number-input-decrement-button-svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M11.646 15.146 5.854 9.354a.5.5 0 0 1 .353-.854h11.586a.5.5 0 0 1 .353.854l-5.793 5.792a.5.5 0 0 1-.707 0Z" />
        </svg>
      )}
    </Element>
  );
};

NumberInputDecrementButton.displayName = 'NumberInput.DecrementButton';

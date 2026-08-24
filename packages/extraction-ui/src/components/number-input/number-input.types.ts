import { ElementType } from 'react';

import { ElementProps } from '../element';

export type NumberInputProps<T extends ElementType> = ElementProps<T> & {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onValueChange?: (value?: number) => void;
};

export type NumberInputFieldProps<T extends ElementType> = Omit<
  ElementProps<T>,
  'onChange' | 'value' | 'defaultValue'
>;

// c: why are this values ommited

export type NumberInputTriggerProps<T extends ElementType> = ElementProps<T>;

export type NumberInputContextValue = {
  value?: number;
  setValue: (value?: number) => void;
  min?: number;
  max?: number;
  step: number;
  disabled?: boolean;
  increment: () => void;
  decrement: () => void;
};

import { ElementType } from 'react';

import { ElementProps, MergeElementProps } from '../element';

export type NumberInputProps<T extends ElementType> = ElementProps<T> & {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onValueChange?: (value?: number) => void;
};

export type NumberInputFieldProps<T extends ElementType> = MergeElementProps<
  ElementProps<T>,
  Omit<ElementProps<T>, 'defaultValue' | 'onChange' | 'value'>
>;

export type NumberInputControlProps<T extends ElementType> = ElementProps<T>;
export type NumberInputButtonProps<T extends ElementType> = ElementProps<T>;

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

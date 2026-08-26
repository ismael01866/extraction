import {
  NumberInputControl,
  NumberInputDecrementButton,
  NumberInputField,
  NumberInputIncrementButton,
  NumberInputRoot,
} from './number-input';

export type {
  NumberInputButtonProps,
  NumberInputControlProps,
  NumberInputFieldProps,
  NumberInputProps,
} from './number-input.types';

export const NumberInput = Object.assign(NumberInputRoot, {
  Field: NumberInputField,
  Control: NumberInputControl,
  IncrementButton: NumberInputIncrementButton,
  DecrementButton: NumberInputDecrementButton,
});

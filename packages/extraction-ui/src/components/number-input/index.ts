import {
  NumberInputDecrementTrigger,
  NumberInputField,
  NumberInputIncrementTrigger,
  NumberInputRoot,
} from './number-input';

export type {
  NumberInputFieldProps,
  NumberInputProps,
  NumberInputTriggerProps,
} from './number-input.types';

export const NumberInput = Object.assign(NumberInputRoot, {
  Field: NumberInputField,
  IncrementTrigger: NumberInputIncrementTrigger,
  DecrementTrigger: NumberInputDecrementTrigger,
});

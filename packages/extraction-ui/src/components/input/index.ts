import { InputField, InputRoot } from './input';

export type { InputFieldProps, InputProps } from './input.types';

export const Input = Object.assign(InputRoot, {
  Field: InputField,
});

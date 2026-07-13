import { PinInputField, PinInputHidden, PinInputRoot } from './pin-input';

export type { PinInputFieldProps, PinInputHiddenProps, PinInputProps } from './pin-input.types';

export const PinInput = Object.assign(PinInputRoot, {
  Field: PinInputField,
  Hidden: PinInputHidden,
});

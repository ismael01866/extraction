import {
  FieldError,
  FieldHelper,
  FieldLabel,
  FieldRequiredIndicator,
  FieldRoot,
  FieldSuccess,
} from './field';

export type {
  FieldErrorProps,
  FieldHelperProps,
  FieldLabelProps,
  FieldRequiredIndicatorProps,
  FieldProps,
  FieldSuccessProps,
} from './field.types';

export const Field = Object.assign(FieldRoot, {
  Error: FieldError,
  Helper: FieldHelper,
  Label: FieldLabel,
  RequiredIndicator: FieldRequiredIndicator,
  Success: FieldSuccess,
});

import {
  CheckboxControl,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
} from './checkbox';

export type {
  CheckboxIndicatorProps,
  CheckboxControlProps,
  CheckboxRootProps,
  CheckboxLabelProps,
} from './checkbox.types';

export const Checkbox = Object.assign(CheckboxRoot, {
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
});

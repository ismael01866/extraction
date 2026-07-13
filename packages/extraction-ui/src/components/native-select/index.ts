import { NativeSelectField, NativeSelectIcon, NativeSelectRoot } from './native-select';

export type {
  NativeSelectFieldProps,
  NativeSelectIconProps,
  NativeSelectProps,
} from './native-select.types';

export const NativeSelect = Object.assign(NativeSelectRoot, {
  Field: NativeSelectField,
  Icon: NativeSelectIcon,
});

import { PasswordIcon, PasswordInput, PasswordRoot, PasswordToggle } from './password';

export type {
  PasswordIconProps,
  PasswordInputProps,
  PasswordProps,
  PasswordToggleProps,
} from './password.types';

export const Password = Object.assign(PasswordRoot, {
  Icon: PasswordIcon,
  Input: PasswordInput,
  Toggle: PasswordToggle,
});

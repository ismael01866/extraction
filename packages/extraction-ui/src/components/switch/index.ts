import { SwitchRoot, SwitchThumb } from './switch';

export type { SwitchProps, SwitchThumbProps } from './switch.types';

export const Switch = Object.assign(SwitchRoot, {
  Thumb: SwitchThumb,
});

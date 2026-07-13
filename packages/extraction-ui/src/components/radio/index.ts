import { RadioControl, RadioIndicator, RadioItem, RadioLabel } from './radio';

export type {
  RadioIndicatorProps,
  RadioItemProps,
  RadioControlProps,
  RadioLabelProps,
} from './radio.types';

export const Radio = Object.assign(RadioItem, {
  Indicator: RadioIndicator,
  Control: RadioControl,
  Label: RadioLabel,
});

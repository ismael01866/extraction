import {
  RadioCardContent,
  RadioCardDescription,
  RadioCardIndicator,
  RadioCardLabel,
  RadioCardRoot,
} from './radio-card';

export type {
  RadioCardContentProps,
  RadioCardIndicatorProps,
  RadioCardRootProps,
  RadioCardLabelProps,
  RadioCardDescriptionProps,
} from './radio-card.types';

export const RadioCard = Object.assign(RadioCardRoot, {
  Content: RadioCardContent,
  Description: RadioCardDescription,
  Indicator: RadioCardIndicator,
  Label: RadioCardLabel,
});

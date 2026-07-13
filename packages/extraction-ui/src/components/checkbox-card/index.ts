import {
  CheckboxCardContent,
  CheckboxCardDescription,
  CheckboxCardIndicator,
  CheckboxCardLabel,
  CheckboxCardRoot,
} from './checkbox-card';

export type {
  CheckboxCardRootProps,
  CheckboxCardContentProps,
  CheckboxCardIndicatorProps,
  CheckboxCardLabelProps,
  CheckboxCardDescriptionProps,
} from './checkbox-card.types';

export const CheckboxCard = Object.assign(CheckboxCardRoot, {
  Content: CheckboxCardContent,
  Description: CheckboxCardDescription,
  Indicator: CheckboxCardIndicator,
  Label: CheckboxCardLabel,
});

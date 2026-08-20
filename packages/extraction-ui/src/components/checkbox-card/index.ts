import {
  CheckboxCardContent,
  CheckboxCardDescription,
  CheckboxCardIndicator,
  CheckboxCardLabel,
  CheckboxCardRoot,
} from './checkbox-card';

export type {
  CheckboxCardContentProps,
  CheckboxCardDescriptionProps,
  CheckboxCardIndicatorProps,
  CheckboxCardLabelProps,
  CheckboxCardRootProps,
} from './checkbox-card.types';

export const CheckboxCard = Object.assign(CheckboxCardRoot, {
  Content: CheckboxCardContent,
  Indicator: CheckboxCardIndicator,
  Label: CheckboxCardLabel,
  Description: CheckboxCardDescription,
});

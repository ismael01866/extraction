import {
  CalloutContent,
  CalloutDescription,
  CalloutIndicator,
  CalloutRoot,
  CalloutTitle,
} from './callout';

export type {
  CalloutContentProps,
  CalloutDescriptionProps,
  CalloutIndicatorProps,
  CalloutProps,
  CalloutTitleProps,
} from './callout.types';

export const Callout = Object.assign(CalloutRoot, {
  Content: CalloutContent,
  Description: CalloutDescription,
  Indicator: CalloutIndicator,
  Title: CalloutTitle,
});

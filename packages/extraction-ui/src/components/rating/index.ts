import { RatingControl, RatingIndicator, RatingRoot } from './rating';

export type {
  RatingContextValue,
  RatingControlProps,
  RatingIndicatorProps,
  RatingProps,
} from './rating.types';

export const Rating = Object.assign(RatingRoot, {
  Control: RatingControl,
  Indicator: RatingIndicator,
});

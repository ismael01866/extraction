import { RatingIcon, RatingItem, RatingRoot } from './rating';

export type {
  RatingContextValue,
  RatingIconProps,
  RatingItemProps,
  RatingProps,
} from './rating.types';

export const Rating = Object.assign(RatingRoot, {
  Item: RatingItem,
  Icon: RatingIcon,
});

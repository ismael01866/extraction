import { TextSlideItem, TextSlideRoot, TextSlideTrack } from './text-slide';

export type { TextSlideItemProps, TextSlideProps, TextSlideTrackProps } from './text-slide.types';

export const TextSlide = Object.assign(TextSlideRoot, {
  Track: TextSlideTrack,
  Item: TextSlideItem,
});

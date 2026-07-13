import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from './slider';

export type {
  SliderRangeProps,
  SliderProps,
  SliderThumbProps,
  SliderTrackProps,
} from './slider.types';

export const Slider = Object.assign(SliderRoot, {
  Track: SliderTrack,
  Range: SliderRange,
  Thumb: SliderThumb,
});

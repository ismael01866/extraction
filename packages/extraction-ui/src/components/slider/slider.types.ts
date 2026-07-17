import { ComponentProps, ElementType } from 'react';

import { ElementProps } from '../element';

import * as Slider from '@radix-ui/react-slider';

export type SliderProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Slider.Root>, 'as' | 'asChild' | 'className' | 'children'>;

export type SliderTrackProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Slider.Track>, 'as' | 'asChild' | 'className' | 'children'>;

export type SliderRangeProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Slider.Range>, 'as' | 'asChild' | 'className' | 'children'>;

export type SliderThumbProps<T extends ElementType> = ElementProps<T> &
  Omit<ComponentProps<typeof Slider.Thumb>, 'as' | 'asChild' | 'className' | 'children'>;

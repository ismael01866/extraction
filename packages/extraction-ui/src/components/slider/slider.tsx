import React, { ElementType } from 'react';

import './slider.css';

import { Element } from '../element';
import { SliderProps, SliderRangeProps, SliderThumbProps, SliderTrackProps } from './slider.types';

import * as Slider from '@radix-ui/react-slider';

export const SliderRoot = <T extends ElementType = 'div'>(props: SliderProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Slider.Root asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-slider">
        {children}
      </Element>
    </Slider.Root>
  );
};

SliderRoot.displayName = 'Slider';

export const SliderTrack = <T extends ElementType = 'div'>(props: SliderTrackProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Slider.Track asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-slider-track">
        {children}
      </Element>
    </Slider.Track>
  );
};

SliderTrack.displayName = 'Slider.Track';

export const SliderRange = <T extends ElementType = 'div'>(props: SliderRangeProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Slider.Range asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-slider-range">
        {children}
      </Element>
    </Slider.Range>
  );
};

SliderRange.displayName = 'Slider.Range';

export const SliderThumb = <T extends ElementType = 'div'>(props: SliderThumbProps<T>) => {
  const { as = 'div', asChild = false, children, ...rest } = props;

  return (
    <Slider.Thumb asChild {...rest}>
      <Element as={as as ElementType<any>} asChild={asChild} cssClassName="ex-slider-thumb">
        {children}
      </Element>
    </Slider.Thumb>
  );
};

SliderThumb.displayName = 'Slider.Thumb';

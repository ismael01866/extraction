import React from 'react';

import { render } from '@testing-library/react';

import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from './slider';

// JSDOM doesn't implement ResizeObserver; mock it for Radix use-size
if (typeof (global as any).ResizeObserver === 'undefined') {
  (global as any).ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

describe('SliderRoot', () => {
  it('renders default div and class', () => {
    render(
      <SliderRoot defaultValue={[0]}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
      </SliderRoot>,
    );

    const el = document.querySelector('.ex-slider');
    expect(el).toBeInTheDocument();
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-slider');
  });

  it('supports custom element and props', () => {
    render(
      <SliderRoot as="section" defaultValue={[0]} id="slider" className="custom">
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
      </SliderRoot>,
    );

    const el = document.querySelector('.ex-slider');
    expect(el).toBeInTheDocument();
    expect(el?.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'slider');
    expect(el).toHaveClass('ex-slider custom');
  });
});

describe('SliderTrack', () => {
  it('renders default div and class inside SliderRoot', () => {
    render(
      <SliderRoot defaultValue={[0]}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
      </SliderRoot>,
    );

    const root = document.querySelector('.ex-slider');
    const el = root?.querySelector('.ex-slider-track');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('ex-slider-track');
  });
});

describe('SliderRange', () => {
  it('renders default div and class inside SliderRoot', () => {
    render(
      <SliderRoot defaultValue={[0]}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
      </SliderRoot>,
    );

    const root = document.querySelector('.ex-slider');
    const el = root?.querySelector('.ex-slider-range');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('ex-slider-range');
  });
});

describe('SliderThumb', () => {
  it('renders default div and class inside SliderRoot', () => {
    render(
      <SliderRoot defaultValue={[0]}>
        <SliderTrack>
          <SliderRange>
            <SliderThumb />
          </SliderRange>
        </SliderTrack>
      </SliderRoot>,
    );

    const root = document.querySelector('.ex-slider');
    const el = root?.querySelector('.ex-slider-thumb');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('ex-slider-thumb');
  });
});

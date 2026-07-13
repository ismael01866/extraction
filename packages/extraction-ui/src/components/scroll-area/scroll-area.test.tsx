import React from 'react';

import { render } from '@testing-library/react';

import { ScrollAreaContent, ScrollAreaRoot, ScrollAreaViewport } from './scroll-area';

describe('ScrollAreaRoot', () => {
  it('renders default div and class', () => {
    render(<ScrollAreaRoot>Area</ScrollAreaRoot>);
    const el = document.querySelector('.ex-scroll-area');
    expect(el).toBeInTheDocument();
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-scroll-area');
  });
});

describe('ScrollAreaViewport and Content', () => {
  it('renders viewport and content classes', () => {
    render(
      <ScrollAreaRoot>
        <ScrollAreaViewport>Viewport</ScrollAreaViewport>
      </ScrollAreaRoot>,
    );

    const vp = document.querySelector('.ex-scroll-area-viewport');
    expect(vp).toBeInTheDocument();
    expect(vp?.tagName).toBe('DIV');
    expect(vp).toHaveClass('ex-scroll-area-viewport');

    render(
      <ScrollAreaRoot>
        <ScrollAreaViewport>Viewport</ScrollAreaViewport>
        <ScrollAreaContent>Content</ScrollAreaContent>
      </ScrollAreaRoot>,
    );

    const content = document.querySelector('.ex-scroll-area-content');
    expect(content).toBeInTheDocument();
    expect(content?.tagName).toBe('DIV');
    expect(content).toHaveClass('ex-scroll-area-content');
  });
});

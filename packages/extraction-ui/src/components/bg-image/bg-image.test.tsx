import React from 'react';

import { render, screen } from '@testing-library/react';

import { BgImage } from './index';

describe('BgImage', () => {
  it('renders with a div by default', () => {
    render(<BgImage>Background</BgImage>);

    const element = screen.getByText(/background/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<BgImage>Background</BgImage>);

    const element = screen.getByText(/background/i);
    expect(element).toHaveClass('ex-bg-image');
  });

  it('supports a custom element via as prop', () => {
    render(<BgImage as="section">Background</BgImage>);

    const element = screen.getByText(/background/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('passes src as background-image style', () => {
    render(<BgImage src="/test.jpg">Background</BgImage>);

    const element = screen.getByText(/background/i);
    expect(element).toHaveStyle("background-image: url('/test.jpg')");
  });

  it('passes additional props through', () => {
    render(<BgImage id="bg-id">Background</BgImage>);

    const element = screen.getByText(/background/i);
    expect(element).toHaveAttribute('id', 'bg-id');
  });

  it('preserves display name for debugging', () => {
    expect(BgImage.displayName).toBe('BgImage');
  });
});

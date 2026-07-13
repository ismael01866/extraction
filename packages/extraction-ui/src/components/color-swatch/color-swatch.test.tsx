import React from 'react';

import { render, screen } from '@testing-library/react';

import { ColorSwatch } from './index';

describe('ColorSwatch', () => {
  it('renders with a div by default', () => {
    render(<ColorSwatch>Swatch</ColorSwatch>);

    const element = screen.getByText(/swatch/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<ColorSwatch>Swatch</ColorSwatch>);

    const element = screen.getByText(/swatch/i);
    expect(element).toHaveClass('ex-color-swatch');
  });

  it('supports a custom element via as prop', () => {
    render(<ColorSwatch as="span">Swatch</ColorSwatch>);

    const element = screen.getByText(/swatch/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<ColorSwatch id="swatch-id">Swatch</ColorSwatch>);

    const element = screen.getByText(/swatch/i);
    expect(element).toHaveAttribute('id', 'swatch-id');
  });

  it('preserves display name for debugging', () => {
    expect(ColorSwatch.displayName).toBe('ColorSwatch');
  });
});

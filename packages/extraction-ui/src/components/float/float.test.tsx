import React from 'react';

import { render, screen } from '@testing-library/react';

import { Float } from './index';

describe('Float', () => {
  it('renders with a div by default', () => {
    render(<Float>Float</Float>);

    const element = screen.getByText(/float/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Float>Float</Float>);

    const element = screen.getByText(/float/i);
    expect(element).toHaveClass('ex-float');
  });

  it('supports a custom element via as prop', () => {
    render(<Float as="span">Float</Float>);

    const element = screen.getByText(/float/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<Float id="float-id">Float</Float>);

    const element = screen.getByText(/float/i);
    expect(element).toHaveAttribute('id', 'float-id');
  });

  it('preserves display name for debugging', () => {
    expect(Float.displayName).toBe('Float');
  });
});

import React from 'react';

import { render, screen } from '@testing-library/react';

import { Display } from './index';

describe('Display', () => {
  it('renders with an h1 by default', () => {
    render(<Display>Display</Display>);

    const element = screen.getByRole('display', { name: /display/i });
    expect(element.tagName).toBe('H1');
  });

  it('applies the default class name', () => {
    render(<Display>Display</Display>);

    const element = screen.getByRole('display', { name: /display/i });
    expect(element).toHaveClass('ex-display');
  });

  it('supports a custom element via as prop', () => {
    render(<Display as="div">Display</Display>);

    const element = screen.getByText(/display/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Display id="display-id">Display</Display>);

    const element = screen.getByRole('display', { name: /display/i });
    expect(element).toHaveAttribute('id', 'display-id');
  });

  it('preserves display name for debugging', () => {
    expect(Display.displayName).toBe('Display');
  });
});

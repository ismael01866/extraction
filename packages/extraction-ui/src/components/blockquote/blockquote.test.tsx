import React from 'react';

import { render, screen } from '@testing-library/react';

import { Blockquote } from './index';

describe('Blockquote', () => {
  it('renders with a figure by default', () => {
    render(<Blockquote>Quote</Blockquote>);

    const element = screen.getByText(/quote/i);
    expect(element.tagName).toBe('FIGURE');
  });

  it('applies the default class name', () => {
    render(<Blockquote>Quote</Blockquote>);

    const element = screen.getByText(/quote/i);
    expect(element).toHaveClass('ex-blockquote');
  });

  it('supports a custom element via as prop', () => {
    render(<Blockquote as="div">Quote</Blockquote>);

    const element = screen.getByText(/quote/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Blockquote id="quote-id">Quote</Blockquote>);

    const element = screen.getByText(/quote/i);
    expect(element).toHaveAttribute('id', 'quote-id');
  });

  it('preserves display name for debugging', () => {
    expect(Blockquote.displayName).toBe('Blockquote');
  });
});

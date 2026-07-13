import React from 'react';

import { render, screen } from '@testing-library/react';

import { Text } from './index';

describe('Text', () => {
  it('renders with a span by default', () => {
    render(<Text>Text</Text>);

    const element = screen.getByText(/text/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('applies the default class name', () => {
    render(<Text>Text</Text>);

    const element = screen.getByText(/text/i);
    expect(element).toHaveClass('ex-text');
  });

  it('supports a custom element via as prop', () => {
    render(<Text as="div">Text</Text>);

    const element = screen.getByText(/text/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Text id="text-id">Text</Text>);

    const element = screen.getByText(/text/i);
    expect(element).toHaveAttribute('id', 'text-id');
  });

  it('preserves display name for debugging', () => {
    expect(Text.displayName).toBe('Text');
  });
});

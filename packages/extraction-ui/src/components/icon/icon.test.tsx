import React from 'react';

import { render, screen } from '@testing-library/react';

import { Icon } from './index';

describe('Icon', () => {
  it('renders with a span by default', () => {
    render(<Icon>★</Icon>);

    const element = screen.getByText(/★/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('applies the default class name', () => {
    render(<Icon>★</Icon>);

    const element = screen.getByText(/★/i);
    expect(element).toHaveClass('ex-icon');
  });

  it('supports a custom element via as prop', () => {
    render(<Icon as="i">★</Icon>);

    const element = screen.getByText(/★/i);
    expect(element.tagName).toBe('I');
  });

  it('passes additional props through', () => {
    render(<Icon id="icon-id">★</Icon>);

    const element = screen.getByText(/★/i);
    expect(element).toHaveAttribute('id', 'icon-id');
  });

  it('preserves display name for debugging', () => {
    expect(Icon.displayName).toBe('Icon');
  });
});

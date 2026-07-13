import React from 'react';

import { render, screen } from '@testing-library/react';

import { Kbd } from './index';

describe('Kbd', () => {
  it('renders with a div by default', () => {
    render(<Kbd>Ctrl</Kbd>);

    const element = screen.getByText(/ctrl/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Kbd>Ctrl</Kbd>);

    const element = screen.getByText(/ctrl/i);
    expect(element).toHaveClass('ex-kbd');
  });

  it('supports a custom element via as prop', () => {
    render(<Kbd as="kbd">Ctrl</Kbd>);

    const element = screen.getByText(/ctrl/i);
    expect(element.tagName).toBe('KBD');
  });

  it('passes additional props through', () => {
    render(<Kbd id="kbd-id">Ctrl</Kbd>);

    const element = screen.getByText(/ctrl/i);
    expect(element).toHaveAttribute('id', 'kbd-id');
  });

  it('preserves display name for debugging', () => {
    expect(Kbd.displayName).toBe('Kbd');
  });
});

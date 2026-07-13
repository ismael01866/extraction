import React from 'react';

import { render, screen } from '@testing-library/react';

import { IconButton } from './index';

describe('IconButton', () => {
  it('renders with a button by default', () => {
    render(<IconButton>Click</IconButton>);

    const element = screen.getByRole('button', { name: /click/i });
    expect(element.tagName).toBe('BUTTON');
  });

  it('applies the default class name', () => {
    render(<IconButton>Click</IconButton>);

    const element = screen.getByRole('button', { name: /click/i });
    expect(element).toHaveClass('ex-icon-button');
  });

  it('supports a custom element via as prop', () => {
    render(<IconButton as="div">Click</IconButton>);

    const element = screen.getByText(/click/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<IconButton id="icon-button-id">Click</IconButton>);

    const element = screen.getByRole('button', { name: /click/i });
    expect(element).toHaveAttribute('id', 'icon-button-id');
  });

  it('preserves display name for debugging', () => {
    expect(IconButton.displayName).toBe('IconButton');
  });
});

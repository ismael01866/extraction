import React from 'react';

import { render, screen } from '@testing-library/react';

import { Separator } from './index';

describe('Separator', () => {
  it('renders with a div by default', () => {
    render(<Separator />);

    const separator = screen.getByRole('separator');
    expect(separator.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Separator />);

    const separator = screen.getByRole('separator');
    expect(separator).toHaveClass('ex-separator');
  });

  it('supports a custom element via as prop', () => {
    render(<Separator as="span" />);

    const separator = screen.getByRole('separator');
    expect(separator.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<Separator id="separator-id" />);

    const separator = screen.getByRole('separator');
    expect(separator).toHaveAttribute('id', 'separator-id');
  });

  it('preserves display name for debugging', () => {
    expect(Separator.displayName).toBe('Separator');
  });
});

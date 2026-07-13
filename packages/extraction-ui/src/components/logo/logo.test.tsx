import React from 'react';

import { render, screen } from '@testing-library/react';

import { Logo } from './index';

describe('Logo', () => {
  it('renders with an img by default', () => {
    render(<Logo alt="Brand logo" />);

    const element = screen.getByRole('img', { name: /brand logo/i });
    expect(element.tagName).toBe('IMG');
  });

  it('applies the default class name', () => {
    render(<Logo alt="Brand logo" />);

    const element = screen.getByRole('img', { name: /brand logo/i });
    expect(element).toHaveClass('ex-logo');
  });

  it('supports a custom element via as prop', () => {
    render(<Logo as="span">Brand</Logo>);

    const element = screen.getByText(/brand/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<Logo alt="Brand logo" id="logo-id" />);

    const element = screen.getByRole('img', { name: /brand logo/i });
    expect(element).toHaveAttribute('id', 'logo-id');
  });

  it('preserves display name for debugging', () => {
    expect(Logo.displayName).toBe('Logo');
  });
});

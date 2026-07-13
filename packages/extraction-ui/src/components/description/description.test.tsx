import React from 'react';

import { render, screen } from '@testing-library/react';

import { Description } from './index';

describe('Description', () => {
  it('renders with a p by default', () => {
    render(<Description>Description</Description>);

    const element = screen.getByText(/description/i);
    expect(element.tagName).toBe('P');
  });

  it('applies the default class name', () => {
    render(<Description>Description</Description>);

    const element = screen.getByText(/description/i);
    expect(element).toHaveClass('ex-description');
  });

  it('supports a custom element via as prop', () => {
    render(<Description as="div">Description</Description>);

    const element = screen.getByText(/description/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Description id="description-id">Description</Description>);

    const element = screen.getByText(/description/i);
    expect(element).toHaveAttribute('id', 'description-id');
  });

  it('preserves display name for debugging', () => {
    expect(Description.displayName).toBe('Description');
  });
});

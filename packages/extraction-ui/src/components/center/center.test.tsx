import React from 'react';

import { render, screen } from '@testing-library/react';

import { Center } from './index';

describe('Center', () => {
  it('renders with a div by default', () => {
    render(<Center>Center</Center>);

    const element = screen.getByText(/center/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Center>Center</Center>);

    const element = screen.getByText(/center/i);
    expect(element).toHaveClass('ex-center');
  });

  it('supports a custom element via as prop', () => {
    render(<Center as="section">Center</Center>);

    const element = screen.getByText(/center/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(<Center id="center-id">Center</Center>);

    const element = screen.getByText(/center/i);
    expect(element).toHaveAttribute('id', 'center-id');
  });

  it('preserves display name for debugging', () => {
    expect(Center.displayName).toBe('Center');
  });
});

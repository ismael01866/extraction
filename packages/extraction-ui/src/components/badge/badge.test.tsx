import React from 'react';

import { render, screen } from '@testing-library/react';

import { Badge } from './index';

describe('Badge', () => {
  it('renders with a div by default', () => {
    render(<Badge>Badge</Badge>);

    const element = screen.getByText(/badge/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Badge>Badge</Badge>);

    const element = screen.getByText(/badge/i);
    expect(element).toHaveClass('ex-badge');
  });

  it('supports a custom element via as prop', () => {
    render(<Badge as="span">Badge</Badge>);

    const element = screen.getByText(/badge/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<Badge id="badge-id">Badge</Badge>);

    const element = screen.getByText(/badge/i);
    expect(element).toHaveAttribute('id', 'badge-id');
  });

  it('preserves display name for debugging', () => {
    expect(Badge.displayName).toBe('Badge');
  });
});

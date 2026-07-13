import React from 'react';

import { render, screen } from '@testing-library/react';

import { Status } from './index';

describe('Status', () => {
  it('renders with a div by default', () => {
    render(<Status>Online</Status>);

    const element = screen.getByText(/online/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Status>Online</Status>);

    const element = screen.getByText(/online/i);
    expect(element).toHaveClass('ex-status');
  });

  it('supports a custom element via as prop', () => {
    render(<Status as="span">Online</Status>);

    const element = screen.getByText(/online/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<Status id="status-id">Online</Status>);

    const element = screen.getByText(/online/i);
    expect(element).toHaveAttribute('id', 'status-id');
  });

  it('preserves display name for debugging', () => {
    expect(Status.displayName).toBe('Status');
  });
});

import React from 'react';

import { render, screen } from '@testing-library/react';

import { Mark } from './index';

describe('Mark', () => {
  it('renders with a mark by default', () => {
    render(<Mark>Marked</Mark>);

    const element = screen.getByText(/marked/i);
    expect(element.tagName).toBe('MARK');
  });

  it('applies the default class name', () => {
    render(<Mark>Marked</Mark>);

    const element = screen.getByText(/marked/i);
    expect(element).toHaveClass('ex-mark');
  });

  it('supports a custom element via as prop', () => {
    render(<Mark as="em">Marked</Mark>);

    const element = screen.getByText(/marked/i);
    expect(element.tagName).toBe('EM');
  });

  it('passes additional props through', () => {
    render(<Mark id="mark-id">Marked</Mark>);

    const element = screen.getByText(/marked/i);
    expect(element).toHaveAttribute('id', 'mark-id');
  });

  it('preserves display name for debugging', () => {
    expect(Mark.displayName).toBe('Mark');
  });
});

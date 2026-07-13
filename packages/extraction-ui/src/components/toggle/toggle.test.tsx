import React from 'react';

import { render, screen } from '@testing-library/react';

import { ToggleRoot } from './toggle';

describe('ToggleRoot', () => {
  it('renders default div and class', () => {
    render(<ToggleRoot>Toggle</ToggleRoot>);
    const el = screen.getByText(/toggle/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-toggle');
  });

  it('supports custom element and props', () => {
    render(
      <ToggleRoot as="section" id="toggle" className="custom">
        Toggle
      </ToggleRoot>,
    );

    const el = screen.getByText(/toggle/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'toggle');
    expect(el).toHaveClass('ex-toggle custom');
  });

  it('preserves displayName', () => {
    expect(ToggleRoot.displayName).toBe('Toggle');
  });
});

import React from 'react';

import { render, screen } from '@testing-library/react';

import { RadioGroupRoot } from './radio-group';

describe('RadioGroupRoot', () => {
  it('renders default div and class', () => {
    render(<RadioGroupRoot>Group</RadioGroupRoot>);
    const el = screen.getByText(/group/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-radio-group');
  });
});

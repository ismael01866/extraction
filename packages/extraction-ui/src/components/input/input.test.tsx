import React from 'react';

import { render, screen } from '@testing-library/react';

import { Input } from './index';

describe('Input', () => {
  it('renders with an input by default', () => {
    render(<Input placeholder="Value" />);

    const element = screen.getByRole('textbox');
    expect(element.tagName).toBe('INPUT');
  });

  it('applies the default class name', () => {
    render(<Input placeholder="Value" />);

    const element = screen.getByRole('textbox');
    expect(element).toHaveClass('ex-input');
  });

  it('supports a custom element via as prop', () => {
    render(<Input as="div">Value</Input>);

    const element = screen.getByText(/value/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Input placeholder="Value" id="input-id" />);

    const element = screen.getByRole('textbox');
    expect(element).toHaveAttribute('id', 'input-id');
  });

  it('preserves display name for debugging', () => {
    expect(Input.displayName).toBe('Input');
  });
});

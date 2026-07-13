import React from 'react';

import { render, screen } from '@testing-library/react';

import { Textarea } from './index';

describe('Textarea', () => {
  it('renders with a textarea by default', () => {
    render(<Textarea>Text</Textarea>);

    const element = screen.getByText(/text/i);
    expect(element.tagName).toBe('TEXTAREA');
  });

  it('applies the default class name', () => {
    render(<Textarea>Text</Textarea>);

    const element = screen.getByText(/text/i);
    expect(element).toHaveClass('ex-textarea');
  });

  it('supports a custom element via as prop', () => {
    render(<Textarea as="div">Text</Textarea>);

    const element = screen.getByText(/text/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Textarea id="textarea-id">Text</Textarea>);

    const element = screen.getByText(/text/i);
    expect(element).toHaveAttribute('id', 'textarea-id');
  });

  it('preserves display name for debugging', () => {
    expect(Textarea.displayName).toBe('Textarea');
  });
});

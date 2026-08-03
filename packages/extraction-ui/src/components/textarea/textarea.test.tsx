import React from 'react';

import { Textarea } from './index';

import { render, screen } from '@testing-library/react';

describe('Textarea', () => {
  it('renders with a textarea by default', () => {
    render(<Textarea defaultValue="Text" />);

    const element = screen.getByDisplayValue('Text');
    expect(element.tagName).toBe('TEXTAREA');
  });

  it('applies the default class name', () => {
    render(<Textarea defaultValue="Text" />);

    const element = screen.getByDisplayValue('Text');
    expect(element).toHaveClass('ex-textarea');
  });

  it('supports a custom element via as prop', () => {
    render(<Textarea as="div">Text</Textarea>);

    const element = screen.getByText('Text');
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Textarea id="textarea-id" defaultValue="Text" />);

    const element = screen.getByDisplayValue('Text');
    expect(element).toHaveAttribute('id', 'textarea-id');
  });

  it('preserves display name for debugging', () => {
    expect(Textarea.displayName).toBe('Textarea');
  });
});

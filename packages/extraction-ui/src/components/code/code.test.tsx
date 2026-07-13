import React from 'react';

import { render, screen } from '@testing-library/react';

import { Code } from './index';

describe('Code', () => {
  it('renders with a code element by default', () => {
    render(<Code>const a = 1;</Code>);

    const element = screen.getByText(/const a = 1;/i);
    expect(element.tagName).toBe('CODE');
  });

  it('applies the default class name', () => {
    render(<Code>const a = 1;</Code>);

    const element = screen.getByText(/const a = 1;/i);
    expect(element).toHaveClass('ex-code');
  });

  it('supports a custom element via as prop', () => {
    render(<Code as="span">const a = 1;</Code>);

    const element = screen.getByText(/const a = 1;/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(<Code id="code-id">const a = 1;</Code>);

    const element = screen.getByText(/const a = 1;/i);
    expect(element).toHaveAttribute('id', 'code-id');
  });

  it('preserves display name for debugging', () => {
    expect(Code.displayName).toBe('Code');
  });
});

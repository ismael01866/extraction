import React from 'react';

import { InputField, InputRoot } from './input';

import { render, screen } from '@testing-library/react';

describe('InputRoot', () => {
  it('renders a div by default', () => {
    render(<InputRoot>Value</InputRoot>);

    const element = screen.getByText('Value');
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<InputRoot>Value</InputRoot>);

    const element = screen.getByText('Value');
    expect(element).toHaveClass('ex-input');
  });

  it('supports a custom element via as prop', () => {
    render(<InputRoot as="section">Value</InputRoot>);

    const element = screen.getByText('Value');
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(
      <InputRoot id="input-id" data-testid="input-root">
        Value
      </InputRoot>,
    );

    const element = screen.getByTestId('input-root');
    expect(element).toHaveAttribute('id', 'input-id');
  });

  it('preserves display name for debugging', () => {
    expect(InputRoot.displayName).toBe('Input');
  });
});

describe('InputField', () => {
  it('renders an input by default', () => {
    render(<InputField placeholder="Value" />);

    const element = screen.getByRole('textbox');
    expect(element.tagName).toBe('INPUT');
  });

  it('applies the default class name', () => {
    render(<InputField placeholder="Value" />);

    const element = screen.getByRole('textbox');
    expect(element).toHaveClass('ex-input-field');
  });

  it('supports a custom element via as prop', () => {
    render(<InputField as="div">Value</InputField>);

    const element = screen.getByText('Value');
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<InputField placeholder="Value" id="input-id" />);

    const element = screen.getByRole('textbox');
    expect(element).toHaveAttribute('id', 'input-id');
  });

  it('preserves display name for debugging', () => {
    expect(InputField.displayName).toBe('Input.Field');
  });
});

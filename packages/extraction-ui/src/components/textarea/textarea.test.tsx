import React from 'react';

import { TextareaField, TextareaRoot } from './textarea';

import { render, screen } from '@testing-library/react';

describe('TextareaRoot', () => {
  it('renders a div by default', () => {
    render(<TextareaRoot>Text</TextareaRoot>);

    const element = screen.getByText('Text');
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<TextareaRoot>Text</TextareaRoot>);

    const element = screen.getByText('Text');
    expect(element).toHaveClass('ex-textarea');
  });

  it('supports a custom element via as prop', () => {
    render(<TextareaRoot as="section">Text</TextareaRoot>);

    const element = screen.getByText('Text');
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(
      <TextareaRoot id="textarea-id" data-testid="textarea-root">
        Text
      </TextareaRoot>,
    );

    const element = screen.getByTestId('textarea-root');
    expect(element).toHaveAttribute('id', 'textarea-id');
  });

  it('preserves display name for debugging', () => {
    expect(TextareaRoot.displayName).toBe('Textarea');
  });
});

describe('TextareaField', () => {
  it('renders a textarea by default', () => {
    render(<TextareaField defaultValue="Text" />);

    const element = screen.getByDisplayValue('Text');
    expect(element.tagName).toBe('TEXTAREA');
  });

  it('applies the default class name', () => {
    render(<TextareaField defaultValue="Text" />);

    const element = screen.getByDisplayValue('Text');
    expect(element).toHaveClass('ex-textarea-field');
  });

  it('supports a custom element via as prop', () => {
    render(<TextareaField as="div">Text</TextareaField>);

    const element = screen.getByText('Text');
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<TextareaField id="textarea-id" defaultValue="Text" />);

    const element = screen.getByDisplayValue('Text');
    expect(element).toHaveAttribute('id', 'textarea-id');
  });

  it('preserves display name for debugging', () => {
    expect(TextareaField.displayName).toBe('Textarea.Field');
  });
});

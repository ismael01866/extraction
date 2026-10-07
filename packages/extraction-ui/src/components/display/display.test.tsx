import React from 'react';

import { Display } from './index';

import { render, screen } from '@testing-library/react';

describe('Display', () => {
  it('renders with a p by default', () => {
    render(<Display>Display</Display>);

    const element = screen.getByText('Display');
    expect(element.tagName).toBe('P');
  });

  it('applies the default class name', () => {
    render(<Display>Display</Display>);

    const element = screen.getByText('Display');
    expect(element).toHaveClass('ex-display');
  });

  it('supports a custom element via as prop', () => {
    render(<Display as="div">Display</Display>);

    const element = screen.getByText('Display');
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Display id="display-id">Display</Display>);

    const element = screen.getByText('Display');
    expect(element).toHaveAttribute('id', 'display-id');
  });

  it('preserves display name for debugging', () => {
    expect(Display.displayName).toBe('Display');
  });
});

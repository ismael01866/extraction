import React from 'react';

import { render, screen } from '@testing-library/react';

import {
  CheckboxCardContent,
  CheckboxCardDescription,
  CheckboxCardIndicator,
  CheckboxCardLabel,
  CheckboxCardRoot,
} from './checkbox-card';

describe('CheckboxCardRoot', () => {
  it('renders default button and class', () => {
    render(<CheckboxCardRoot value="card-1">Card</CheckboxCardRoot>);
    const el = screen.getByText(/card/i);
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveClass('ex-checkbox-card');
  });

  it('supports custom element and props', () => {
    render(
      <CheckboxCardRoot as="div" value="card-1" id="card" className="custom">
        Card
      </CheckboxCardRoot>,
    );

    const el = screen.getByText(/card/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveAttribute('id', 'card');
    expect(el).toHaveClass('ex-checkbox-card custom');
  });
});

describe('CheckboxCardIndicator', () => {
  it('renders default div and class inside CheckboxCardRoot', () => {
    render(
      <CheckboxCardRoot value="card-1">
        <CheckboxCardIndicator>Indicator</CheckboxCardIndicator>
      </CheckboxCardRoot>,
    );

    const el = screen.getByText(/indicator/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-checkbox-card-indicator');
  });
});

describe('CheckboxCardContent', () => {
  it('renders default div and class', () => {
    render(<CheckboxCardContent>Content</CheckboxCardContent>);
    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-checkbox-card-content');
  });
});

describe('CheckboxCardLabel', () => {
  it('renders default label and class', () => {
    render(<CheckboxCardLabel>Label</CheckboxCardLabel>);
    const el = screen.getByText(/label/i);
    expect(el.tagName).toBe('LABEL');
    expect(el).toHaveClass('ex-checkbox-card-label');
  });
});

describe('CheckboxCardDescription', () => {
  it('renders default p and class', () => {
    render(<CheckboxCardDescription>Description</CheckboxCardDescription>);
    const el = screen.getByText(/description/i);
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('ex-checkbox-card-description');
  });
});

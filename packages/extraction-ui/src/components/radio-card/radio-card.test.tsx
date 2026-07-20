import React from 'react';

import {
  RadioCardContent,
  RadioCardDescription,
  RadioCardIndicator,
  RadioCardLabel,
  RadioCardRoot,
} from './radio-card';

import * as RadioGroup from '@radix-ui/react-radio-group';
import { render, screen } from '@testing-library/react';

describe('RadioCardRoot', () => {
  it('renders default button and class inside RadioGroup', () => {
    render(
      <RadioGroup.Root defaultValue="card-1">
        <RadioCardRoot value="card-1">Card</RadioCardRoot>
      </RadioGroup.Root>,
    );

    const el = screen.getByText(/card/i);
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveClass('ex-radio-card');
  });

  it('supports custom element and props', () => {
    render(
      <RadioGroup.Root defaultValue="card-1">
        <RadioCardRoot as="div" value="card-1" id="card" className="custom">
          Card
        </RadioCardRoot>
      </RadioGroup.Root>,
    );

    const el = screen.getByText(/card/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveAttribute('id', 'card');
    expect(el).toHaveClass('ex-radio-card custom');
  });
});

describe('RadioCardIndicator', () => {
  it('renders default div and class inside RadioGroup item', () => {
    const { container } = render(
      <RadioGroup.Root defaultValue="card-1">
        <RadioCardRoot value="card-1">
          <RadioCardIndicator />
          Card
        </RadioCardRoot>
      </RadioGroup.Root>,
    );

    const el = container.querySelector('.ex-radio-card-indicator');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-radio-card-indicator');
  });
});

describe('RadioCardContent', () => {
  it('renders default div and class', () => {
    render(<RadioCardContent>Content</RadioCardContent>);
    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-radio-card-content');
  });
});

describe('RadioCardLabel', () => {
  it('renders default label and class', () => {
    render(<RadioCardLabel>Label</RadioCardLabel>);
    const el = screen.getByText(/label/i);
    expect(el.tagName).toBe('LABEL');
    expect(el).toHaveClass('ex-radio-card-label');
  });
});

describe('RadioCardDescription', () => {
  it('renders default p and class', () => {
    render(<RadioCardDescription>Description</RadioCardDescription>);
    const el = screen.getByText(/description/i);
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('ex-radio-card-description');
  });
});

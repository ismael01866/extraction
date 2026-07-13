import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CheckboxControl, CheckboxIndicator, CheckboxLabel, CheckboxRoot } from './checkbox';

describe('CheckboxRoot', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it('renders default div and class', () => {
    render(<CheckboxRoot>Checkbox</CheckboxRoot>);
    const el = screen.getByText(/checkbox/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-checkbox');
  });

  it('supports custom element and props', () => {
    render(
      <CheckboxRoot as="section" id="checkbox-root" className="custom">
        Checkbox
      </CheckboxRoot>,
    );

    const el = screen.getByText(/checkbox/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'checkbox-root');
    expect(el).toHaveClass('ex-checkbox custom');
  });

  it('passes event handlers', async () => {
    const onClick = vi.fn();
    render(<CheckboxRoot onClick={onClick}>Click</CheckboxRoot>);
    const el = screen.getByText(/click/i);
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });

  it('preserves displayName', () => {
    expect(CheckboxRoot.displayName).toBe('Checkbox');
  });
});

describe('CheckboxControl', () => {
  it('renders default button and class', () => {
    render(<CheckboxControl>Control</CheckboxControl>);
    const el = screen.getByText(/control/i);
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveClass('ex-checkbox-control');
  });

  it('supports custom element and props', () => {
    render(
      <CheckboxControl as="div" id="control" className="custom">
        Control
      </CheckboxControl>,
    );

    const el = screen.getByText(/control/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveAttribute('id', 'control');
    expect(el).toHaveClass('ex-checkbox-control custom');
  });
});

describe('CheckboxIndicator', () => {
  it('renders default div and class inside CheckboxControl', () => {
    render(
      <CheckboxControl value="chk-1">
        <CheckboxIndicator forceMount>Indicator</CheckboxIndicator>
      </CheckboxControl>,
    );

    const el = screen.getByText(/indicator/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-checkbox-indicator');
  });
});

describe('CheckboxLabel', () => {
  it('renders default label and class', () => {
    render(<CheckboxLabel>Label</CheckboxLabel>);
    const el = screen.getByText(/label/i);
    expect(el.tagName).toBe('LABEL');
    expect(el).toHaveClass('ex-checkbox-label');
  });
});

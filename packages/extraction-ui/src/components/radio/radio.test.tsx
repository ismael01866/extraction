import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup } from 'radix-ui';

import { RadioControl, RadioIndicator, RadioItem, RadioLabel } from './radio';

describe('RadioItem', () => {
  it('renders default div and class', () => {
    render(<RadioItem>Radio</RadioItem>);
    const el = screen.getByText(/radio/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-radio');
  });
});

describe('RadioControl', () => {
  it('renders default button and class inside RadioGroup', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <RadioGroup.Root defaultValue="item-1">
        <RadioControl value="item-1" onClick={onClick}>
          Control
        </RadioControl>
      </RadioGroup.Root>,
    );

    const el = screen.getByText(/control/i);
    expect(el.tagName).toBe('BUTTON');
    expect(el).toHaveClass('ex-radio-control');
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('RadioIndicator', () => {
  it('renders default div and class inside RadioGroup item', () => {
    const { container } = render(
      <RadioGroup.Root defaultValue="item-1">
        <RadioControl value="item-1">
          <RadioIndicator />
          Control
        </RadioControl>
      </RadioGroup.Root>,
    );

    const el = container.querySelector('.ex-radio-indicator');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-radio-indicator');
  });
});

describe('RadioLabel', () => {
  it('renders default label and class', () => {
    render(<RadioLabel>Label</RadioLabel>);
    const el = screen.getByText(/label/i);
    expect(el.tagName).toBe('LABEL');
    expect(el).toHaveClass('ex-radio-label');
  });
});

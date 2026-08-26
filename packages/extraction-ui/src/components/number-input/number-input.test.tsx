import React from 'react';

import { describe, expect, it, vi } from 'vitest';

import {
  NumberInputControl,
  NumberInputDecrementButton,
  NumberInputField,
  NumberInputIncrementButton,
  NumberInputRoot,
} from './number-input';

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('NumberInputRoot', () => {
  it('renders a div by default', () => {
    render(<NumberInputRoot>Value</NumberInputRoot>);

    const element = screen.getByText('Value');
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<NumberInputRoot>Value</NumberInputRoot>);

    const element = screen.getByText('Value');
    expect(element).toHaveClass('ex-number-input');
  });

  it('supports a custom element via as prop', () => {
    render(<NumberInputRoot as="section">Value</NumberInputRoot>);

    const element = screen.getByText('Value');
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(
      <NumberInputRoot id="number-input-id" data-testid="number-input-root">
        Value
      </NumberInputRoot>,
    );

    const element = screen.getByTestId('number-input-root');
    expect(element).toHaveAttribute('id', 'number-input-id');
  });

  it('preserves display name for debugging', () => {
    expect(NumberInputRoot.displayName).toBe('NumberInput');
  });

  it('renders as uncontrolled with a defaultValue', () => {
    render(
      <NumberInputRoot defaultValue={5}>
        <NumberInputField />
      </NumberInputRoot>,
    );

    const field = screen.getByRole('spinbutton');
    expect(field).toHaveValue('5');
  });

  it('supports controlled value with onValueChange', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    function Controlled() {
      const [value, setValue] = React.useState<number | undefined>(1);

      return (
        <NumberInputRoot
          value={value}
          onValueChange={(next) => {
            setValue(next);
            handleChange(next);
          }}
        >
          <NumberInputField />
          <NumberInputIncrementButton />
        </NumberInputRoot>
      );
    }

    render(<Controlled />);

    await user.click(screen.getByRole('button', { name: 'increment' }));

    expect(handleChange).toHaveBeenCalledWith(2);
    expect(screen.getByRole('spinbutton')).toHaveValue('2');
  });

  it('throws when child components are used outside the provider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<NumberInputField />)).toThrow(
      'NumberInput.Field must be used within NumberInput',
    );
    expect(() => render(<NumberInputIncrementButton />)).toThrow(
      'NumberInput.IncrementButton must be used within NumberInput',
    );
    expect(() => render(<NumberInputDecrementButton />)).toThrow(
      'NumberInput.DecrementButton must be used within NumberInput',
    );

    consoleError.mockRestore();
  });
});

describe('NumberInputField', () => {
  it('renders an input by default', () => {
    render(
      <NumberInputRoot>
        <NumberInputField />
      </NumberInputRoot>,
    );

    const element = screen.getByRole('spinbutton');
    expect(element.tagName).toBe('INPUT');
  });

  it('applies the default class name', () => {
    render(
      <NumberInputRoot>
        <NumberInputField />
      </NumberInputRoot>,
    );

    const element = screen.getByRole('spinbutton');
    expect(element).toHaveClass('ex-number-input-field');
  });

  it('supports a custom element via as prop', () => {
    render(
      <NumberInputRoot>
        <NumberInputField as="div">Value</NumberInputField>
      </NumberInputRoot>,
    );

    const element = screen.getByText('Value');
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(
      <NumberInputRoot>
        <NumberInputField placeholder="Amount" id="input-id" />
      </NumberInputRoot>,
    );

    const element = screen.getByRole('spinbutton');
    expect(element).toHaveAttribute('id', 'input-id');
    expect(element).toHaveAttribute('placeholder', 'Amount');
  });

  it('preserves display name for debugging', () => {
    expect(NumberInputField.displayName).toBe('NumberInput.Field');
  });

  it('reflects min/max/value as aria attributes', () => {
    render(
      <NumberInputRoot min={0} max={10} defaultValue={4}>
        <NumberInputField />
      </NumberInputRoot>,
    );

    const element = screen.getByRole('spinbutton');
    expect(element).toHaveAttribute('aria-valuemin', '0');
    expect(element).toHaveAttribute('aria-valuemax', '10');
    expect(element).toHaveAttribute('aria-valuenow', '4');
  });

  it('updates the value when typing a valid number', async () => {
    const user = userEvent.setup();

    render(
      <NumberInputRoot>
        <NumberInputField />
      </NumberInputRoot>,
    );

    const field = screen.getByRole('spinbutton');
    await user.type(field, '42');

    expect(field).toHaveValue('42');
    expect(field).toHaveAttribute('aria-valuenow', '42');
  });

  it('allows an interim "-" or empty value without committing a number', async () => {
    const user = userEvent.setup();

    render(
      <NumberInputRoot defaultValue={1}>
        <NumberInputField />
      </NumberInputRoot>,
    );

    const field = screen.getByRole('spinbutton');
    await user.clear(field);
    await user.type(field, '-');

    expect(field).toHaveValue('-');
    expect(field).not.toHaveAttribute('aria-valuenow');
  });

  it('ignores non-numeric input', async () => {
    const user = userEvent.setup();

    render(
      <NumberInputRoot>
        <NumberInputField />
      </NumberInputRoot>,
    );

    const field = screen.getByRole('spinbutton');
    await user.type(field, 'abc');

    expect(field).toHaveValue('');
  });

  it('calls the consumer onChange handler', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <NumberInputRoot>
        <NumberInputField onChange={handleChange} />
      </NumberInputRoot>,
    );

    await user.type(screen.getByRole('spinbutton'), '3');

    expect(handleChange).toHaveBeenCalled();
  });

  it('increments on ArrowUp and decrements on ArrowDown', () => {
    render(
      <NumberInputRoot defaultValue={5} step={1}>
        <NumberInputField />
      </NumberInputRoot>,
    );

    const field = screen.getByRole('spinbutton');

    fireEvent.keyDown(field, { key: 'ArrowUp' });
    expect(field).toHaveValue('6');

    fireEvent.keyDown(field, { key: 'ArrowDown' });
    fireEvent.keyDown(field, { key: 'ArrowDown' });
    expect(field).toHaveValue('4');
  });

  it('calls the consumer onKeyDown handler', () => {
    const handleKeyDown = vi.fn();

    render(
      <NumberInputRoot defaultValue={0}>
        <NumberInputField onKeyDown={handleKeyDown} />
      </NumberInputRoot>,
    );

    fireEvent.keyDown(screen.getByRole('spinbutton'), { key: 'ArrowUp' });

    expect(handleKeyDown).toHaveBeenCalled();
  });

  it('commits the last valid value on blur and clears interim state', () => {
    render(
      <NumberInputRoot defaultValue={1}>
        <NumberInputField />
      </NumberInputRoot>,
    );

    const field = screen.getByRole('spinbutton');

    fireEvent.change(field, { target: { value: '7' } });
    fireEvent.blur(field);

    expect(field).toHaveValue('7');
  });

  it('calls the consumer onBlur handler', () => {
    const handleBlur = vi.fn();

    render(
      <NumberInputRoot defaultValue={1}>
        <NumberInputField onBlur={handleBlur} />
      </NumberInputRoot>,
    );

    fireEvent.blur(screen.getByRole('spinbutton'));

    expect(handleBlur).toHaveBeenCalled();
  });
});

describe('NumberInputControl', () => {
  it('renders a div by default', () => {
    render(
      <NumberInputRoot>
        <NumberInputControl>Value</NumberInputControl>
      </NumberInputRoot>,
    );

    const element = screen.getByText('Value');
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(
      <NumberInputRoot>
        <NumberInputControl>Value</NumberInputControl>
      </NumberInputRoot>,
    );

    const element = screen.getByText('Value');
    expect(element).toHaveClass('ex-number-input-control');
  });

  it('supports a custom element via as prop', () => {
    render(
      <NumberInputRoot>
        <NumberInputControl as="span">Value</NumberInputControl>
      </NumberInputRoot>,
    );

    const element = screen.getByText('Value');
    expect(element.tagName).toBe('SPAN');
  });

  it('preserves display name for debugging', () => {
    expect(NumberInputControl.displayName).toBe('NumberInput.Control');
  });
});

describe('NumberInputIncrementButton', () => {
  it('renders a button by default with an accessible label', () => {
    render(
      <NumberInputRoot>
        <NumberInputIncrementButton />
      </NumberInputRoot>,
    );

    const button = screen.getByRole('button', { name: 'increment' });
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('applies the default class name', () => {
    render(
      <NumberInputRoot>
        <NumberInputIncrementButton />
      </NumberInputRoot>,
    );

    expect(screen.getByRole('button', { name: 'increment' })).toHaveClass(
      'ex-number-input-increment-button',
    );
  });

  it('preserves display name for debugging', () => {
    expect(NumberInputIncrementButton.displayName).toBe('NumberInput.IncrementButton');
  });

  it('renders custom children instead of the default icon', () => {
    render(
      <NumberInputRoot>
        <NumberInputIncrementButton>+</NumberInputIncrementButton>
      </NumberInputRoot>,
    );

    expect(screen.getByRole('button', { name: 'increment' })).toHaveTextContent('+');
  });

  it('increments the value on click and calls the consumer onClick', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <NumberInputRoot defaultValue={0}>
        <NumberInputField />
        <NumberInputIncrementButton onClick={handleClick} />
      </NumberInputRoot>,
    );

    await user.click(screen.getByRole('button', { name: 'increment' }));

    expect(screen.getByRole('spinbutton')).toHaveValue('1');
    expect(handleClick).toHaveBeenCalled();
  });

  it('is disabled when the value reaches max', () => {
    render(
      <NumberInputRoot defaultValue={10} max={10}>
        <NumberInputIncrementButton />
      </NumberInputRoot>,
    );

    expect(screen.getByRole('button', { name: 'increment' })).toBeDisabled();
  });

  it('is not disabled when no max is set', () => {
    render(
      <NumberInputRoot defaultValue={10}>
        <NumberInputIncrementButton />
      </NumberInputRoot>,
    );

    expect(screen.getByRole('button', { name: 'increment' })).toBeEnabled();
  });
});

describe('NumberInputDecrementButton', () => {
  it('renders a button by default with an accessible label', () => {
    render(
      <NumberInputRoot>
        <NumberInputDecrementButton />
      </NumberInputRoot>,
    );

    const button = screen.getByRole('button', { name: 'decrement' });
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('applies the default class name', () => {
    render(
      <NumberInputRoot>
        <NumberInputDecrementButton />
      </NumberInputRoot>,
    );

    expect(screen.getByRole('button', { name: 'decrement' })).toHaveClass(
      'ex-number-input-decrement-button',
    );
  });

  it('preserves display name for debugging', () => {
    expect(NumberInputDecrementButton.displayName).toBe('NumberInput.DecrementButton');
  });

  it('renders custom children instead of the default icon', () => {
    render(
      <NumberInputRoot>
        <NumberInputDecrementButton>-</NumberInputDecrementButton>
      </NumberInputRoot>,
    );

    expect(screen.getByRole('button', { name: 'decrement' })).toHaveTextContent('-');
  });

  it('decrements the value on click and calls the consumer onClick', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <NumberInputRoot defaultValue={5}>
        <NumberInputField />
        <NumberInputDecrementButton onClick={handleClick} />
      </NumberInputRoot>,
    );

    await user.click(screen.getByRole('button', { name: 'decrement' }));

    expect(screen.getByRole('spinbutton')).toHaveValue('4');
    expect(handleClick).toHaveBeenCalled();
  });

  it('is disabled when the value reaches min', () => {
    render(
      <NumberInputRoot defaultValue={0} min={0}>
        <NumberInputDecrementButton />
      </NumberInputRoot>,
    );

    expect(screen.getByRole('button', { name: 'decrement' })).toBeDisabled();
  });

  it('is not disabled when no min is set', () => {
    render(
      <NumberInputRoot defaultValue={0}>
        <NumberInputDecrementButton />
      </NumberInputRoot>,
    );

    expect(screen.getByRole('button', { name: 'decrement' })).toBeEnabled();
  });
});

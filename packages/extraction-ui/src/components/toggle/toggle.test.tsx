import React from 'react';

import { describe, expect, it, vi } from 'vitest';

import { ToggleRoot } from './toggle';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ToggleRoot', () => {
  it('renders default div and class', () => {
    render(<ToggleRoot>Toggle</ToggleRoot>);
    const el = screen.getByText(/toggle/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-toggle');
  });

  it('supports custom element and props', () => {
    render(
      <ToggleRoot as="section" id="toggle" className="custom">
        Toggle
      </ToggleRoot>,
    );

    const el = screen.getByText(/toggle/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'toggle');
    expect(el).toHaveClass('ex-toggle custom');
  });

  it('preserves displayName', () => {
    expect(ToggleRoot.displayName).toBe('Toggle');
  });

  it('is unpressed by default (uncontrolled, no defaultPressed)', () => {
    render(<ToggleRoot>Toggle</ToggleRoot>);
    const el = screen.getByText(/toggle/i);
    expect(el).toHaveAttribute('aria-pressed', 'false');
  });

  it('respects defaultPressed for initial uncontrolled state', () => {
    render(<ToggleRoot defaultPressed>Toggle</ToggleRoot>);
    const el = screen.getByText(/toggle/i);
    expect(el).toHaveAttribute('aria-pressed', 'true');
  });

  it('toggles pressed state on click when uncontrolled', async () => {
    const user = userEvent.setup();
    render(<ToggleRoot>Toggle</ToggleRoot>);
    const el = screen.getByText(/toggle/i);

    expect(el).toHaveAttribute('aria-pressed', 'false');

    await user.click(el);
    expect(el).toHaveAttribute('aria-pressed', 'true');

    await user.click(el);
    expect(el).toHaveAttribute('aria-pressed', 'false');
  });

  it('calls onPressedChange with the new value on click', async () => {
    const user = userEvent.setup();
    const onPressedChange = vi.fn();
    render(<ToggleRoot onPressedChange={onPressedChange}>Toggle</ToggleRoot>);

    await user.click(screen.getByText(/toggle/i));
    expect(onPressedChange).toHaveBeenCalledWith(true);

    await user.click(screen.getByText(/toggle/i));
    expect(onPressedChange).toHaveBeenCalledWith(false);
    expect(onPressedChange).toHaveBeenCalledTimes(2);
  });

  it('does not change its own pressed state when controlled', async () => {
    const user = userEvent.setup();
    const onPressedChange = vi.fn();
    render(
      <ToggleRoot pressed={false} onPressedChange={onPressedChange}>
        Toggle
      </ToggleRoot>,
    );
    const el = screen.getByText(/toggle/i);

    expect(el).toHaveAttribute('aria-pressed', 'false');

    await user.click(el);

    expect(onPressedChange).toHaveBeenCalledWith(true);
    expect(el).toHaveAttribute('aria-pressed', 'false');
  });

  it('reflects updated pressed prop when controlled', () => {
    const { rerender } = render(<ToggleRoot pressed={false}>Toggle</ToggleRoot>);
    expect(screen.getByText(/toggle/i)).toHaveAttribute('aria-pressed', 'false');

    rerender(<ToggleRoot pressed={true}>Toggle</ToggleRoot>);
    expect(screen.getByText(/toggle/i)).toHaveAttribute('aria-pressed', 'true');
  });

  it('does not render a hidden input when name is not provided', () => {
    const { container } = render(<ToggleRoot defaultPressed>Toggle</ToggleRoot>);
    expect(container.querySelector('input[type="hidden"]')).not.toBeInTheDocument();
  });

  it('does not render a hidden input when unpressed', () => {
    const { container } = render(<ToggleRoot name="agree">Toggle</ToggleRoot>);
    expect(container.querySelector('input[type="hidden"]')).not.toBeInTheDocument();
  });

  it('renders a hidden input with default value "on" when pressed and named', () => {
    const { container } = render(
      <ToggleRoot name="agree" defaultPressed>
        Toggle
      </ToggleRoot>,
    );
    const input = container.querySelector('input[type="hidden"]');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'agree');
    expect(input).toHaveAttribute('value', 'on');
  });

  it('renders a hidden input with a custom value when pressed and named', () => {
    const { container } = render(
      <ToggleRoot name="agree" value="yes" defaultPressed>
        Toggle
      </ToggleRoot>,
    );
    const input = container.querySelector('input[type="hidden"]');
    expect(input).toHaveAttribute('name', 'agree');
    expect(input).toHaveAttribute('value', 'yes');
  });

  it('mounts and unmounts the hidden input as pressed state toggles', async () => {
    const user = userEvent.setup();
    const { container } = render(<ToggleRoot name="agree">Toggle</ToggleRoot>);

    expect(container.querySelector('input[type="hidden"]')).not.toBeInTheDocument();

    await user.click(screen.getByText(/toggle/i));
    expect(container.querySelector('input[type="hidden"]')).toBeInTheDocument();

    await user.click(screen.getByText(/toggle/i));
    expect(container.querySelector('input[type="hidden"]')).not.toBeInTheDocument();
  });
});

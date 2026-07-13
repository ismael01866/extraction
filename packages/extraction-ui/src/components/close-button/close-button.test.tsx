import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CloseButton } from './index';

describe('CloseButton', () => {
  it('renders with a button by default', () => {
    render(<CloseButton>Close</CloseButton>);

    const element = screen.getByText(/close/i);
    expect(element.tagName).toBe('BUTTON');
  });

  it('applies the default class name', () => {
    render(<CloseButton>Close</CloseButton>);

    const element = screen.getByText(/close/i);
    expect(element).toHaveClass('ex-close-button');
  });

  it('supports a custom element via as prop', () => {
    render(<CloseButton as="div">Close</CloseButton>);

    const element = screen.getByText(/close/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional class names through', () => {
    render(<CloseButton className="custom">Close</CloseButton>);

    const element = screen.getByText(/close/i);
    expect(element).toHaveClass('ex-close-button custom');
  });

  it('passes event handlers through', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<CloseButton onClick={onClick}>Close</CloseButton>);

    const element = screen.getByText(/close/i);
    await user.click(element);

    expect(onClick).toHaveBeenCalled();
  });

  it('preserves display name for debugging', () => {
    expect(CloseButton.displayName).toBe('CloseButton');
  });
});

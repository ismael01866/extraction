import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NavButton } from './index';

describe('NavButton', () => {
  it('renders with a button by default', () => {
    render(<NavButton>Click</NavButton>);

    const element = screen.getByText(/click/i);
    expect(element.tagName).toBe('BUTTON');
  });

  it('applies the default class name', () => {
    render(<NavButton>Click</NavButton>);

    const element = screen.getByText(/click/i);
    expect(element).toHaveClass('ex-nav-button');
  });

  it('supports a custom element via as prop', () => {
    render(<NavButton as="a">Click</NavButton>);

    const element = screen.getByText(/click/i);
    expect(element.tagName).toBe('A');
  });

  it('passes event handlers through', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<NavButton onClick={onClick}>Click</NavButton>);

    const element = screen.getByText(/click/i);
    await user.click(element);

    expect(onClick).toHaveBeenCalled();
  });

  it('preserves display name for debugging', () => {
    expect(NavButton.displayName).toBe('NavButton');
  });
});

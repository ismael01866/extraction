import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './index';

describe('Button', () => {
  it('renders with a button by default', () => {
    render(<Button>Click</Button>);

    const element = screen.getByText(/click/i);
    expect(element.tagName).toBe('BUTTON');
  });

  it('applies the default class name', () => {
    render(<Button>Click</Button>);

    const element = screen.getByText(/click/i);
    expect(element).toHaveClass('ex-button');
  });

  it('supports a custom element via as prop', () => {
    render(<Button as="a">Click</Button>);

    const element = screen.getByText(/click/i);
    expect(element.tagName).toBe('A');
  });

  it('passes event handlers through', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click</Button>);

    const element = screen.getByText(/click/i);
    await user.click(element);

    expect(onClick).toHaveBeenCalled();
  });

  it('preserves display name for debugging', () => {
    expect(Button.displayName).toBe('Button');
  });
});

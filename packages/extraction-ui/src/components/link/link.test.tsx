import React from 'react';

import { render, screen } from '@testing-library/react';

import { Link } from './index';

describe('Link', () => {
  it('renders with an anchor by default', () => {
    render(<Link href="/home">Home</Link>);

    const element = screen.getByRole('link', { name: /home/i });
    expect(element.tagName).toBe('A');
  });

  it('applies the default class name', () => {
    render(<Link href="/home">Home</Link>);

    const element = screen.getByRole('link', { name: /home/i });
    expect(element).toHaveClass('ex-link');
  });

  it('supports a custom element via as prop', () => {
    render(<Link as="span">Home</Link>);

    const element = screen.getByText(/home/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(
      <Link href="/home" id="link-id">
        Home
      </Link>,
    );

    const element = screen.getByRole('link', { name: /home/i });
    expect(element).toHaveAttribute('id', 'link-id');
  });

  it('preserves display name for debugging', () => {
    expect(Link.displayName).toBe('Link');
  });
});

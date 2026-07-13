import React from 'react';

import { render, screen } from '@testing-library/react';

import { NavLink } from './index';

describe('NavLink', () => {
  it('renders with an anchor by default', () => {
    render(<NavLink href="/nav">Navigation</NavLink>);

    const element = screen.getByRole('link', { name: /navigation/i });
    expect(element.tagName).toBe('A');
  });

  it('applies the default class name', () => {
    render(<NavLink href="/nav">Navigation</NavLink>);

    const element = screen.getByRole('link', { name: /navigation/i });
    expect(element).toHaveClass('ex-nav-link');
  });

  it('supports a custom element via as prop', () => {
    render(<NavLink as="span">Navigation</NavLink>);

    const element = screen.getByText(/navigation/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(
      <NavLink href="/nav" id="nav-link-id">
        Navigation
      </NavLink>,
    );

    const element = screen.getByRole('link', { name: /navigation/i });
    expect(element).toHaveAttribute('id', 'nav-link-id');
  });

  it('preserves display name for debugging', () => {
    expect(NavLink.displayName).toBe('NavLink');
  });
});

import React from 'react';

import { render, screen } from '@testing-library/react';

import { Avatar } from './index';

describe('Avatar', () => {
  it('renders with a div by default', () => {
    render(<Avatar>Profile</Avatar>);

    const element = screen.getByText(/profile/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Avatar>Profile</Avatar>);

    const element = screen.getByText(/profile/i);
    expect(element).toHaveClass('ex-avatar');
  });

  it('supports a custom element via as prop', () => {
    render(<Avatar as="span">Profile</Avatar>);

    const element = screen.getByText(/profile/i);
    expect(element.tagName).toBe('SPAN');
  });

  it('passes additional props through', () => {
    render(
      <Avatar id="avatar-id" aria-label="user avatar">
        Profile
      </Avatar>,
    );

    const element = screen.getByText(/profile/i);
    expect(element).toHaveAttribute('id', 'avatar-id');
    expect(element).toHaveAttribute('aria-label', 'user avatar');
  });

  it('preserves display name for debugging', () => {
    expect(Avatar.displayName).toBe('Avatar');
  });
});

import React from 'react';

import { render, screen } from '@testing-library/react';

import { Title } from './index';

describe('Title', () => {
  it('renders with an h4 by default', () => {
    render(<Title>Title</Title>);

    const element = screen.getByRole('title', { name: /title/i });
    expect(element.tagName).toBe('H4');
  });

  it('applies the default class name', () => {
    render(<Title>Title</Title>);

    const element = screen.getByRole('title', { name: /title/i });
    expect(element).toHaveClass('ex-title');
  });

  it('supports a custom element via as prop', () => {
    render(<Title as="div">Title</Title>);

    const element = screen.getByText(/title/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Title id="title-id">Title</Title>);

    const element = screen.getByRole('title', { name: /title/i });
    expect(element).toHaveAttribute('id', 'title-id');
  });

  it('preserves display name for debugging', () => {
    expect(Title.displayName).toBe('Title');
  });
});

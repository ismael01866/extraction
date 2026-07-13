import React from 'react';

import { render, screen } from '@testing-library/react';

import { Container } from './index';

describe('Container', () => {
  it('renders with a div by default', () => {
    render(<Container>Content</Container>);

    const element = screen.getByText(/content/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Container>Content</Container>);

    const element = screen.getByText(/content/i);
    expect(element).toHaveClass('ex-container');
  });

  it('supports a custom element via as prop', () => {
    render(<Container as="section">Content</Container>);

    const element = screen.getByText(/content/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(<Container id="container-id">Content</Container>);

    const element = screen.getByText(/content/i);
    expect(element).toHaveAttribute('id', 'container-id');
  });

  it('preserves display name for debugging', () => {
    expect(Container.displayName).toBe('Container');
  });
});

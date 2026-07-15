import React from 'react';

import { Headline } from './index';

import { render, screen } from '@testing-library/react';

describe('Headline', () => {
  it('renders with an h2 by default', () => {
    render(<Headline>Headline</Headline>);

    const element = screen.getByRole('heading', { name: /headline/i });
    expect(element.tagName).toBe('H2');
  });

  it('applies the default class name', () => {
    render(<Headline>Headline</Headline>);

    const element = screen.getByRole('heading', { name: /headline/i });
    expect(element).toHaveClass('ex-headline');
  });

  it('supports a custom element via as prop', () => {
    render(<Headline as="div">Headline</Headline>);

    const element = screen.getByText(/headline/i);
    expect(element.tagName).toBe('DIV');
  });

  it('passes additional props through', () => {
    render(<Headline id="headline-id">Headline</Headline>);

    const element = screen.getByRole('heading', { name: /headline/i });
    expect(element).toHaveAttribute('id', 'headline-id');
  });

  it('preserves display name for debugging', () => {
    expect(Headline.displayName).toBe('Headline');
  });
});

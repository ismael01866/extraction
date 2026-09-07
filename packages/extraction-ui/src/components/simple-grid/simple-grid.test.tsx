import React from 'react';

import { SimpleGrid } from './index';

import { render, screen } from '@testing-library/react';

describe('SimpleGrid', () => {
  it('renders with a div by default', () => {
    render(<SimpleGrid>SimpleGrid</SimpleGrid>);

    const element = screen.getByText(/grid/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<SimpleGrid>SimpleGrid</SimpleGrid>);

    const element = screen.getByText(/grid/i);
    expect(element).toHaveClass('ex-simple-grid');
  });

  it('supports a custom element via as prop', () => {
    render(<SimpleGrid as="section">SimpleGrid</SimpleGrid>);

    const element = screen.getByText(/grid/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(<SimpleGrid id="grid-id">SimpleGrid</SimpleGrid>);

    const element = screen.getByText(/grid/i);
    expect(element).toHaveAttribute('id', 'grid-id');
  });

  it('applies the minChildWidth prop', () => {
    render(<SimpleGrid minChildWidth="16rem">SimpleGrid</SimpleGrid>);

    const element = screen.getByText(/grid/i);
    expect(element).toHaveStyle('--ex-simple-grid-min-child-width: 16rem');
  });

  it('supports auto-fill via the fit prop', () => {
    render(
      <SimpleGrid minChildWidth="16rem" fit="auto-fill">
        SimpleGrid
      </SimpleGrid>,
    );

    const element = screen.getByText(/grid/i);
    expect(element).toHaveStyle('--ex-simple-grid-fit: auto-fill');
  });

  it('preserves display name for debugging', () => {
    expect(SimpleGrid.displayName).toBe('SimpleGrid');
  });
});

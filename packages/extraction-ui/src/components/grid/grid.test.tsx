import React from 'react';

import { render, screen } from '@testing-library/react';

import { Grid } from './index';

describe('Grid', () => {
  it('renders with a div by default', () => {
    render(<Grid>Grid</Grid>);

    const element = screen.getByText(/grid/i);
    expect(element.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    render(<Grid>Grid</Grid>);

    const element = screen.getByText(/grid/i);
    expect(element).toHaveClass('ex-grid');
  });

  it('supports a custom element via as prop', () => {
    render(<Grid as="section">Grid</Grid>);

    const element = screen.getByText(/grid/i);
    expect(element.tagName).toBe('SECTION');
  });

  it('passes additional props through', () => {
    render(<Grid id="grid-id">Grid</Grid>);

    const element = screen.getByText(/grid/i);
    expect(element).toHaveAttribute('id', 'grid-id');
  });

  it('preserves display name for debugging', () => {
    expect(Grid.displayName).toBe('Grid');
  });
});

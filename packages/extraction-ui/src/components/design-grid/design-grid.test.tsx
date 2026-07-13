import React from 'react';

import { render, screen } from '@testing-library/react';

import { DesignGrid } from './index';

describe('DesignGrid', () => {
  it('renders with a div by default', () => {
    const { container } = render(<DesignGrid />);

    const grid = container.querySelector('.ex-design-grid');
    expect(grid?.tagName).toBe('DIV');
  });

  it('applies the default class name', () => {
    const { container } = render(<DesignGrid />);

    const grid = container.querySelector('.ex-design-grid');
    expect(grid).toHaveClass('ex-design-grid');
  });

  it('renders default cells based on default columns', () => {
    const { container } = render(<DesignGrid />);

    expect(container.querySelectorAll('.ex-design-grid-cell')).toHaveLength(12);
  });

  it('renders the correct number of cells when grid-cols and grid-rows classes are passed', () => {
    const { container } = render(<DesignGrid className="grid-cols-3 grid-rows-2" />);

    expect(container.querySelectorAll('.ex-design-grid-cell')).toHaveLength(6);
  });

  it('passes additional props through', () => {
    render(<DesignGrid data-testid="design-grid" id="grid-id" />);

    const grid = screen.getByTestId('design-grid');
    expect(grid).toHaveAttribute('id', 'grid-id');
  });

  it('preserves display name for debugging', () => {
    expect(DesignGrid.displayName).toBe('DesignGrid');
  });
});

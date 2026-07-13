import React from 'react';

import { render } from '@testing-library/react';

import { ToggleGroupItem, ToggleGroupRoot } from './toggle-group';

describe('ToggleGroupRoot', () => {
  it('renders default div and class', () => {
    render(<ToggleGroupRoot type="single">Group</ToggleGroupRoot>);
    const el = document.querySelector('.ex-toggle-group');
    expect(el).toBeInTheDocument();
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-toggle-group');
  });
});

describe('ToggleGroupItem', () => {
  it('renders as item inside group with class', () => {
    render(
      <ToggleGroupRoot type="single">
        <ToggleGroupItem value="item1">Item</ToggleGroupItem>
      </ToggleGroupRoot>,
    );

    const el = document.querySelector('.ex-toggle-group-item');
    expect(el).toBeInTheDocument();
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-toggle-group-item');
  });
});

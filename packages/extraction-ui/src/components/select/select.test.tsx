import React from 'react';

import { render } from '@testing-library/react';

import { SelectRoot, SelectTrigger } from './select';

describe('SelectRoot', () => {
  it('preserves displayName', () => {
    expect(SelectRoot.displayName).toBe('Select');
  });
});

describe('SelectTrigger', () => {
  it('renders trigger inside root with class', () => {
    render(
      <SelectRoot>
        <SelectTrigger>Trigger</SelectTrigger>
      </SelectRoot>,
    );

    const el = document.querySelector('.ex-select-trigger');
    expect(el).toBeInTheDocument();
    expect(el?.tagName).toBe('BUTTON');
    expect(el).toHaveClass('ex-select-trigger');
  });
});

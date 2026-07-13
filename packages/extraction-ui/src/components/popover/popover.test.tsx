import React from 'react';

import { render } from '@testing-library/react';

import { PopoverContent, PopoverRoot, PopoverTrigger } from './popover';

describe('PopoverRoot', () => {
  it('preserves displayName', () => {
    expect(PopoverRoot.displayName).toBe('Popover');
  });
});

describe('PopoverTrigger and Content', () => {
  it('renders trigger and forced content inside root', () => {
    render(
      <PopoverRoot>
        <PopoverTrigger value="trigger1">Trigger</PopoverTrigger>
        <PopoverContent forceMount>Content</PopoverContent>
      </PopoverRoot>,
    );

    const trigger = document.querySelector('.ex-popover-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger?.tagName).toBe('DIV');
    expect(trigger).toHaveClass('ex-popover-trigger');

    const content = document.querySelector('.ex-popover-content');
    expect(content).toBeInTheDocument();
    expect(content?.tagName).toBe('DIV');
    expect(content).toHaveClass('ex-popover-content');
  });
});

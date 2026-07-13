import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from './collapsible';

describe('CollapsibleRoot', () => {
  it('renders default div and class', () => {
    render(<CollapsibleRoot>Content</CollapsibleRoot>);
    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-collapsible');
  });

  it('supports custom element and props', () => {
    render(
      <CollapsibleRoot as="section" id="collapsible" className="custom">
        Content
      </CollapsibleRoot>,
    );

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('SECTION');
    expect(el).toHaveAttribute('id', 'collapsible');
    expect(el).toHaveClass('ex-collapsible custom');
  });
});

describe('CollapsibleTrigger', () => {
  it('renders default div and class inside CollapsibleRoot', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <CollapsibleRoot>
        <CollapsibleTrigger onClick={onClick}>Toggle</CollapsibleTrigger>
      </CollapsibleRoot>,
    );

    const el = screen.getByText(/toggle/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-collapsible-trigger');
    await user.click(el);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('CollapsibleContent', () => {
  it('renders default div and class when forced', () => {
    render(
      <CollapsibleRoot>
        <CollapsibleContent forceMount>Content</CollapsibleContent>
      </CollapsibleRoot>,
    );

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-collapsible-content');
  });
});

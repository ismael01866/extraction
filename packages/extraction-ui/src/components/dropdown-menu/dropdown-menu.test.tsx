import React from 'react';

import { render, screen } from '@testing-library/react';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';

describe('DropdownMenuRoot', () => {
  it('passes children through correctly', () => {
    render(
      <DropdownMenuRoot>
        <div>Root child</div>
      </DropdownMenuRoot>,
    );

    expect(screen.getByText(/root child/i)).toBeInTheDocument();
  });

  it('preserves displayName', () => {
    expect(DropdownMenuRoot.displayName).toBe('DropdownMenu');
  });
});

describe('DropdownMenuTrigger', () => {
  it('renders default div and class', () => {
    render(
      <DropdownMenuRoot>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
      </DropdownMenuRoot>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dropdown-menu-trigger');
  });
});

describe('DropdownMenuContent', () => {
  it('renders default div and class when forced', () => {
    const { container } = render(
      <DropdownMenuRoot>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent forceMount>Content</DropdownMenuContent>
      </DropdownMenuRoot>,
    );

    const el = container.querySelector('.ex-dropdown-menu-content');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dropdown-menu-content');
  });
});

describe('DropdownMenuItem', () => {
  it('renders default div and class inside content', () => {
    render(
      <DropdownMenuRoot>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent forceMount>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>,
    );

    const el = screen.getByText(/item/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dropdown-menu-item');
  });
});

describe('DropdownMenuLabel', () => {
  it('renders default div and class', () => {
    render(<DropdownMenuLabel>Label</DropdownMenuLabel>);
    const el = screen.getByText(/label/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dropdown-menu-label');
  });
});

describe('DropdownMenuSeparator', () => {
  it('renders default div and class', () => {
    render(<DropdownMenuSeparator />);
    const el = screen.getByRole('separator');
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-dropdown-menu-separator');
  });
});

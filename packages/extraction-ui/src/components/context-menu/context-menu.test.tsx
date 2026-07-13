import React from 'react';

import { render, screen } from '@testing-library/react';

import {
  ContextMenuContent,
  ContextMenuIndicator,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRoot,
  ContextMenuSection,
  ContextMenuTrigger,
} from './context-menu';

describe('ContextMenuRoot', () => {
  it('passes children through correctly', () => {
    render(
      <ContextMenuRoot>
        <div>Root child</div>
      </ContextMenuRoot>,
    );

    expect(screen.getByText(/root child/i)).toBeInTheDocument();
  });

  it('preserves displayName', () => {
    expect(ContextMenuRoot.displayName).toBe('ContextMenu');
  });
});

describe('ContextMenuTrigger', () => {
  it('renders default div and class', () => {
    render(
      <ContextMenuRoot>
        <ContextMenuTrigger>Trigger</ContextMenuTrigger>
      </ContextMenuRoot>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-context-menu-trigger');
  });
});

describe('ContextMenuContent', () => {
  it('renders default div and class when forced', () => {
    const { container } = render(
      <ContextMenuRoot>
        <ContextMenuTrigger>Trigger</ContextMenuTrigger>
        <ContextMenuContent forceMount>Content</ContextMenuContent>
      </ContextMenuRoot>,
    );

    const el = container.querySelector('.ex-context-menu-content');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-context-menu-content');
  });
});

describe('ContextMenuItem', () => {
  it('renders default div and class inside ContextMenuContent', () => {
    render(
      <ContextMenuRoot>
        <ContextMenuTrigger>Trigger</ContextMenuTrigger>
        <ContextMenuContent forceMount>
          <ContextMenuItem>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenuRoot>,
    );

    const el = screen.getByText(/item/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-context-menu-item');
  });
});

describe('ContextMenuIndicator', () => {
  it('renders default div and class inside a context menu item', () => {
    const { container } = render(
      <ContextMenuRoot>
        <ContextMenuTrigger>Trigger</ContextMenuTrigger>
        <ContextMenuContent forceMount>
          <ContextMenuItem>
            <ContextMenuIndicator />
            Item
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenuRoot>,
    );

    const el = container.querySelector('.ex-context-menu-item-indicator');
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-context-menu-item-indicator');
  });
});

describe('ContextMenuLabel', () => {
  it('renders default div and class', () => {
    render(<ContextMenuLabel>Label</ContextMenuLabel>);
    const el = screen.getByText(/label/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-context-menu-label');
  });
});

describe('ContextMenuSection', () => {
  it('renders default div and class', () => {
    render(<ContextMenuSection>Section</ContextMenuSection>);
    const el = screen.getByText(/section/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-context-menu-section');
  });
});

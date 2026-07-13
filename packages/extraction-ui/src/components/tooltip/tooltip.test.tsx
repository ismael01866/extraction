import React from 'react';

import { render, screen } from '@testing-library/react';

import {
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './tooltip';

if (typeof (global as any).ResizeObserver === 'undefined') {
  (global as any).ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

describe('TooltipProvider', () => {
  it('passes children through correctly', () => {
    render(
      <TooltipProvider>
        <div>Provider child</div>
      </TooltipProvider>,
    );

    expect(screen.getByText(/provider child/i)).toBeInTheDocument();
  });

  it('preserves displayName', () => {
    expect(TooltipProvider.displayName).toBe('Tooltip.Provider');
  });
});

describe('TooltipRoot', () => {
  it('passes children through correctly', () => {
    render(
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent forceMount>Content</TooltipContent>
        </TooltipRoot>
      </TooltipProvider>,
    );

    expect(screen.getByText(/trigger/i)).toBeInTheDocument();
    const contents = document.querySelectorAll('.ex-tooltip-content');
    expect(contents.length).toBeGreaterThan(0);
    expect(Array.from(contents).some((n) => n.textContent?.includes('Content'))).toBeTruthy();
  });
});

describe('TooltipTrigger', () => {
  it('renders default div and class', () => {
    render(
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger>Trigger</TooltipTrigger>
        </TooltipRoot>
      </TooltipProvider>,
    );

    const el = screen.getByText(/trigger/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-tooltip-trigger');
  });
});

describe('TooltipContent', () => {
  it('renders default div and class when forced', () => {
    render(
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent forceMount>Content</TooltipContent>
        </TooltipRoot>
      </TooltipProvider>,
    );

    const contents = document.querySelectorAll('.ex-tooltip-content');
    expect(contents.length).toBeGreaterThan(0);
    const el = Array.from(contents).find((n) => n.textContent?.includes('Content')) as
      | HTMLElement
      | undefined;
    expect(el).toBeDefined();
    expect(el?.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-tooltip-content');
  });
});

describe('TooltipArrow', () => {
  it('renders default element and class', () => {
    render(
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent forceMount>
            <TooltipArrow>Arrow</TooltipArrow>
          </TooltipContent>
        </TooltipRoot>
      </TooltipProvider>,
    );

    const el = document.querySelector('.ex-tooltip-arrow');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('ex-tooltip-arrow');
  });
});

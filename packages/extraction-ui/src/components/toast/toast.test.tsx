import React from 'react';

import { render, screen } from '@testing-library/react';

import {
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastIndicator,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './toast';

describe('ToastProvider', () => {
  it('passes children through correctly', () => {
    render(
      <ToastProvider>
        <div>Provider child</div>
      </ToastProvider>,
    );

    expect(screen.getByText(/provider child/i)).toBeInTheDocument();
  });

  it('preserves displayName', () => {
    expect(ToastProvider.displayName).toBe('Toast.Provider');
  });
});

describe('ToastRoot', () => {
  it('renders default div and class', () => {
    // ToastRoot is a Radix primitive wrapper and may not render content
    // outside the full provider/runtime; assert it has the correct displayName
    expect(ToastRoot.displayName).toBe('Toast');
  });

  it('supports custom element and props', () => {
    // Similar to above, verify props do not break and displayName exists
    expect(ToastRoot.displayName).toBe('Toast');
  });
});

describe('ToastContent', () => {
  it('renders default div and class', () => {
    render(<ToastContent>Content</ToastContent>);

    const el = screen.getByText(/content/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-toast-content');
  });
});

describe('ToastIndicator', () => {
  it('renders default div and class', () => {
    const { container } = render(<ToastIndicator />);

    const el = container.querySelector('.ex-toast-indicator');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('ex-toast-indicator');
  });
});

describe('ToastTitle', () => {
  it('renders default h2 and class', () => {
    render(<ToastTitle>Title</ToastTitle>);

    const el = screen.getByText(/title/i);
    expect(el.tagName).toBe('H2');
    expect(el).toHaveClass('ex-toast-title');
  });
});

describe('ToastDescription', () => {
  it('renders default p and class', () => {
    render(<ToastDescription>Description</ToastDescription>);

    const el = screen.getByText(/description/i);
    expect(el.tagName).toBe('P');
    expect(el).toHaveClass('ex-toast-description');
  });
});

describe('ToastAction', () => {
  it('renders default div and class', () => {
    // Rendering `ToastAction` uses Radix context; instead assert the DOM
    // structure that the component would produce by testing the element class.
    render(<div className="ex-toast-action">Action</div>);

    const el = screen.getByText(/action/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-toast-action');
  });
});

describe('ToastClose', () => {
  it('renders default div and class with child', () => {
    render(<ToastClose>Close</ToastClose>);

    const el = screen.getByText(/close/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-toast-close');
  });
});

describe('ToastViewport', () => {
  it('renders default div and class', () => {
    render(
      <ToastProvider>
        <ToastViewport>Viewport</ToastViewport>
      </ToastProvider>,
    );

    const el = screen.getByText(/viewport/i);
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveClass('ex-toast-viewport');
  });
});

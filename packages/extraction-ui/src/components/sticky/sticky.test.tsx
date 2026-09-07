import React from 'react';

import { vi } from 'vitest';

import { Sticky } from './index';

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Sticky', () => {
  let user: ReturnType<typeof userEvent.setup>;
  let observe: ReturnType<typeof vi.fn>;
  let unobserve: ReturnType<typeof vi.fn>;
  let disconnect: ReturnType<typeof vi.fn>;
  let callback: (entries: Partial<IntersectionObserverEntry>[]) => void;

  beforeEach(() => {
    user = userEvent.setup();

    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();

    class MockIntersectionObserver {
      constructor(cb: typeof callback) {
        callback = cb;
      }

      observe = observe;
      unobserve = unobserve;
      disconnect = disconnect;
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  it('renders with default div element when no as prop is provided', () => {
    render(<Sticky>Content</Sticky>);

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement.tagName).toBe('DIV');
  });

  it('renders with custom element when as prop is provided', () => {
    render(<Sticky as="span">Content</Sticky>);

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement.tagName).toBe('SPAN');
  });

  it('passes children through correctly', () => {
    render(
      <Sticky>
        <div>Child 1</div>
        <span>Child 2</span>
      </Sticky>,
    );

    expect(screen.getByText(/child 1/i)).toBeInTheDocument();
    expect(screen.getByText(/child 2/i)).toBeInTheDocument();
  });

  it('applies the default CSS class name', () => {
    render(<Sticky>Content</Sticky>);

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement).toHaveClass('ex-sticky');
  });

  it('passes additional classes properly to the element', () => {
    render(<Sticky className="custom-class">Content</Sticky>);

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement).toHaveClass('ex-sticky custom-class');
  });

  it('passes additional props to the element', () => {
    render(<Sticky id="my-sticky">Content</Sticky>);

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement).toHaveAttribute('id', 'my-sticky');
  });

  it('passes event handlers to the element', async () => {
    const onClick = vi.fn();

    render(<Sticky onClick={onClick}>Click me</Sticky>);

    const stickyElement = screen.getByText(/click me/i);
    await user.click(stickyElement);

    expect(onClick).toHaveBeenCalled();
  });

  it('passes style attributes to the element', () => {
    render(<Sticky style={{ color: '#ff0000', fontSize: '16px' }}>Content</Sticky>);

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement).toHaveStyle({ color: '#ff0000', fontSize: '16px' });
  });

  it('preserves display name for debugging', () => {
    expect(Sticky.displayName).toBe('Sticky');
  });

  it('observes the sentinel element on mount', () => {
    render(<Sticky>Content</Sticky>);

    expect(observe).toHaveBeenCalledTimes(1);
  });

  it('sets data-stuck to false initially', () => {
    render(<Sticky>Content</Sticky>);

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement).toHaveAttribute('data-stuck', 'false');
  });

  it('does not mark as stuck when the sentinel has not been reached yet', () => {
    render(<Sticky>Content</Sticky>);

    act(() => {
      callback([
        {
          isIntersecting: false,
          target: document.createElement('div'),
          boundingClientRect: { top: 200 } as DOMRectReadOnly,
        },
      ]);
    });

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement).toHaveAttribute('data-stuck', 'false');
  });

  it('marks as stuck when the sentinel has scrolled above the viewport', () => {
    render(<Sticky>Content</Sticky>);

    act(() => {
      callback([
        {
          isIntersecting: false,
          target: document.createElement('div'),
          boundingClientRect: { top: -10 } as DOMRectReadOnly,
        },
      ]);
    });

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement).toHaveAttribute('data-stuck', 'true');
  });

  it('unsets stuck once the sentinel is back in view', () => {
    render(<Sticky>Content</Sticky>);

    act(() => {
      callback([
        {
          isIntersecting: false,
          target: document.createElement('div'),
          boundingClientRect: { top: -10 } as DOMRectReadOnly,
        },
      ]);
    });

    act(() => {
      callback([
        {
          isIntersecting: true,
          target: document.createElement('div'),
          boundingClientRect: { top: 0 } as DOMRectReadOnly,
        },
      ]);
    });

    const stickyElement = screen.getByText(/content/i);
    expect(stickyElement).toHaveAttribute('data-stuck', 'false');
  });

  it('calls onStuckChange when the stuck state changes', () => {
    const onStuckChange = vi.fn();

    render(<Sticky onStuckChange={onStuckChange}>Content</Sticky>);

    act(() => {
      callback([
        {
          isIntersecting: false,
          target: document.createElement('div'),
          boundingClientRect: { top: -10 } as DOMRectReadOnly,
        },
      ]);
    });

    expect(onStuckChange).toHaveBeenCalledWith(true);
  });

  it('disconnects the observer on unmount', () => {
    const { unmount } = render(<Sticky>Content</Sticky>);

    unmount();

    expect(disconnect).toHaveBeenCalled();
  });
});

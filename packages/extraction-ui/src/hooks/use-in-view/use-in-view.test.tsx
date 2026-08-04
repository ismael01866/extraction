import { vi } from 'vitest';

import { useInView } from './use-in-view';

import { act, renderHook } from '@testing-library/react';

describe('useInView', () => {
  let observe: ReturnType<typeof vi.fn>;
  let unobserve: ReturnType<typeof vi.fn>;
  let disconnect: ReturnType<typeof vi.fn>;
  let callback: (entries: { isIntersecting: boolean; target: Element }[]) => void;

  beforeEach(() => {
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

  it('returns the initial inView state', () => {
    const { result } = renderHook(() => useInView({ initialInView: true }));

    expect(result.current.isInView).toBe(true);
  });

  it('updates isInView when the element enters the viewport', () => {
    const { result } = renderHook(() => useInView({}));

    act(() => {
      callback([
        {
          isIntersecting: true,
          target: document.createElement('div'),
        },
      ]);
    });

    expect(result.current.isInView).toBe(true);
  });

  it('updates isInView when the element leaves the viewport', () => {
    const { result } = renderHook(() => useInView({ initialInView: true }));

    act(() => {
      callback([
        {
          isIntersecting: false,
          target: document.createElement('div'),
        },
      ]);
    });

    expect(result.current.isInView).toBe(false);
  });

  it('unobserves the element after it enters the viewport when once is enabled', () => {
    const element = document.createElement('div');

    renderHook(() => useInView({ once: true }));

    act(() => {
      callback([
        {
          isIntersecting: true,
          target: element,
        },
      ]);
    });

    expect(unobserve).toHaveBeenCalledWith(element);
  });

  it('disconnects the observer on unmount', () => {
    const { unmount } = renderHook(() => useInView({}));

    unmount();

    expect(disconnect).toHaveBeenCalled();
  });
});

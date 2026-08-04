import { vi } from 'vitest';

import { useColorMode } from './use-color-mode';

import { act, renderHook } from '@testing-library/react';

describe('useColorMode', () => {
  beforeEach(() => {
    document.documentElement.className = 'light';

    window.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      media: '',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((cb) => {
        cb(0);

        return 0;
      }),
    );
  });

  it('returns the DOM color mode', () => {
    document.documentElement.className = 'dark';

    const { result } = renderHook(() => useColorMode());

    expect(result.current.colorMode).toBe('dark');
  });

  it('updates the DOM class list', () => {
    const { result } = renderHook(() => useColorMode());

    act(() => {
      result.current.setColorMode('dark');
    });

    expect(document.documentElement).toHaveClass('dark');
    expect(document.documentElement).not.toHaveClass('light');
  });

  it('calls onChange when provided', () => {
    const onChange = vi.fn();

    const { result } = renderHook(() =>
      useColorMode({
        onChange,
      }),
    );

    act(() => {
      result.current.setColorMode('dark');
    });

    expect(onChange).toHaveBeenCalledWith('dark');
  });

  it('does not update the DOM when useClassList is disabled', () => {
    const { result } = renderHook(() =>
      useColorMode({
        useClassList: false,
      }),
    );

    act(() => {
      result.current.setColorMode('dark');
    });

    expect(document.documentElement).toHaveClass('light');
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('toggles from light to dark', () => {
    document.documentElement.className = 'light';

    const { result } = renderHook(() => useColorMode());

    act(() => {
      result.current.toggleColorMode();
    });

    expect(document.documentElement).toHaveClass('dark');
  });

  it('toggles from dark to light', () => {
    document.documentElement.className = 'dark';

    const { result } = renderHook(() => useColorMode());

    act(() => {
      result.current.toggleColorMode();
    });

    expect(document.documentElement).toHaveClass('light');
  });
});

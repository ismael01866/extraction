import { PointerEvent } from 'react';

import { vi } from 'vitest';

import { useDragMomentum } from './use-drag-momentum';
import { Axis } from './use-drag-momentum.types';

import { act, renderHook } from '@testing-library/react';

describe('useDragMomentum', () => {
  let element: HTMLElement;

  let setPointerCapture: ReturnType<typeof vi.fn>;
  let applyOffset: ReturnType<typeof vi.fn>;
  let getOffset: ReturnType<typeof vi.fn>;
  let onDragStart: ReturnType<typeof vi.fn>;
  let onDragMove: ReturnType<typeof vi.fn>;
  let onSettle: ReturnType<typeof vi.fn>;

  let rafCallbacks: ((time: number) => void)[];

  beforeEach(() => {
    element = document.createElement('div');

    setPointerCapture = vi.fn();
    element.setPointerCapture = setPointerCapture as unknown as (pointerId: number) => void;

    applyOffset = vi.fn();
    getOffset = vi.fn(() => 0);
    onDragStart = vi.fn();
    onDragMove = vi.fn();
    onSettle = vi.fn();

    rafCallbacks = [];

    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((callback: (time: number) => void) => {
        rafCallbacks.push(callback);
        return rafCallbacks.length;
      }),
    );

    vi.stubGlobal('cancelAnimationFrame', vi.fn());

    vi.spyOn(performance, 'now').mockReturnValue(0);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const pointerEvent = (overrides: Partial<PointerEvent> = {}) =>
    ({
      pointerId: 1,
      clientX: 100,
      clientY: 100,
      ...overrides,
    }) as PointerEvent;

  const render = (
    options: Partial<{
      axis: Axis;
      enabled: boolean;
      friction: number;
      minVelocity: number;
    }> = {},
  ) =>
    renderHook(() =>
      useDragMomentum(
        { current: element },
        {
          getOffset: getOffset as (el: HTMLElement, axis: Axis) => number,
          applyOffset: applyOffset as (el: HTMLElement, offset: number, axis: Axis) => void,
          onDragStart: onDragStart as (el: HTMLElement) => void,
          onDragMove: onDragMove as (el: HTMLElement, offset: number) => void,
          onSettle: onSettle as (el: HTMLElement, offset: number) => void,
          ...options,
        },
      ),
    );

  it('does nothing when disabled', () => {
    const { result } = render({
      enabled: false,
    });

    act(() => {
      result.current.onPointerDown(pointerEvent());
    });

    expect(setPointerCapture).not.toHaveBeenCalled();
    expect(onDragStart).not.toHaveBeenCalled();
  });

  it('starts a drag and captures the pointer', () => {
    getOffset.mockReturnValue(25);

    const { result } = render();

    act(() => {
      result.current.onPointerDown(pointerEvent());
    });

    expect(setPointerCapture).toHaveBeenCalledWith(1);
    expect(getOffset).toHaveBeenCalledWith(element, 'horizontal');
    expect(onDragStart).toHaveBeenCalledWith(element);
    expect(applyOffset).toHaveBeenCalledWith(element, 25, 'horizontal');
  });

  it('moves the track according to pointer movement', () => {
    getOffset.mockReturnValue(10);

    const { result } = render();

    vi.spyOn(performance, 'now').mockReturnValueOnce(0).mockReturnValueOnce(100);

    act(() => {
      result.current.onPointerDown(
        pointerEvent({
          clientX: 100,
        }),
      );
    });

    act(() => {
      result.current.onPointerMove(
        pointerEvent({
          clientX: 140,
        }),
      );
    });

    expect(applyOffset).toHaveBeenLastCalledWith(element, 50, 'horizontal');

    expect(onDragMove).toHaveBeenCalledWith(element, 50);
  });

  it('uses clientY for vertical dragging', () => {
    getOffset.mockReturnValue(-20);

    const { result } = render({
      axis: 'vertical',
    });

    act(() => {
      result.current.onPointerDown(
        pointerEvent({
          clientY: 100,
        }),
      );
    });

    act(() => {
      result.current.onPointerMove(
        pointerEvent({
          clientY: 130,
        }),
      );
    });

    expect(applyOffset).toHaveBeenLastCalledWith(element, 10, 'vertical');
  });

  it('ignores pointer moves before dragging starts', () => {
    const { result } = render();

    act(() => {
      result.current.onPointerMove(pointerEvent());
    });

    expect(applyOffset).not.toHaveBeenCalled();
  });

  it('starts momentum when dragging ends', () => {
    vi.spyOn(performance, 'now').mockReturnValueOnce(0).mockReturnValueOnce(10);

    const { result } = render({
      minVelocity: 0.1,
    });

    act(() => {
      result.current.onPointerDown(
        pointerEvent({
          clientX: 100,
        }),
      );
    });

    act(() => {
      result.current.onPointerMove(
        pointerEvent({
          clientX: 110,
        }),
      );
    });

    act(() => {
      result.current.onPointerUp(pointerEvent());
    });

    expect(requestAnimationFrame).toHaveBeenCalled();
    expect(rafCallbacks).toHaveLength(1);
  });

  it('applies momentum on animation frames', () => {
    vi.spyOn(performance, 'now').mockReturnValueOnce(0).mockReturnValueOnce(10);

    getOffset.mockReturnValue(0);

    const { result } = render({
      friction: 0.5,
      minVelocity: 0.1,
    });

    act(() => {
      result.current.onPointerDown(
        pointerEvent({
          clientX: 100,
        }),
      );
    });

    act(() => {
      result.current.onPointerMove(
        pointerEvent({
          clientX: 110,
        }),
      );
    });

    act(() => {
      result.current.onPointerUp(pointerEvent());
    });

    act(() => {
      rafCallbacks[0]?.(0);
    });

    expect(applyOffset).toHaveBeenCalledWith(element, expect.any(Number), 'horizontal');
  });

  it('calls onSettle when velocity falls below the minimum', () => {
    vi.spyOn(performance, 'now').mockReturnValueOnce(0).mockReturnValueOnce(10);

    getOffset.mockReturnValue(25);

    const { result } = render({
      friction: 0,
      minVelocity: 0.5,
    });

    act(() => {
      result.current.onPointerDown(
        pointerEvent({
          clientX: 100,
        }),
      );
    });

    act(() => {
      result.current.onPointerMove(
        pointerEvent({
          clientX: 110,
        }),
      );
    });

    act(() => {
      result.current.onPointerUp(pointerEvent());
    });

    act(() => {
      rafCallbacks[0]?.(0);
    });

    expect(onSettle).toHaveBeenCalledWith(element, 25);
  });

  it('handles pointer cancel like pointer up', () => {
    vi.spyOn(performance, 'now').mockReturnValueOnce(0).mockReturnValueOnce(10);

    const { result } = render({
      minVelocity: 0.1,
    });

    act(() => {
      result.current.onPointerDown(
        pointerEvent({
          clientX: 100,
        }),
      );
    });

    act(() => {
      result.current.onPointerMove(
        pointerEvent({
          clientX: 110,
        }),
      );
    });

    act(() => {
      result.current.onPointerCancel(pointerEvent());
    });

    expect(requestAnimationFrame).toHaveBeenCalled();
  });

  it('cancels existing momentum when a new drag starts', () => {
    vi.spyOn(performance, 'now').mockReturnValueOnce(0).mockReturnValueOnce(10);

    const { result } = render({
      minVelocity: 0.1,
    });

    act(() => {
      result.current.onPointerDown(
        pointerEvent({
          pointerId: 1,
          clientX: 100,
        }),
      );
    });

    act(() => {
      result.current.onPointerMove(
        pointerEvent({
          pointerId: 1,
          clientX: 110,
        }),
      );
    });

    act(() => {
      result.current.onPointerUp(pointerEvent());
    });

    act(() => {
      result.current.onPointerDown(
        pointerEvent({
          pointerId: 2,
          clientX: 200,
        }),
      );
    });

    expect(cancelAnimationFrame).toHaveBeenCalled();
  });

  it('cancels momentum on unmount', () => {
    vi.spyOn(performance, 'now').mockReturnValueOnce(0).mockReturnValueOnce(10);

    const { result, unmount } = render({
      minVelocity: 0.1,
    });

    act(() => {
      result.current.onPointerDown(
        pointerEvent({
          clientX: 100,
        }),
      );
    });

    act(() => {
      result.current.onPointerMove(
        pointerEvent({
          clientX: 110,
        }),
      );
    });

    act(() => {
      result.current.onPointerUp(pointerEvent());
    });

    unmount();

    expect(cancelAnimationFrame).toHaveBeenCalled();
  });
});

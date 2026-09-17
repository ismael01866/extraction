'use client';

import { PointerEvent, RefObject, useCallback, useEffect, useRef } from 'react';

import { Axis, DragMomentumHandlers, UseDragMomentumOptions } from './use-drag-momentum.types';

const AXIS_POS = {
  horizontal: 'clientX',
  vertical: 'clientY',
} as const;

function defaultGetOffset(el: HTMLElement, axis: Axis) {
  const matrix = new DOMMatrixReadOnly(getComputedStyle(el).transform);
  return axis === 'horizontal' ? matrix.m41 : matrix.m42;
}

function defaultApplyOffset(el: HTMLElement, offset: number, axis: Axis) {
  el.style.transform =
    axis === 'horizontal' ? `translate3d(${offset}px, 0, 0)` : `translate3d(0, ${offset}px, 0)`;
}

export function useDragMomentum(
  elRef: RefObject<HTMLElement | null>,
  options: UseDragMomentumOptions = {},
): DragMomentumHandlers {
  const {
    axis = 'horizontal',
    enabled = true,
    friction = 0.95,
    minVelocity = 0.5,
    getOffset = defaultGetOffset,
    applyOffset = defaultApplyOffset,
    onDragStart,
    onDragMove,
    onSettle,
  } = options;

  const isDragging = useRef(false);
  const baseOffset = useRef(0);
  const startPos = useRef(0);
  const lastPos = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const rafId = useRef<number | null>(null);

  const posKey = AXIS_POS[axis];

  const stopMomentum = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  const runMomentum = useCallback(() => {
    const el = elRef.current;
    if (!el) return;

    const step = () => {
      if (Math.abs(velocity.current) < minVelocity) {
        rafId.current = null;
        onSettle?.(el, getOffset(el, axis));
        return;
      }

      const current = getOffset(el, axis);
      applyOffset(el, current + velocity.current, axis);

      velocity.current *= friction;
      rafId.current = requestAnimationFrame(step);
    };

    rafId.current = requestAnimationFrame(step);
  }, [applyOffset, axis, elRef, friction, getOffset, minVelocity, onSettle]);

  const onPointerDown = useCallback(
    (e: PointerEvent) => {
      if (!enabled) return;

      const el = elRef.current;
      if (!el) return;

      stopMomentum();
      el.setPointerCapture(e.pointerId);

      const currentOffset = getOffset(el, axis);

      onDragStart?.(el);
      applyOffset(el, currentOffset, axis);

      baseOffset.current = currentOffset;
      isDragging.current = true;
      startPos.current = e[posKey];
      lastPos.current = e[posKey];
      lastTime.current = performance.now();
      velocity.current = 0;
    },
    [axis, elRef, enabled, getOffset, onDragStart, posKey, stopMomentum, applyOffset],
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      const el = elRef.current;
      if (!isDragging.current || !el) return;

      const pos = e[posKey];
      const delta = pos - startPos.current;
      const offset = baseOffset.current + delta;
      applyOffset(el, offset, axis);

      const now = performance.now();
      const dt = now - lastTime.current;
      if (dt > 0) velocity.current = (pos - lastPos.current) / dt;
      lastPos.current = pos;
      lastTime.current = now;

      onDragMove?.(el, offset);
    },
    [applyOffset, axis, elRef, onDragMove, posKey],
  );

  const endDrag = useCallback(() => {
    if (!isDragging.current) return;

    isDragging.current = false;
    velocity.current *= 16;
    runMomentum();
  }, [runMomentum]);

  const onPointerUp = useCallback(() => endDrag(), [endDrag]);
  const onPointerCancel = useCallback(() => endDrag(), [endDrag]);

  useEffect(() => stopMomentum, [stopMomentum]);

  return { onPointerDown, onPointerMove, onPointerUp, onPointerCancel };
}

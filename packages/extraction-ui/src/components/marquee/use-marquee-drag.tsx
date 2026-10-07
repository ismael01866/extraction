import { RefObject, useCallback } from 'react';

import { useDragMomentum } from '../../hooks/use-drag-momentum';

function wrapOffset(offset: number, loopSize: number) {
  return -(((-offset % loopSize) + loopSize) % loopSize);
}

export function useMarqueeDrag(
  trackRef: RefObject<HTMLElement | null>,
  {
    orientation,
    enabled,
    friction,
    minVelocity,
  }: {
    orientation: 'horizontal' | 'vertical';
    enabled: boolean;
    friction?: number;
    minVelocity?: number;
  },
) {
  const getLoopSize = useCallback(
    (el: HTMLElement) => {
      const styles = getComputedStyle(el);

      const gap =
        orientation === 'horizontal'
          ? Number.parseFloat(styles.columnGap) || 0
          : Number.parseFloat(styles.rowGap) || 0;

      const size = orientation === 'horizontal' ? el.scrollWidth : el.scrollHeight;

      return size / 2 + gap / 2;
    },
    [orientation],
  );

  const applyWrappedOffset = useCallback(
    (el: HTMLElement, offset: number, axis: 'horizontal' | 'vertical') => {
      const loopSize = getLoopSize(el);
      const wrapped = wrapOffset(offset, loopSize);

      el.style.transform =
        axis === 'horizontal'
          ? `translate3d(${wrapped}px, 0, 0)`
          : `translate3d(0, ${wrapped}px, 0)`;
    },
    [getLoopSize],
  );

  const resync = useCallback(
    (el: HTMLElement, offset: number) => {
      const styles = getComputedStyle(el);

      const gap =
        orientation === 'horizontal'
          ? Number.parseFloat(styles.columnGap) || 0
          : Number.parseFloat(styles.rowGap) || 0;

      const size = orientation === 'horizontal' ? el.scrollWidth : el.scrollHeight;
      const loopSize = size / 2 + gap / 2;

      let progress = (((-offset % loopSize) + loopSize) % loopSize) / loopSize;

      if (styles.animationDirection === 'reverse') {
        progress = 1 - progress;
      }

      const duration = Number.parseFloat(styles.animationDuration) * 1000;

      el.style.animationName = 'none';
      el.style.transform = '';

      void el.offsetWidth;

      el.style.animationName = '';
      el.style.animationDelay = `-${progress * duration}ms`;
      el.style.animationPlayState = 'running';
    },
    [orientation],
  );

  const onDragStart = useCallback((el: HTMLElement) => {
    el.style.animationName = 'none';
    el.style.animationPlayState = 'paused';
  }, []);

  return useDragMomentum(trackRef, {
    axis: orientation,
    enabled,
    friction,
    minVelocity,
    applyOffset: applyWrappedOffset,
    onDragStart,
    onSettle: resync,
  });
}

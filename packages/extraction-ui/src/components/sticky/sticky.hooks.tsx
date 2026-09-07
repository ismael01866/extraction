'use client';

import { useEffect, useRef } from 'react';

import { useInView } from '../../hooks';

export const useStuck = <T extends HTMLElement>(onStuckChange?: (stuck: boolean) => void) => {
  const elRef = useRef<T>(null);

  const { ref: sentinelRef, isInView, entry } = useInView({ threshold: 0 });
  const stuck = !isInView && !!entry && entry.boundingClientRect.top < 0;

  useEffect(() => {
    const element = elRef.current;
    if (!element) return;

    element.dataset.stuck = String(stuck);
    onStuckChange?.(stuck);
  }, [stuck, onStuckChange]);

  return { elRef, sentinelRef, stuck };
};

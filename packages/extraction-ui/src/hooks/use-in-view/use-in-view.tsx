'use client';

import { useEffect, useRef, useState } from 'react';

import { UseInViewOptions } from './use-in-view.types';

export const useInView = (options: UseInViewOptions) => {
  const { root, rootMargin, threshold, once = false, initialInView = false } = options;

  const ref = useRef(null);

  const [isInView, setIsInView] = useState(initialInView);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        setEntry(entry);

        if (once) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        }
      },
      { root, rootMargin, threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView, entry };
};

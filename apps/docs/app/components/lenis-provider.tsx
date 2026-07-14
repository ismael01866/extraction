'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import Lenis from 'lenis';

export function LenisProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const prefersReducedMotion = globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis();

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}

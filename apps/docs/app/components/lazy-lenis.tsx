'use client';

import dynamic from 'next/dynamic';

const LenisProvider = dynamic(() => import('./lenis-provider').then((m) => m.LenisProvider), {
  ssr: false,
});

export { LenisProvider as LazyLenisProvider };

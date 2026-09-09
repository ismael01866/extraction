'use client';

import dynamic from 'next/dynamic';

const ProductionAnalytics = dynamic(
  () => import('@vercel/analytics/next').then((m) => m.Analytics),
  {
    ssr: false,
  },
);

export function Analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return <ProductionAnalytics />;
}

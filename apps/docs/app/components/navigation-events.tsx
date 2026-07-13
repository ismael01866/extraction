'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

export function NavigationEvents() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
  }, [pathname]);

  return null;
}

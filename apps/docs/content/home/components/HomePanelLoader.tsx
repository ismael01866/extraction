'use client';

import { useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';

import { cn } from 'extraction-ui-utils';

export type PanelName =
  | 'layout'
  | 'buttons'
  | 'forms'
  | 'overlays'
  | 'navigation'
  | 'data-display'
  | 'feedback'
  | 'typography';

const PANEL_COMPONENTS = {
  layout: dynamic(
    () => import('../panels/HomePanelLayout').then((module) => module.HomePanelLayout),
    {
      ssr: false,
    },
  ),
  buttons: dynamic(
    () => import('../panels/HomePanelButtons').then((module) => module.HomePanelButtons),
    { ssr: false },
  ),
  forms: dynamic(() => import('../panels/HomePanelForms').then((module) => module.HomePanelForms), {
    ssr: false,
  }),
  overlays: dynamic(
    () => import('../panels/HomePanelOverlays').then((module) => module.HomePanelOverlays),
    { ssr: false },
  ),
  navigation: dynamic(
    () => import('../panels/HomePanelNavigation').then((module) => module.HomePanelNavigation),
    { ssr: false },
  ),
  'data-display': dynamic(
    () => import('../panels/HomePanelDataDisplay').then((module) => module.HomePanelDataDisplay),
    { ssr: false },
  ),
  feedback: dynamic(
    () => import('../panels/HomePanelFeedback').then((module) => module.HomePanelFeedback),
    { ssr: false },
  ),
  typography: dynamic(
    () => import('../panels/HomePanelTypography').then((module) => module.HomePanelTypography),
    { ssr: false },
  ),
} as const;

function PanelPreview({ name }: { name: PanelName }) {
  return (
    <div aria-hidden className="flex min-h-24 w-full flex-col justify-center gap-2">
      {name === 'layout' && (
        <>
          <div className="flex gap-2">
            <PreviewBlock />
            <PreviewBlock />
            <PreviewBlock />
            <PreviewBlock />
          </div>
          <PreviewBlock className="w-full" />
        </>
      )}
      {name === 'buttons' && (
        <>
          <div className="flex gap-2">
            <PreviewBlock className="w-10" />
            <PreviewBlock className="flex-1" />
            <PreviewBlock className="flex-1" />
          </div>
          <div className="flex gap-2">
            <PreviewBlock className="w-10" />
            <PreviewBlock className="flex-1" />
            <PreviewBlock className="flex-1" />
          </div>
        </>
      )}
      {name === 'forms' && (
        <>
          <div className="flex gap-2">
            <PreviewBlock className="flex-1" />
            <PreviewBlock className="flex-1" />
          </div>
          <PreviewBlock className="w-full" />
        </>
      )}
      {name === 'overlays' && <PreviewBlock className="h-20 w-full" />}
      {name === 'navigation' && (
        <>
          <div className="flex gap-2">
            <PreviewBlock className="flex-1" />
            <PreviewBlock className="flex-1" />
          </div>
          <PreviewBlock className="w-full" />
        </>
      )}
      {name === 'data-display' && (
        <>
          <div className="flex items-center gap-2">
            <PreviewBlock className="size-9 rounded-full" />
            <PreviewBlock className="h-4 flex-1" />
          </div>
          <PreviewBlock className="w-full" />
        </>
      )}
      {name === 'feedback' && (
        <>
          <div className="flex gap-2">
            <PreviewBlock className="w-10" />
            <PreviewBlock className="flex-1" />
          </div>
          <PreviewBlock className="h-8 w-full" />
        </>
      )}
      {name === 'typography' && (
        <>
          <PreviewBlock className="h-5 w-3/4" />
          <PreviewBlock className="h-4 w-full" />
          <PreviewBlock className="h-4 w-2/3" />
        </>
      )}
    </div>
  );
}

function PreviewBlock({ className }: { className?: string }) {
  return <div className={cn('bg-muted h-9 rounded-sm', className)} />;
}

export function HomePanelLoader({ name }: { name: PanelName }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const Panel = PANEL_COMPONENTS[name];

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isActive) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      onClick={() => setIsActive(true)}
      onFocusCapture={() => setIsActive(true)}
      onPointerEnter={() => setIsActive(true)}
    >
      {isActive ? (
        <div className="animate-in fade-in duration-500">
          <Panel />
        </div>
      ) : (
        <PanelPreview name={name} />
      )}
    </div>
  );
}

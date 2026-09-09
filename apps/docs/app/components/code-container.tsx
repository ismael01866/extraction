'use client';

import React, { useEffect, useRef, useState } from 'react';

import { Button, Collapsible, Text } from 'extraction-ui';

export function CodeContainer({
  children,
  className = '',
  defaultOpen = false,
  showToggle = true,
}: {
  children?: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  showToggle?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = contentRef.current;

    if (!element) return;

    const checkOverflow = () => {
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(element);

    return () => observer.disconnect();
  }, [children]);

  const canCollapse = isOverflowing || open;

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="group">
      <div
        ref={contentRef}
        className={`transform-[translateZ(0)] relative max-h-24 overflow-hidden group-data-[state=open]:max-h-none ${className} `}
      >
        <div className="code-container x-container variant-outline palette-neutral">{children}</div>

        {isOverflowing && !open && (
          <div className="bg-linear-to-t pointer-events-none absolute bottom-0 left-0 right-0 isolate mx-0.5 h-20 from-white to-transparent" />
        )}
      </div>

      {showToggle && canCollapse && (
        <Collapsible.Trigger asChild>
          <Button className="size-sm variant-surface palette-neutral border-t-0! w-full rounded-none rounded-b-md">
            <Text className="text-2xs">{open ? 'HIDE CODE' : 'SHOW CODE'}</Text>
          </Button>
        </Collapsible.Trigger>
      )}
    </Collapsible>
  );
}

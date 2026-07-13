import React from 'react';

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
  return (
    <Collapsible defaultOpen={defaultOpen}>
      <Collapsible.Content>
        <div
          className={`code-container x-container variant-outline palette-neutral ${className}`}
        >
          {children}
        </div>
      </Collapsible.Content>
      {showToggle && (
        <Collapsible.Trigger asChild>
          <Button className="size-sm variant-surface palette-neutral w-full rounded-none rounded-b-md border-t-0!">
            <Text className="text-2xs">SHOW CODE</Text>
          </Button>
        </Collapsible.Trigger>
      )}
    </Collapsible>
  );
}

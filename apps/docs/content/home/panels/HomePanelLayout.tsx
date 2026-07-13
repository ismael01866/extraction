import { DecorativeBox } from '@/app/components';

import { HStack, Separator, VStack } from 'extraction-ui';

export function HomePanelLayout() {
  return (
    <VStack>
      <HStack className="w-full">
        <DecorativeBox className="size-9 flex-1" />
        <Separator className="h-6" orientation="vertical" />
        <DecorativeBox className="size-9 flex-1" />
        <Separator className="h-6" orientation="vertical" />
        <DecorativeBox className="size-9 flex-1" />
        <Separator className="h-6" orientation="vertical" />
        <DecorativeBox className="size-9 flex-1" />
      </HStack>
      <DecorativeBox className="size-9 w-full" />
    </VStack>
  );
}

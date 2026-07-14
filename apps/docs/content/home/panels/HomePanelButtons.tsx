import { Button, HStack, IconButton, VStack } from 'extraction-ui';
import { LuStar } from 'react-icons/lu';

export function HomePanelButtons() {
  return (
    <VStack>
      <HStack className="w-full">
        <IconButton aria-label="icon-button" className="icon-button-sm">
          <LuStar />
        </IconButton>
        <Button className="button-sm variant-outline flex-1">Button</Button>
        <Button className="button-sm variant-surface flex-1">Button</Button>
      </HStack>
      <HStack className="w-full">
        <IconButton aria-label="icon-button" className="icon-button-sm palette-neutral">
          <LuStar />
        </IconButton>
        <Button className="button-sm variant-outline palette-neutral flex-1">Button</Button>
        <Button className="button-sm variant-surface palette-neutral flex-1">Button</Button>
      </HStack>
    </VStack>
  );
}

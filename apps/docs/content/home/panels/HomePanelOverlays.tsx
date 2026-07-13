import {
  Button,
  Dialog,
  HStack,
  Popover,
  Tooltip,
  VStack,
} from 'extraction-ui';

export function HomePanelOverlays() {
  return (
    <VStack>
      <HStack className="w-full">
        <Dialog>
          <Dialog.Trigger asChild>
            <Button className="button-sm flex-1">Dialog</Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Section>
                <Dialog.Title>Project update ready</Dialog.Title>
                <Dialog.Description>
                  Alice was beginning to get very tired of sitting by her sister
                  on the bank, and of having nothing to do.
                </Dialog.Description>
              </Dialog.Section>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog>
      </HStack>
      <HStack className="w-full">
        <Popover>
          <Popover.Trigger asChild>
            <Button className="button-sm variant-outline flex-1">
              Popover
            </Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content>
              <Popover.Section>
                <Popover.Title>Project update ready</Popover.Title>
                <Popover.Description>
                  Alice was beginning to get very tired of sitting by her sister
                  on the bank, and of having nothing to do.
                </Popover.Description>
              </Popover.Section>
              <Popover.Arrow />
            </Popover.Content>
          </Popover.Portal>
        </Popover>
        <Tooltip.Provider>
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button className="button-sm variant-outline flex-1">
                Tooltip
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content>
                Project update ready
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip>
        </Tooltip.Provider>
      </HStack>
    </VStack>
  );
}

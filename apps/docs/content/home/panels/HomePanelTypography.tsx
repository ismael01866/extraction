import { Blockquote, HStack, Kbd, List, VStack } from 'extraction-ui';
import { LuCheck } from 'react-icons/lu';

export function HomePanelTypography() {
  return (
    <VStack className="gap-4">
      <HStack className="w-full justify-between">
        <List className="flex-row text-sm">
          <List.Item>
            <List.Indicator className="text-success">
              <LuCheck />
            </List.Indicator>
            Build passed cleanly
          </List.Item>
        </List>
        <HStack>
          <Kbd>⌘</Kbd> + <Kbd>S</Kbd>
        </HStack>
      </HStack>
      <Blockquote className="blockquote-sm w-full">
        “Design follows function first”
        <Blockquote.Cite>— Jane Doe</Blockquote.Cite>
      </Blockquote>
    </VStack>
  );
}

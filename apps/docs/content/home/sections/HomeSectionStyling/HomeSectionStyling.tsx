import { Description, Display, Flex, Section, Stack } from 'extraction-ui';

import { PreviewComponent } from './PreviewComponent';

export function HomeSectionStyling() {
  return (
    <Section>
      <Stack className="gap-y-12">
        <Stack className="gap-4">
          <Display className="text-fluid">Utility based styling</Display>
          <Description className="text-fluid-xl">
            Mix variants, palettes, and shades to create unique components that respond to any
            state.
          </Description>
        </Stack>

        <Flex className="gap-4">
          <PreviewComponent />
        </Flex>
      </Stack>
    </Section>
  );
}

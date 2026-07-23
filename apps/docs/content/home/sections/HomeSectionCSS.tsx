import { MotionInView } from '@/app/components/motion-in-view';

import {
  Description,
  Display,
  Grid,
  HStack,
  Icon,
  IconBox,
  Section,
  Stack,
  Title,
} from 'extraction-ui';
import { LuCode, LuPalette, LuWaypoints } from 'react-icons/lu';

const CSS_FEATURES = [
  {
    icon: LuPalette,
    title: 'Curated Design',
    description: 'Ships with a curated set of design tokens.',
  },
  {
    icon: LuCode,
    title: 'CSS Variables',
    description: 'Override styles without touching component code.',
  },
  {
    icon: LuWaypoints,
    title: 'Design Tokens',
    description: 'Consistent visual language across your entire app.',
  },
];

export function HomeSectionCSS() {
  return (
    <Section>
      <Grid className="grid-cols-1 gap-x-24 gap-y-12 xl:grid-cols-2">
        <MotionInView>
          <Stack className="gap-4">
            <Display className="text-fluid">Set your design from CSS</Display>
            <Description className="text-fluid description-2xl">
              Tune colors, spacing, measures, and more with CSS variables
            </Description>
          </Stack>
        </MotionInView>

        <Stack className="gap-8">
          {CSS_FEATURES.map((feature, index) => (
            <MotionInView
              key={feature.title}
              style={{
                transitionDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <HStack className="items-start gap-4">
                <IconBox className="icon-box-lg">
                  <Icon as={feature.icon} />
                </IconBox>

                <Stack>
                  <Title className="title-lg text-fluid font-semibold leading-none">
                    {feature.title}
                  </Title>
                  <Description className="opacity-muted text-fluid">
                    {feature.description}
                  </Description>
                </Stack>
              </HStack>
            </MotionInView>
          ))}
        </Stack>
      </Grid>
    </Section>
  );
}

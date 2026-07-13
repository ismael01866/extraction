import { MotionInView } from '@/app/components/motion-in-view';

import {
  Description,
  Grid,
  HStack,
  Headline,
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
    <Section className="pros">
      <Grid className="grid-cols-1 gap-x-24 gap-y-4 xl:grid-cols-2">
        <MotionInView>
          <Stack className="gap-4">
            <Headline className="headline-xl text-fluid leading-tight font-semibold">
              Set your design from CSS
            </Headline>
            <Headline className="headline-sm text-fluid">
              Tune colors, spacing, measures, and more with CSS variables
            </Headline>
          </Stack>
        </MotionInView>

        <Stack className="mbs-4 gap-8 sm:mbs-12">
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
                  <Title className="title-lg text-fluid leading-none font-semibold">
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

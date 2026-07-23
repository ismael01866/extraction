import { MotionInView } from '@/app/components/motion-in-view';

import {
  Button,
  Center,
  Description,
  Display,
  Grid,
  Icon,
  Mark,
  Section,
  Stack,
} from 'extraction-ui';
import { LuRocket } from 'react-icons/lu';

export function HomeSectionHero() {
  return (
    <Section>
      <Stack className="gap-6">
        <MotionInView>
          <Center>
            <Display className="text-fluid display-lg">
              Modern
              <Mark className="variant-solid palette-primary ml-2 inline-block px-3 py-2">
                UI System
              </Mark>
            </Display>
          </Center>
        </MotionInView>

        <MotionInView className="delay-100">
          <Center>
            <Description className="text-fluid description-2xl">
              Customizable design system and component library to help you ship your UI faster
            </Description>
          </Center>
        </MotionInView>

        <MotionInView className="delay-200">
          <Grid className="mbs-6 grid-cols-1 justify-center gap-2 sm:grid-cols-2">
            <Button
              as="a"
              href="get-started/overview/installation"
              className="button-lg text-fluid h-14 w-full justify-self-end px-8 sm:w-fit"
            >
              <Icon>
                <LuRocket />
              </Icon>
              Get Started
            </Button>
            <Button
              as="a"
              href="/components/overview/introduction"
              className="button-lg text-fluid tonal-black h-14 w-full px-8 sm:w-fit"
            >
              Explore Components
            </Button>
          </Grid>
        </MotionInView>
      </Stack>
    </Section>
  );
}

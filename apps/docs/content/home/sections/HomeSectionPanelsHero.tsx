import { MotionInView } from '@/app/components/motion-in-view';

import { Button, Headline, Icon, Section, VStack } from 'extraction-ui';
import { LuFileBox } from 'react-icons/lu';

export function HomeSectionPanelsHero() {
  return (
    <Section>
      <MotionInView>
        <VStack className="gap-4">
          <Icon as={LuFileBox} className="mbe-8 size-24" />
          <VStack className="gap-8">
            <Headline className="headline-xl text-fluid font-semibold">
              80+ customizable components
            </Headline>
            <Headline className="headline-sm text-fluid">
              Production-ready components designed for speed, aesthetic,
              functionality, and flexibility
            </Headline>
          </VStack>
        </VStack>
      </MotionInView>

      <MotionInView className="delay-50">
        <Button className="button-lg tonal-black text-fluid mbs-12 h-14 px-8">
          View all components
        </Button>
      </MotionInView>
    </Section>
  );
}

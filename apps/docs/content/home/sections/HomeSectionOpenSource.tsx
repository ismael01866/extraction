'use client';

import { MotionInView } from '@/app/components';

import { Button, Headline, Icon, Section, VStack } from 'extraction-ui';
import { LuHandHeart } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';

export function HomeSectionOpenSource() {
  return (
    <Section>
      <MotionInView>
        <VStack className="gap-4">
          <Icon as={LuHandHeart} className="mbe-4 size-24" />
          <Headline className="headline-xl text-fluid font-semibold">
            Open Source
          </Headline>
          <Headline className="headline-sm text-fluid">
            {' '}
            Extraction UI is an open source project licensed under MIT
          </Headline>
        </VStack>
      </MotionInView>
      <MotionInView className="delay-50">
        <div>
          <Button className="button-lg tonal-black text-fluid mbs-8 h-14 px-8">
            <Icon as={SiGithub} aria-label="github" />
            View on Github
          </Button>
        </div>
      </MotionInView>
    </Section>
  );
}

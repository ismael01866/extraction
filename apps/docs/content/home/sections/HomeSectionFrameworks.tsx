'use client';

import { useState } from 'react';

import { MotionInView } from '@/app/components/motion-in-view';

import {
  Description,
  Display,
  HStack,
  Icon,
  IconButton,
  Mark,
  Section,
  Stack,
} from 'extraction-ui';
import { SiAstro, SiGatsby, SiNextdotjs, SiVite } from 'react-icons/si';

const FRAMEWORKS = [
  { icon: SiNextdotjs, label: 'Next' },
  { icon: SiAstro, label: 'Astro' },
  { icon: SiVite, label: 'Vite' },
  { icon: SiGatsby, label: 'Gatsby' },
];

export function HomeSectionFrameworks() {
  const [framework, setFramework] = useState('any React stack');

  return (
    <Section>
      <Stack className="gap-8 sm:gap-12">
        <MotionInView>
          <Stack className="gap-8">
            <Display className="text-fluid leading-tight">
              Built for <br />
              <Mark
                key={framework}
                className="palette-primary variant-subtle text-fluid wrap-break-word break-all"
              >
                <span className="animate-in slide-from-bottom-4 fade-in duration-slowest inline-block">
                  {framework}
                </span>
              </Mark>
            </Display>
            <Description className="text-fluid description-2xl">
              Same components, same tokens — any framework
            </Description>
          </Stack>
        </MotionInView>

        <HStack className="justify-center" onMouseLeave={() => setFramework('any React stack')}>
          {FRAMEWORKS.map(({ label, icon }, index) => (
            <MotionInView
              key={label}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div>
                <IconButton
                  as={'a'}
                  className="variant-surface tonal-white palette-neutral hover:shade-50 size-14 text-4xl sm:size-20"
                  onMouseEnter={() => setFramework(label)}
                  href={`/get-started/frameworks/${label.toLowerCase()}`}
                  aria-label="icon-button"
                >
                  <Icon as={icon} aria-label={label} />
                </IconButton>
              </div>
            </MotionInView>
          ))}
        </HStack>
      </Stack>
    </Section>
  );
}
